import Ember from 'ember';

export default Ember.Controller.extend({
	json: function () {
		return JSON.stringify(this.model, null, 4);
	}.property('model'),
});
