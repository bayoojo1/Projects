var Profile = require("./profile.js");
var renderer = require("./renderer.js");

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) { 
      //if url == "/" && GET
      if(request.url === "/") {
        if(request.method.toLowerCase() === "get") {
        //show search
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html');
          renderer.view("header", {}, response);
          renderer.view("search", {}, response);
          renderer.view("footer", {}, response);
          response.end();
        } else {
          //if url == "/" && POST
          //get the post data from body
          request.on("data", function(postBody) {
          //extract the username
          let params;
          params = new URLSearchParams(postBody.toString());
          //redirect to /:username
          response.writeHead(303, {"Location": "/" + params.get('username')});
          response.end();
        });
      }
    }
        
    }
    //Handle HTTP route GET /:username i.e. /chalkers
    function user(request, response) {
      var username = request.url.replace("/", "");
      if(username.length > 0) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        renderer.view("header", {}, response);

        
        var studentProfile = new Profile(username);

        studentProfile.on("end", function(profileJSON) {
            // show profile 

            // store the values which we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javaScriptPoints: profileJSON.points.JavaScript
            }
            // Simple response
            renderer.view("profile", values, response);
            renderer.view("footer", {}, response);
            response.end();
        });

            studentProfile.on("error", function(error) {
            //show error
            renderer.view("error", {errorMessage: error.message}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        });
      }
    }
module.exports.home = home;
module.exports.user = user;