module.exports = function(grunt) {
    grunt.initConfig({
        assemble: {
            options: {
                flatten: true,
                layout: ['templates/layout.hbs']
            },
            site: {
                dest: './',
                src: ['templates/*.hbs', '!templates/layout.hbs']
            }
        },

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

        handlebars: {
            compile: {
                files: {
                    "templates/dynamic/compiled.js" : "templates/dynamic/*.hbs"
                },
                options: {
                    commonjs: true,
                    processName: function (filename) {
                        return filename.split('/').slice(-1);
                    }
                }
            }
        },

        jshint: {
            all: {
                files: {
                    src: ["js/*.js", "!js/bundle.js"]
                }
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
            assemble: {
                files: ["templates/*.hbs"],
                tasks: ["assemble"]
            },

            browserify: {
                files: ["js/*.js", "!js/bundle.js"],
                tasks: ["browserify"]
            },

            handlebars: {
                files: ["templates/dynamic/*.hbs"],
                tasks: ["handlebars"]
            },

            jshint: {
                files: ["js/*.js", "!bundle.js"],
                tasks: ["jshint"]
            },

            less: {
                files: ["css/**/*.less"],
                tasks: ["less", "cssmin"]
            }
        }
    });

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['browserify', 'connect', 'watch']);
};
