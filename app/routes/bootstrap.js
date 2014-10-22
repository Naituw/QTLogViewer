import FileManager from '../models/FileManager';
import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function () {
		if (FileManager.get('currentDirectory')) {
			this.transitionTo('log');
		}
	}
});
