module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		compass: {
		    scss: {
		      options: {
		        sassDir: 'src/sass',
        		cssDir: 'build/css',
		      }
		    }
		},

		cssmin:{
			combine:{
			    files: [{
			      cwd: 'build/',
			      src: ['*.css', '!*.min.css'],
			      dest: 'build/',
			      ext: '.min.css'
			    }]
			}
		},

		watch:{
			scss: 
			{
				files: [
			      'src/sass',
			    ],
				tasks:['compass'],
				options: {
	              livereload: true
	          	}	
          	}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-compass');	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['compass']);
	grunt.registerTask('dev', ['compass', 'watch']);
	grunt.registerTask('prod', ['compass', 'cssmin']);

}
    
