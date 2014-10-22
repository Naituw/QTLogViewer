import FileManager from '../models/FileManager';
import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function () {
		if (!FileManager.get('currentDirectory')) {
			this.transitionTo('bootstrap');
		}
	},
	model: function () {
		return FileManager.get('currentLog');
	},
	afterModel: function (model) {
		if (model == null) {
			this.transitionTo('bootstrap');
		}
	},
});
