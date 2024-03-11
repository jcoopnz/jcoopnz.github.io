module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-inline');

  grunt.initConfig({
    inline: {
      dist: {
        src: 'src/index.html',
        dest: 'public/index.html',
      },
      options: {
        cssmin: true,
      },
    }
  });

  grunt.registerTask('default', [ 'inline' ]);
};
