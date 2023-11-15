// Callback Function
//$('body').hide().fadeIn(4000, function(){alert("done");});

// JQuery Events
$('h1').click(function(){
    $(this).text("Hide the Image");
    $('img').hide();
    $('body').children('p').slideToggle();
});

// .each JQuery

// Update Image Link
$('img').each(function(){
    var path = $(this).attr('src');
    var newpath = "img/" + path;
    $(this).attr("src", newpath);
    console.log(newpath);
});

// Update Anchor Link to go to Google
$('a').each(function(){
    $(this).css("text-decoration", "line-through");
    var link = $(this).attr('link');
    var newLink = "https://www.google.com";
    $(this).attr("a", newLink);
    console.log(newLink);
});