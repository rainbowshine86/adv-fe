function Model(){
	this.attributes = {};
	this.subscribers = [];
	this.init.apply(this, arguments);
}

Model.prototype = {
	init: function(){

	},
	subscribe: function(cb){
		this.subscribers.push(cb);
	},
	notify: function(){
		this.subscribers.forEach(function(cb){
			cb();
		});
	},
	set: function(key, val){
		this.attributes[key] = val;
		this.notify();
	},
	get: function(){
		return this.attributes[key];
	},
	inc: function(){

	}
}

Model.createModel = function(custom){
	var child = function(){
		return Model.apply(this, arguments);
	}
	child.prototype = $.extend({}, Model.prototype, custom);
	return child;
}