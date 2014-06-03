svm-yo-ultras
=============

this project has several nice experiments

technologies
------------

	-coffeescript
	-sass
	-less
	-jade

what to do
----------

you can combine them and mix and match, make your page either in html or jade, the styling in prestyles like less or sass and the scripts on javascript or coffeescript.

how to start
------------

make sure to install all the dependencies from npm and from bower ('npm install' and 'bower install').

*make sure you have these installed: node, npm, bower, grunt, yeoman, ruby, sass, less

how it works
------------

	-all .coffee files in coffees folder convert to files with extension .coffee.js in the scripts folder
	-all .jade files in jade folder convert to files with extension .jade.html in the html folder
	-all .less or .sass files in prestyles folder convert to .less.css or .scss.css files in the styles folder
	-after typing grunt serve, as soon as you create or change one of those files. they should be automatically translated.
	-at first, there might be errors, files need to be changed in other to translate
