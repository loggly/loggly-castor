# loggly-castor

JavaScript library to do cross site POSTing to Loggly.

## Installation
Include the loggly.js file in a web page.  Create a new HTTP input in your Loggly account, make a note of the URL, and then edit and use the following code in that same web page:

<pre>
  <script type="text/javascript"> 
    window.onload=function(){
      castor = new loggly({ url: 'http://logs.loggly.com/inputs/a2e232e9-4827-49aa-9d28-e18e5ba5a818?rt=1', level: 'info'});
      castor.info("url="+window.location.href + " browser=" + castor.user_agent + " height=" + castor.browser_size.height);
    }
  </script> 
</pre>

This should result in the page posting an event to Loggly that looks something like this: 

<pre>
source=castor url=http://titus:8002/ browser=MozillaNetscape5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.57 Safari/534.24 height=629
</pre>
