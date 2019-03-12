import './scss/styles.scss';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {converter} from './scripts.js';

$(document).ready(function(){
  $("form#converter").submit(function(event){
    event.preventDefault();
    $(".result").text(converter(parseInt($("input").val())));
  });
});
