/**
 * Castor - a cross site POSTing JavaScript logging library for Loggly
 * 
 * Copyright (c) 2011 Loggly, Inc.
 * All rights reserved.
 *
 * Author: Mike Blume <mike@loggly.com>
 * Date: April 14, 2012
 * 
 * Sample usage (replace with your own Loggly HTTP input URL):

  <script src="/js/loggly.js" type="text/javascript"></script>
  <script type="text/javascript">
    window.onload=function(){
      // use http or https depending on your page context
      castor = new loggly.castor({ url: 'http://logs.loggly.com/inputs/a4e839e9-4227-49aa-9d28-e18e5ba5a818', level: 'WARN'});
      castor.log({url: window.location.href});
    }
  </script>

 */  

(function() {

  var log_methods = {'error': 5, 'warn': 4, 'info': 3, 'debug': 2, 'log': 1};

  var send_data = function(opts) {
    var img = document.createElement("img");
    img.src = opts.url + ".gif?PLAINTEXT=" + encodeURIComponent(opts.data) + "&DT=" + encodeURIComponent(Date());
  }

  var castor = function(opts) {
    if (!opts.url) throw new Error("Please include a Loggly HTTP URL.");
    if (!opts.level) {
      this.level = log_methods['info'];
    } else {
      this.level = log_methods[opts.level.toLowerCase()];
    }
    var logger_factory = function(level_name) {
      return function(data) {
        if (log_methods[level_name] >= this.level) {
          if (typeof(data) != "string") {
            try {
              data = JSON.stringify(data);
            }
            catch (error) {}
          }
          opts.data = data;
          send_data(opts);
        }
      };
    };
    for (name in log_methods) {
      this[name] = logger_factory(name);
    }
  };

  if (this.loggly) {
    this.loggly.castor = castor;
  } else {
    this.loggly = {castor: castor};
  }
})();

