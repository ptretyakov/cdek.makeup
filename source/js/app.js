'use strict';
import $ from 'jquery';
import 'jquery.cookie';
import 'jquery-modal';

import InitGeoApi from 'modules/InitGeoApi';
import InitSliders from 'modules/InitSliders';
import InitShowMore from 'modules/InitShowMore';
import InitPopovers from 'modules/InitPopovers';
import InitVkModules from 'modules/InitVkModules';
import InitCalculator from 'modules/InitCalculator';
import InitRangeSlider from 'modules/InitRangeSlider';
import InitScrollFadeEffects from 'modules/InitScrollFadeEffects';
import googleTranslateElementInit from 'modules/googleTranslateElementInit';

window.$ = $;

InitScrollFadeEffects();
InitSliders();
InitPopovers();
InitGeoApi();
InitCalculator();
InitRangeSlider();

$('.js-show-contact-modal').on('click', () => {
  $("#contact-modal").modal({

  });
  // console.log('Show modal');
});

$(document).ready( () => {
  googleTranslateElementInit();

  $(window).load( () => {

    InitVkModules();
    InitShowMore();

  });
});
