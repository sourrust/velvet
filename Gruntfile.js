module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    less: {
      dev: {
        options: {
          paths: ['velvet']
        },
        files: {
          'build/style.css': 'velvet/velvet.less'
        }
      },
      compress: {
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
      dist: {
        files: {
          'build/': 'velvet/*.{png,gif}'
        }
      }
    },
    watch: {
      less: {
        files: ['velvet/*.less'],
        tasks: ['less:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', 'less:dev copy');
  grunt.registerTask('release', 'less:compress copy');
};
