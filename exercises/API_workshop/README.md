**API Workshop : 10.03.16**

Data Visualization Major Studio


API stands for application programming interface. It's a way to communicate between servers, like your laptop and the online data being served. Ultimately you're going to need keys to acess this kind of data. 
The companies who manage the APIs want to keep track of who's using their data and why. Many are free for small usages but paid if you build an app with users sending millions of requests a hour.

We want the JSON because it's the javascript object notation and obv we're working with Javascript, and objects(!), it's great to work with data neatly packaged in objects.


--first, let's briefly review JSON--
1. talk about why JSON is awesome, briefly touch on the structure of JSON
2. make some value pairs
3. create objects with steps in and arrays
4. visualize the JSON data in p5
5. show the JSON validator- Errors in JSON don't clearly show. You need to validate with online tools if you are making your own long json files.

--second, it's on to the API---
1. go to get a NY Times key from their site
    - take a look at their documentation
    - highligh their tool for trying out the data.
2. look at the data in the browser, 
     -call out to plugin for json viz
     - query string: most start with question mark, now giving parameters, adding with an &. 
     - defining expectations: you look these up in documentation.
     - returns json: install chrome extension to clean up the json: JSON Formatter
2. use your key and call the API in terminal using curl
3. now bring this into javascript
    - keep in mind this has to be https in c9
    - break down how to concatenate strings with api path.
4. use p5 to control data for search (function, callback, dom to )
5. use p5 to change the HTML elements being shown.

For further references see Daniel Shiffman's [API](https://www.youtube.com/watch?v=ecT42O6I_WI) tutorial videos.