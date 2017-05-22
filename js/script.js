$("document").ready(function() {
  $('.get-quote').on('click', function(json) {
    $('.quote').html("new quote");
    var corsServer = "https://cors-anywhere.herokuapp.com/";
    apiUrl = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    $.ajaxSetup( { cache:false} );
    $.getJSON( corsServer + apiUrl, jsonAPIFormat, 'jsonp' );
  });
});

function jsonAPIFormat(json) {
  console.log(json[0].content);
}
