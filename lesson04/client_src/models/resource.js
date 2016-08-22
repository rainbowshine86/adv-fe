module.exports = Model.createModel({
	init: function(options){
		$.extend(this.attributes, options);
	},
	inc: function(){
		this.set('count', this.get('count') +1);
	},
	dec: function(){
		this.set('count', this.get('count') -1);
	},
	getCount: function(){
		return this.get('count');
	}
});