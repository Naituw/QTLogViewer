import Ember from 'ember';

export default Ember.Component.extend({
	levelClass: function () {
		return this.get('log').level;
	}.property('log'),
	derivedDescription: function () {
		var log = this.get('log');
		if (log.error) {
			return log.error;
		} else if (log.description) {
			return log.description;
		}
		return null;
	}.property('log'),
	otherInfo: function () {
		var log = this.get('log');
		delete log.date;
		delete log.date_string;
		delete log.name;
		return JSON.stringify(log, null, 4);
	}.property('log'),
	actions: {
		toggle: function () {
			this.set('expanded', !this.get('expanded'));
		}
	}
});
