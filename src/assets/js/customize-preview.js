/**
 * File customizcustomizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

import $ from 'jquery';
import strip_tags from './helpers/strip-tags';

wp.customize('_themename_site_info' ,(value)=>{
    value.bind((to)=>{
        $('.c-site-info__text').html(strip_tags(to,'<a>'));
    })
})

wp.customize('blogname' ,(value)=>{
    value.bind((to)=>{
        $('.c-header__blogname').html(to);
    })
})

// Theme Accent Color Customizer 

wp.customize('_themename_accent_color' ,(value)=>{
    value.bind((to)=>{
        $('#_themename-stylesheet-inline-css').html(`
        a{
        color: ${to}
            }
            
            :focus{
                outline-color: ${to}
            }
            .c-post.sticky{
            border-left-color: ${to}
            }
            button, input[type='submit'] { 
                background-color:${to}
            }
            .header-nav .menu > .menu-item:not(.mega) .sub-menu .menu-item:hover > a {
                background: ${to}
            }
            .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > .sub-menu a:hover {
            color: ${to}
            }

            .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > a:hover {
            color: ${to}
            }
        `);
    })
})