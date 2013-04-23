module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['velvet']
        },
        files: {
          'build/style.css': 'velvet/velvet.less'
        }
      },
      production: {
        options: {
          paths: ['less'],
          yuicompress: true
        },
        files: {
          'css/style.css': 'less/main.less'
        }
      }
    },
    copy: {
      options: {
        processContentExcluded: ['**/*.{png,gif}']
      },
      main: {
        files: [
          { expand: true
          , cwd: 'velvet/'
          , src: ['*.{png,gif}']
          , dest: 'build/'
          }
        ]
      }
    },
    watch: {
      files: 'velvet/*.less',
      tasks: ['less:development']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:development', 'copy']);
  grunt.registerTask('release', ['less:production', 'copy']);
};
