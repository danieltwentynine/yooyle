const { registerTask } = require('grunt');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/scripts/*.js',
                dest: 'dist/scripts/main.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    implementation: require('sass'),
                    sourceMap: true
                },
                files: {
                    'dist/css/main.css': 'src/scss/main.scss' // Changed to point to main.scss
                }
            }
        },
        watch: {
            sass: {
                files: 'src/scss/**/*.scss', // Added subfolder support for SASS files
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild']
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s)
    grunt.registerTask('default', ['sass', 'watch']);
    grunt,registerTask('build', ['uglify', 'sass', 'htmlmin', 'clean']);
};
