module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            standalone: {
                options: {
                    watch: true
                },
                src: ['js/index.js'],
                dest: 'js/bundle.js'
            }
        },

        connect: {
            server: {
                options: {
                    port: 8080
                }
            }
        },

        cssmin: {
            minify: {
                src: 'css/style.css',
                dest: 'css/style.min.css'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["./css"],
                    yuicompress: true
                },
                files: {
                    "css/style.css": "css/style.less"
                }
            }
        },

        watch: {
            browserify: {
                files: ["js/*.js", "!js/bundle.js"],
                tasks: ["browserify"]
            },

            less: {
                files: ["css/**/*.less"],
                tasks: ["less", "cssmin"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['browserify', 'connect', 'watch']);
};
