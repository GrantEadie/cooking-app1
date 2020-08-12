// Business Logic

const tablespoons = function(number1) {
  return number1 * 14.78;
};

const cups = function(number1) {
  return number1 * 237;
};

const ounces = function(number1) {
  return number1 * 29.57;
};

const quarts = function(number1) {
  return number1 * 946.353;
};

const gallons = function(number1) {
  return number1 * 3785.41;
};

// User Interface logic

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseFloat($("#add1").val());
    const result = tablespoons(number1);
    $("#output").text(result + " ml");
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseFloat($("#add1").val());
    const result = cups(number1);
    $("#output").text(result + " ml");
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseFloat($("#add1").val());
    const result = ounces(number1);
    $("#output").text(result + " ml");
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseFloat($("#add1").val());
    const result = quarts(number1);
    $("#output").text(result + " ml");
  });
  
  $("form#gallons").submit(function(event) {
    event.preventDefault();
    const number1 = parseFloat($("#add1").val());
    const result = gallons(number1);
    $("#output").text(result + " ml");
  });

});