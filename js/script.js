$("document").ready(function() {
  $('.get-quote').on('click', function(json) {
    var corsServer = "https://cors-anywhere.herokuapp.com/";
    apiUrl = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    $.ajaxSetup( { cache:false} );
    $.getJSON( corsServer + apiUrl, jsonAPIFormat, 'jsonp' );
  });

  $('.tweet').on('click', function() {
    var quote = $('#quote-text').text();
    var author = $('#quote-author').text();
    var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + author);
    console.log(tweetLink);
    $('.twitter').attr('href',tweetLink).click();
  });

});

function jsonAPIFormat(json) {
    $('#quote-text').html(json[0].content);
    $('#quote-author').html(json[0].title);
}
