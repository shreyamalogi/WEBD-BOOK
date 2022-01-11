//THE CHAANGES WE DO HERE MUST ME DONE IN CONSOLE
//the values must be inside a string and use camelcasinbg for describing a ptroperyy


// document.firstElementChild.lastElementChild.lastElement
// Child.lastElementChild.innerHTML = "SHREYA"


//properties get elements

// document.getElementsByTagName("li");
// document.getElementsByTagName("li")[1].style.color ="pink";
// document.getElementsByTagName("li").length
// document.getElementsByClassName("btn")[2].style.color = "purple";
// document.getElementById("title").innerHTML = "goodbye";


//querySelector (it selects only a particular selector and is specific)

//document.querySelector("h1");                                             //for tags
//document.querySelector(.btn);                                             //for classes      .
//document.querySelector(#title);                                           //for id            #
//document.querySelector("li a");                                           //list lo unna anchor tag ni select chestadi if we want only the link and add space btw 2 of them
//document.querySelectorAll("li" .item)                                     //to get the list of all the items (add space btw 2 of them)
//document.querySelector("li a").style.color = "green";                     //to change the color of google we first use html tree extention and search for the anchor tag then search for the anchor tag in the list and change the color


//instead of tapping in css thru js we can add class in css and add classlistr in js eg:
// document.querySelector("h1").classList.add("huge");



//but inorder to change the property it is mandatory to mention 
//the array element index except the property getElementById 
//becoz every single ID is unique 


//atrributes are those which are used inside the html tags like href, src, class etc
//so to change the attributes using js use these line sof code
// document.querySelector("a");
// document.querySelector("a").attributes;
// document.querySelector("a").getAttribute("href");
// document.querySelector("a").setAttribute("href", "https://www.bing.com")


