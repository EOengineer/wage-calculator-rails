// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function() {

  // make ajax request for data
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/companies",
    success: function(data){

      // get outer container
      var outerCompContainer = document.getElementById("companies-container");

      // iterate over companies array
      for ( var i = 0, l = data.length; i < l; i++ ) {

        // create inner div
        var companyContainer = document.createElement('div');
        companyContainer.id = data[i].name + "-container";
        outerCompContainer.appendChild(companyContainer);

        // get each company's container
        var innerCompany = document.getElementById(data[i].name + "-container");

        // create the rangeslider and set attributes
        var htmlSlider = document.createElement("INPUT");
        htmlSlider.type = 'range';
        htmlSlider.min = 0;
        htmlSlider.max = 100;
        htmlSlider.step = 1;
        htmlSlider.id = data[i].name + "-slider";
        innerCompany.appendChild(htmlSlider);

      }

    }
  });
})

