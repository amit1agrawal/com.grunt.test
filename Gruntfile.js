module.exports = function(grunt){
  grunt.initConfig({
    openui5_preload:{
      component:{
        options:{
          resources:{
            cwd: 'src/main/webapp',
            prefix: 'com/grunt/test'
          },
          dest: 'src/main/webapp/preload'
        },
        components: true
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-openui5');
  grunt.registerTask('default','openui5_preload');
};
