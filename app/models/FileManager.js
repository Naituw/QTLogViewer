import Ember from 'ember';

var manager = Ember.Object.extend({
	file: null,
	fileEntry: null,
	init: function () {
		var data = window.QTLaunchData;
		if (!data) {
			return;
		}
		var items = data.items;
		if (!items || !items.length) {
			return;
		}
		var entry = items[0].entry;
		if (!entry) {
			return;
		}
		this.set('fileEntry', entry);
	},
	currentDirectory: function () {
		return this.get('file') != null || this.get('fileEntry') != null;
	}.property('file', 'fileEntry'),
	currentLog: function () {
		var file = this.get('file');
		var fileEntry = this.get('fileEntry');
		if (!file && !fileEntry) {
			return null;
		}
		return new Ember.RSVP.Promise(function (res, rej) {
			function readFile(file, resolve, reject) {
				var reader = new FileReader();
				reader.onload = function () {
					var json = reader.result;
					try {
						var logObject = JSON.parse(json);
						resolve(logObject);
					} catch (e) {
						swal('json 解析失败!');
						reject();
					}
				};
				reader.readAsText(file);
			}

			if (file) {
				readFile(file, res, rej);
			} else {
				fileEntry.file(function (file) {
					readFile(file, res, rej);
				}, function () {
					swal('读取文件失败');
					rej();
				});
			}
		});
	}.property('file', 'fileEntry'),
	updateWithFile: function (file) {
		this.set('file', file);
	}
}).create();

Ember.QTFileManager = manager;

export default manager;
