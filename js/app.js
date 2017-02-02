/* Waiting for multiples deferred objects */
var $messages = $('#messages');
var ajaxCall = function() {

  //declare an array of deferred objects
  var promises = [];
/**
*iterator function for looping objects,arrays.
* arrays are iterated via their indices
*/
  $.each(['1', '2', '3'], function(key, val){
    var ajax = $.ajax({
      type: 'GET',
      url: val+".json"
    });
    promises.push(ajax);
  });
  // setInterval(ajaxCall,2000);

/**
*function()-do something with each of the returned values
*apply()-call a function with array of arguments
*$.when-when all the promises are resolved do something,
takes infinite number of parameters
* when all defereed objects in the array are resolved call a function
*/
  $.when.apply(window, promises).then(function(){
    //insert the content specified by the parameter,to the end of each element
    $messages.append('<p>AJAX called !</p>');

  });
}
$('.button-ajax').on('click', ajaxCall);
