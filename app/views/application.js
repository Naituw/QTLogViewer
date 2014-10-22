import Ember from 'ember';
import FileManager from '../models/FileManager';

export default Ember.View.extend({
	dragCounter: 0,
	classNames: ['application-container'],
	dragEnter: function (event) {
		event.preventDefault();
		if (this.dragCounter < 0) {
			this.dragCounter = 0;
		}
		this.dragCounter++;
		this.set('draggingOver', true);
	},
	dragOver: function (event) {
		event.preventDefault();
		this.set('draggingOver', true);
	},
	dragLeave: function (event) {
		event.preventDefault();
		this.dragCounter--;
		if (this.dragCounter < 0) {
			this.dragCounter = 0;
		}
		if (this.dragCounter === 0) {
			this.set('draggingOver', false);
		}
	},
	drop: function (event) {
		event.preventDefault();

		this.dragCounter = 0;
		this.set('draggingOver', false);
		var files = event.dataTransfer.files;
		if (!files.length) {
			return false;
		}
		if (files.length > 1) {
			swal('暂时只支持一个文件');
			return false;
		}
		var file = files[0];

		FileManager.updateWithFile(file);

		this.get('controller').transitionToRoute('index');

		return false;
	}
});
