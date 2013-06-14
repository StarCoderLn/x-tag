module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'smush-components': {
      options: {
        fileMap: {
          js: 'dist/x-tag-components.js',
          css: 'dist/x-tag-components.css'
        }
      }
    },
    bumpup: ['bower.json', 'package.json'],
    tagrelease: {
      file: 'package.json',
      prefix: '',
      commit: true
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-smush-components');

  grunt.registerTask('build', ['smush-components']);

};
