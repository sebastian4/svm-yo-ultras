// Generated on 2014-06-03 using generator-webapp 0.4.4
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // configurable paths
        yeoman: {
            app: 'app',
            dist: 'dist'
        },
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            coffee: {
                    files: ['<%= yeoman.app %>/coffees/*.coffee'],
                    tasks: ['coffee:compile']
            },
            sass: {
                    files: ['<%= yeoman.app %>/prestyles/*.scss'],
                    tasks: ['sass']
            },
            less: {
                    files: ['<%= yeoman.app %>/prestyles/*.less'],
                    tasks: ['less']
            },
            stylus: {
                    files: ['<%= yeoman.app %>/prestyles/*.styl'],
                    tasks: ['stylus']
            },
            jade: {
                    files: ['<%= yeoman.app %>/jade/*.jade'],
                    tasks: ['jade']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '<%= yeoman.app %>/html/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>',
                    livereload: false
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: '<%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                assetsDirs: ['<%= yeoman.dist %>']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) styles/main.css -->
            //
            // dist: {
            //     files: {
            //         '<%= yeoman.dist %>/styles/main.css': [
            //             '.tmp/styles/{,*/}*.css',
            //             '<%= yeoman.app %>/styles/{,*/}*.css'
            //         ]
            //     }
            // }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        //
        coffee: {
          compile: {
            // files: {
            //   '<%= yeoman.app %>/scripts/all.coffee.js': ['<%= yeoman.app %>/coffees/*.coffee'] // compile and concat into single file
            // }
            files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/coffees',
                    src: ['*.coffee'],
                    dest: '<%= yeoman.app %>/scripts',
                    ext: '.coffee.js'
            }]
          },
          compileWithMaps: {
            options: {
              sourceMap: true
            },
            // files: {
            //   '<%= yeoman.app %>/scripts/all.coffee.js': ['<%= yeoman.app %>/coffees/*.coffee'] // concat then compile into single file
            // }
            files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/coffees',
                    src: ['*.coffee'],
                    dest: '<%= yeoman.app %>/scripts',
                    ext: '.coffee.js'
            }]
          }
    
        },
        sass: {
            dist: {
             //  files: {
                // '<%= yeoman.app %>/styles/main.scss.css': '<%= yeoman.app %>/prestyles/main.scss'
             //  }
              files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/prestyles',
                    src: ['*.scss'],
                    dest: '<%= yeoman.app %>/styles',
                    ext: '.scss.css'
              }]
            }
        },
        less: {
          development: {
            // files: {
            //   '<%= yeoman.app %>/styles/main.less.css': '<%= yeoman.app %>/prestyles/main.less'
            // }
            files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/prestyles',
                    src: ['*.less'],
                    dest: '<%= yeoman.app %>/styles',
                    ext: '.less.css'
            }]
          },
          production: {
            // files: {
            //   '<%= yeoman.app %>/styles/main.less.css': '<%= yeoman.app %>/prestyles/main.less'
            // }
            files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/prestyles',
                    src: ['*.less'],
                    dest: '<%= yeoman.app %>/styles',
                    ext: '.less.css'
            }]
          }
        },
        stylus: {
            compile: {
                files: {
                  //'path/to/result.css': 'path/to/source.styl', // 1:1 compile
                  '<%= yeoman.app %>/styles/mainstylus.styl.css': ['<%= yeoman.app %>/prestyles/*.styl'] // compile and concat into single file
                }
            }
        },
        jade: {
            debug: {
                options: {
                  data: {
                    debug: true
                  }
                },
                // files: {
                //   "<%= yeoman.app %>/html/two.jade.html": "<%= yeoman.app %>/jade/two.jade"
                // }
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/html',
                    src: ['*.jade'],
                    dest: '<%= yeoman.app %>/jade',
                    ext: '.jade.html'
                }]
              },
              release: {
                options: {
                  data: {
                    debug: false
                  }
                },
                // files: {
                //   "<%= yeoman.app %>/html/two.jade.html": "<%= yeoman.app %>/jade/two.jade"
                // }
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/jade',
                    src: ['*.jade'],
                    dest: '<%= yeoman.app %>/html',
                    ext: '.jade.html'
                }]
              }
        },
        requirejs: {
          compile: {
            options: {
              baseUrl: "<%= yeoman.app %>",
              mainConfigFile: "<%= yeoman.app %>/scripts/config.js",
              out: "<%= yeoman.app %>/dist/optimized.js"
            }
          }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        concurrent: {
            server: [
                'compass',
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'compass',
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
      grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
      grunt.task.run(['serve']);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
