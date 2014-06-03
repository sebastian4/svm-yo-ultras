require.config({
  paths: {
    "jquery": "../bower_components/jquery/jquery"
  }
});

// Load the main app module to start the app
requirejs(["main"]);
