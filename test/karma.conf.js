module.exports = function(config){
    config.set({

      basePath : '../',

      files : [
        'www/lib/ionic/js/angular/angular.js',
        'www/lib/angular-mocks/angular-mocks.js',
        'www/js/*.js',
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
