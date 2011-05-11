# loggly-castor

JavaScript library to do cross site log POSTing to Loggly.  You can use this to log directly out of your JavaScript to Loggly, or just record the fact someone hit a page on your site.

## Installation
Include the loggly.js file in a web page.  You can use our CloudFront version located at:

<pre>http://cloudfront.loggly.com/js/loggly-0.1.0.js</pre>

Create a new HTTP input in your Loggly account, make a note of the URL, and then edit and use the following code in that same web page:

<pre>
  <script type="text/javascript"> 
    window.onload=function(){
      castor = new loggly({ url: 'http://logs.loggly.com/inputs/a2e232e9-4827-49aa-9d28-e18e5ba5a818?rt=1', level: 'info'});
      castor.info("url=" + window.location.href + " browser=" + castor.user_agent + " width=" + castor.browser_size.width);
    }
  </script> 
</pre>

This should result in the page posting an event to Loggly that looks something like this: 

<pre>
source=castor url=http://www.geekceo.com/ browser=MozillaNetscape5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.57 Safari/534.24 width=1009
</pre>

## Log Levels
Set the log level using the *level: 'info'* parameter.  Call the library using the error, warn, info, debug and log methods.  Events called with these methods that match or exceed the current logging level will be forwarded on to Loggly.
