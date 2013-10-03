module.exports = function(grunt){

	// load all grunt-plugin tasks
	grunt.loadNpmTasks('grunt-styleguide');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// init config
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		styleguide: {
			styledocco: {
				options: {
					framework: {
						name: 'styledocco'
					},
					template: {
						include: [
							'src/_doc.css',
							'src/_doc.js'
						]
					},
					name: 'Project Name'
				},
				files: {
					'doc': 'src/**/*.scss'
				}
			}
		},
		clean: ['doc']
	};

	// init 
	grunt.initConfig(config);

	// resiter tasks
	grunt.registerTask('default', ['clean', 'styleguide']);
};
