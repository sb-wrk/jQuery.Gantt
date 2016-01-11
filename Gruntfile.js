module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'js/jquery.fn.gantt.min.js': ['js/jquery.fn.gantt.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.registerTask('default', ['uglify']); 
};
