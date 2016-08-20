var packager = require('electron-packager');

var options = {
  // Required
  arch: "x64", //ia32, x64, all
  dir: ".",
  platform: "win32,darwin", //linux, win32, darwin, mas, all

  // Optional
  ignore: "\.gitignore|\.DS_Store|\.idea|node_modules/(electron-packager|electron-prebuilt|\.bin)|packager\.config\.js",
  out: "./dist",
  overwrite: true,
  prune: true
};

packager(options, function done_callback(err, appPaths) {
  if (err) {
    throw new Error(err);
  }
  console.log('Build Succeeded.');
});
