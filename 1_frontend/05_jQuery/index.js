// basically to shorten code we use $ 
// then we can do much modifications by jquery . methods  
// apply the cdn in minified version in the body tag below the link of js file


//to get the current value
//but dont use js for css use .css file instead
//just a css ex in js
// $("h1").css("color", "red");
//$("h1").css("color") 
//console.log(color);


//changing style with jquery by using class
$("h1").addClass("big-title");

//if we want to add multiple class then add the class name in css and use add class method along with the previous class 
$("h1").addClass("big-title margin-50");

//to seee if our element has a particular class or not (it shows a boolean value)
$("h1").hasClass("margin-50"); //it returns true

//to change the text of the button
$("button").html("<em>hey</em");

//to manipulate attributes (like href,img)
$("a").attr("href", "https://www.bing.com"); //will select all of the anchjor tags and changes the href attribute to. bing.com..)

//to console the img if it is noit present it gives an error
console.log($("img").attr("src"));

//even class is an attribute so to check or classes we could type this in console
$("h1").attr("class"); //and it gives 'big-title margin-50'

//to add something 
$("h1").before("<button>before</button>"); //gets aaded before h1 element
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>"); //gets added in h1 but b4the content of h1
$("h1").append("<button>append</button>");

//to remove
// $("button").remove();

//adding and checking event listners in vanila js and jquery
//in vanila js we use for loop and document.querySelector method

for (var i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListeners("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}

//now in js the code become so simple
$("button").click(function() {
    $("h1").css("color", "purple");
});

//keypress event listner for whole document
$(document).keypress(function(event) {
    $("h1").text(event.key);
});

//easiest way for event listeners
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
})


//to try these blocks of animations
//(comment all the code except this block(which u will execute) code to check)



//to animate 
$("button").on("click", function() {
    $("h1").toggle();
});

// we use hide(),show(),fadeOut(),fadeIn(), 
//toggle(), fadeToggle(), slideUp, SlideToggle() methods too
//side methods are used whenever we have like a dropdown menu


//to use custom animations
$("button").on("click", function() {
    $("h1").animate({ opacity: 0.5 });
});

//for multiple animations (we have chained 3 methods together)
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});