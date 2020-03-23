// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .


$(function () {
    $('.tohoku').click(function () {
        $('.smallmap').show();
        $('#tohokumap').show();
        $('.bigmap').hide();
    });
});

$(function () {
    $('.kanto').click(function () {
        $('.smallmap').show();
        $('#kantomap').show();
        $('.bigmap').hide();
    });
});

$(function () {
    $('.hokuriku').click(function () {
        $('.smallmap').show();
        $('#hokurikumap').show();
        $('.bigmap').hide();
    });
});
$(function () {
    $('.tyubu').click(function () {
        $('.smallmap').show();
        $('#tyubumap').show();
        $('.bigmap').hide();
    });
});
$(function () {
    $('.kansai').click(function () {
        $('.smallmap').show();
        $('#kansaimap').show();
        $('.bigmap').hide();
    });
});
$(function () {
    $('.shikoku').click(function () {
        $('.smallmap').show();
        $('#shikokumap').show();
        $('.bigmap').hide();
    });
});

$(function () {
    $('.tyugoku').click(function () {
        $('.smallmap').show();
        $('#tyugokumap').show();
        $('.bigmap').hide();
    });
});

$(function () {
    $('.').click(function () {
        $('.smallmap').show();
        $('#map').show();
        $('.bigmap').hide();
    });
});

$(function () {
    $('.kyusyu').click(function () {
        $('.smallmap').show();
        $('#kyusyumap').show();
        $('.bigmap').hide();
    });
});