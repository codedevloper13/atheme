import $ from'jquery';
 
$('.c-navigation').on('mouseenter', '.menu-item-has-children', (e)=> { 
    if(!$(e.currentTarget).parents('.sub-menu').length) {
       $('.menu > .menu-item.open').find('> a >.menu-button').trigger('click');
    }
$(e.currentTarget).addClass('open');

}).on('mouseleave', '.menu-item-has-children', (e)=> {
$(e.currentTarget).removeClass('open');
});

// Language: javascript
// Path: src\assets\js\components\navigation.js
// For accesibility reasons, the menu should be closed when the user clicks on the menu button.
$('.c-navigation').on('click', '.menu .menu-button', (e)=> {
    e.preventDefault();
    e.stopPropagation();
        let menu_button = $(e.currentTarget);
        let menu_link= menu_button.parent();
        let menu_item = menu_link.parent();
        if(menu_item.hasClass('open')){
            menu_item.removeClass('open');
            menu_item.add(menu_item.fine('.menu-item.open')).removeClass('open');
            menu_link.add(menu_item.fine('a')).attr('aria-expanded', 'false');
            menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
            menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
        }else{ 
            menu_item.siblings('.open').find('> a >.menu-button').trigger('click');
            menu_item.addClass('open');
            menu_link.attr('aria-expanded', 'true');
            menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
            menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
        }
 });

//  if the user clicks on the menu button, the other menu should be closed.

$(document).on('click', (e)=> {
if(!$('.menu-item.open').length){
    $('.menu > .menu-item.open > a > .menu-button ').trigger('click');
}
});