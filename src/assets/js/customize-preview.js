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