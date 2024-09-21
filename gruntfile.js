module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/scripts/main.js',
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
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s)
    grunt.registerTask('default', ['uglify', 'sass', 'watch']);
};
