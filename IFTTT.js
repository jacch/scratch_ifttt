new (function() {
	var ext = this;
	var descriptor = {
		blocks: [ 
			[' ', 'IFTTT Key %s 觸發事件 %s 送值 %s %s %s', 'triggerValues'] 
		]
	};
	 
	ext._shutdown = function() {
		
	};
    
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
     
	ext.triggerValues = function(k,t, v1, v2, v3) {
			var xhttp = new XMLHttpRequest();
			xhttp.open('GET', 'https://maker.ifttt.com/trigger/' + t + '/with/key/' + k + '?value1=' + v1 + '&value2=' + v2 + '&value3=' + v3);
			xhttp.send();
	};
	 
	ScratchExtensions.register('IFTTT', descriptor, ext);
})();
