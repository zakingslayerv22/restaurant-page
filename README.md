# restaurant-page
Le project de site Web de restaurant du project Odin.


Initial setup

Initialize npm so the package-lock
and package json files are created.

Install webpack and create the
webpack.config.js file.

Install the HTML webpack plugin
and configure it in the webpack
config(line 17) file to use the 
./src/index.html as a custom 
template.

Install the webpack style-loader
and css-loader. In the webpack
config (lines 23 and 24) configure 
them to be able to import files 
with the .css extension

Install the webpack-dev-server
and in the webpack config (line 13)
tell it where to look for files.
In package.json (line 8), configure 
webpack to watch all files within the 
dependency graph for changes. Also
add a script to easily run the
dev-server (line 9).

Install the above 3 with --save-dev
as they will only be used in
development and not production.

Configure the webpack config (line 11)
to use Javascript source maps
to track down errors on individual
files after bundling.

Create a .gitignore file and add
the dist and node-modules directories
as the package.json files contains
all dependency information to
install the project.

Create the index.html file with
boilerplate. In the body, create
a header and a nav inside it. The nav 
contains the buttons. Create a div
as a sibling of the header and this
would contain the rest of the page 
content.

Create an index.js file that logs
a text to the console.

