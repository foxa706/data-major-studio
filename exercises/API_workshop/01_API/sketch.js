//NY TIMES SEARCH API WORKSHOP
//Audrey Fox, 10.04.2016
//Inspired by code written by Daniel Shiffman

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var apiKey = "&YOURKEYHERE";//add your own ny times api key here
var input;
//var query ="hard coded val here"
var firstSearch = true;

function setup() {
    noCanvas();
    var button = select('#submit');
    //set up an event listener for the submit button with a callback
    button.mousePressed(searchArticles);
    input = select('#search');
}
function searchArticles(){
    //make sure you use the .value() function to acess the input
    apiUrl = url + input.value() + apiKey;
    loadJSON(apiUrl, gotJson); 
}
function gotJson(data){
    var articles = data.response.docs;
    if(firstSearch){
        for (var i = 0; i<articles.length; i++){
            //first time search page population
            var h = createElement('h1', articles[i].headline.main);
            h.id('heading'+i);
            var ele = select('#heading'+i);
            var p = createP(articles[i].snippet);
            p.id('description'+i);
            styleThis(ele, p);
        }
    firstSearch = false;
    }else{
        for (var i = 0; i<articles.length; i++){
            //every other search- removes old elements and repopulates page
            var oldHeading = select('#heading'+i);
            var oldDescription = select('#description'+i);
            oldHeading.remove();
            oldDescription.remove();
            
            var h = createElement('h1', articles[i].headline.main);
            h.id('heading'+i);
            var ele = select('#heading'+i);
            var p = createP(articles[i].snippet);
            p.id('description'+i);
            styleThis(ele, p);
        }
    }
}

function styleThis(ele, p){
    //keeping all the style points together in this function
    ele.style('color', 'blue');
    ele.style('font-family', 'sans-serif');
    ele.style('text-align', 'center');
    p.style('text-align', 'center');
}
