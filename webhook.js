new (function() {
	var ext = this;
	var descriptor = {
		blocks: [ 
			['r ', 'url' 'Hookvalue']
		]
	};
	 
	ext._shutdown = function() {
		
	};
    
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
     
	ext.Hookvalue = function(callback) {
    var param = {
      q: "key"
    };
 
    $.get("http://192.168.1.24", param, function(data) {
      callback(data.value);
    });
	};
	 
	ScratchExtensions.register('WEBHOOK', descriptor, ext);
})();
