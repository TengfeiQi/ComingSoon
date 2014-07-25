require.config({
    baseUrl: 'public/js',
    paths: {
        jquery: 'jquery-1.11.1',
        countdown: 'jquery.countdown',
        placeholders: 'placeholders.min',
        amazingsource: 'amazingsource',
        show: 'show'
    },
    shim: {
        jquery: {
            exports: "jQuery"
        },
        countdown: {  deps: ["jquery"], exports:'countdown' },
        placeholders: {  deps: ["jquery"], exports:'placeholders' },
        amazingsource: {  deps: ["jquery"], exports:'amazingsource' },
        show: {  deps: ["jquery"], exports:'show' }
    }
});

require(['jquery','countdown','placeholders','amazingsource','show'], function($,countdown,placeholders,amazingsource,show) {
    console.log("success");
});
