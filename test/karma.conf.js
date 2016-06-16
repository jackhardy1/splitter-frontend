module.exports = function(config){
    config.set({

      basePath : '../',

      files : [
        'www/lib/ionic/js/angular/angular.js',
        'www/lib/ionic/js/angular/angular-animate.js',
        'www/lib/ionic/js/angular/angular-sanitize.js',
        'node_modules/angular-mocks/angular-mocks.js',

        'www/lib/ionic/js/angular/angular-resource.js',
        'www/lib/ionic/js/angular-ui/angular-ui-router.js',
        'www/lib/ionic/js/ionic.js',
        'www/lib/ionic/js/ionic-angular.js',

        'www/js/**/*.js',
        'test/unit/**/*.js'

      ],

      autoWatch : true,

      frameworks: ['jasmine'],

      browsers : ['Chrome'],

      plugins : [
              'karma-chrome-launcher',
              'karma-jasmine',
              "karma-spec-reporter"
      ],
      reporters: ["spec"],
        specReporter: {
        maxLogLines: 5,
        suppressErrorSummary: true,
        suppressFailed: false,
        suppressPassed: false,
        suppressSkipped: true,
        showSpecTiming: false
      },
    });
};
