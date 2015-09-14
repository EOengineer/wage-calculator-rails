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


function createSlider(parent, dataObject) {
  var htmlSlider = document.createElement("INPUT");
    htmlSlider.type = 'range';
    htmlSlider.min = 0;
    htmlSlider.max = 100;
    htmlSlider.step = 1;
    htmlSlider.value = 100;
    htmlSlider.id = dataObject + "-slider";
    $(htmlSlider).addClass('rangeslider');
    parent.appendChild(htmlSlider);
    // return the element by id
    return document.getElementById(dataObject + "-slider");
}

function createDiv(parent, dataObject) {
  var companyContainer = document.createElement('div');
    companyContainer.id = dataObject + "-container";
    parent.appendChild(companyContainer);
    // return the new element by id
    return document.getElementById(dataObject + "-container");
}


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
        var innerCompany = createDiv(outerCompContainer, data[i].name)

        // create the rangeslider and set attributes
        var theSlider = createSlider(innerCompany, data[i].name)

        // create min display
        var sliderMin = document.createElement('span');
        $(sliderMin).text(0);
        $(sliderMin).addClass('slider-min');
        innerCompany.appendChild(sliderMin);

        // create the output object that will display range percentage
        var output = document.createElement('output');
        output.id = data[i].name + "-output";
        output.value = theSlider.value;
        innerCompany.appendChild(output);

        // update slider display value
        $("input[type=range]").click(function() {
          $(output).text($(this.value).selector);
        });
      }
    }
  });
})

