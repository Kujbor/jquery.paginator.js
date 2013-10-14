/*
 * example.js - example of jQuery paginator plugin setup
 * Author Oleg Taranov aka Kujbor
 * Copyright (C) 2013: CubeComp Development
 */
$.get('templates/pagination.html', function(template) {

    $.paginator.setTemplate(_.template(template));

});

$(function() {

    $('#pagination').paginator({
        base: 'page/',
        first: 1,
        current: 3,
        last: 10
    });

});
