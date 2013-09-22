'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var Booang = module.exports = function Booang(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({
            skipInstall: options['skip-install']
        });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(Booang, yeoman.generators.Base);

Booang.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        type: 'confirm',
        name: 'jquery',
        message: 'Would you like to include JQuery?',
        default: true
    }];

    this.prompt(prompts, function (props) {
        this.jquery = props.jquery;

        cb();
    }.bind(this));
};

Booang.prototype.app = function app() {
    this.mkdir('public');
    this.mkdir('public/images');
    this.mkdir('public/javascripts');
    this.mkdir('public/stylesheets');
    this.mkdir('config');
    this.mkdir('config/environments');
    this.mkdir('routes');
    this.mkdir('views');

    this.directory('public');
    this.directory('routes');
    this.directory('views');
    this.directory('config');

    // Frontend
    this.mkdir('app');
    this.mkdir('app/js');
    this.mkdir('app/css');
    this.mkdir('app/partials');
    this.mkdir('app/components');
    this.mkdir('app/libs');
    this.directory('app');
    this.mkdir('test');
    this.mkdir('test/spec');
    this.mkdir('test/spec/controllers');
    this.directory('test');
};


Booang.prototype.projectfiles = function projectfiles() {
    // Dotfiles
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_jshintrc', '.jshintrc');
    this.copy('_gitattributes', '.gitattributes');

    // Package
    this.copy('_package.json', 'package.json');

    // Front
    this.copy('_bower.json', 'bower.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_karma-e2e.conf.js', 'karma-e2e.conf.js');
    this.copy('_karma.conf.js', 'karma.conf.js');

    // Express
    this.copy('_app.js', 'app.js');
    this.copy('_app_grunt.js', 'app_grunt.js');
    this.copy('_server.js', 'server.js');

};

Booang.prototype.writeIndex = function writeIndex() {

    this.indexFile = this.readFileAsString(path.join(this.sourceRoot(),'app/index.html'));
    this.indexFile = this.engine(this.indexFile, this);
    
  var modules = [];

  if(!this.jquery){
    return;  
  }
  
  modules.push('libs/jquery/jquery.js');

  if (modules.length) {
    this.indexFile = this.appendScripts(this.indexFile, 'scripts/plugins.js', modules);
  }
};

