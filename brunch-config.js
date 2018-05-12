// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}
};

exports.npm = {
  styles: {'normalize.css': ['normalize.css']}
};

exports.plugins = {
  babel: {presets: ['latest']},
  autoReload: {
    enabled: {
      css: true,
      js: true,
      assets: true
    }
  }
};
