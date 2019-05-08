Install node.js and npm: 
    1. go to https://nodejs.org to download and install node
    2. verify it by runing: "node -v", "npm -v"

Initializing package.json:
    * run "npm init" in root folder

Installing an NPM Module
    1. npm install lite-server --save-dev
    it will be look like this:
    ```
    {
        "name": "confusion",
        "version": "1.0.0",
        "description": "This is a website for Ristorante Con Fusion",
        "main": "index.html",
        "scripts": {
            "start": "npm run lite",
            "test": "echo \"Error: no test specified\" && exit 1",
            "lite": "lite-server"
        },
        "author": "",
        "license": "ISC",
        "devDependencies": {
            "lite-server": "^2.4.0"
        },
        "dependencies": {
            "bootstrap": "^4.0.0",
            "bootstrap-social": "^5.1.1",
            "font-awesome": "^4.7.0",
            "jquery": "^3.4.0",
            "popper.js": "^1.12.9"
        }
    }
    ```

    2. run npm to start your development server: "npm start", it will launch a browser page

Install bootstrap and node.js with npm:
    1. ```npm install bootstrap@4.0.0 --save
    npm install jquery@3.3.1 popper.js@1.12.9 --save```

    2. Insert the following code in the <head> of index.html file before the title.
    ```
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    ```

    3. At the bottom of the page, just before the end of the body tag, add the following code to include the JQuery library, popper.js library and Bootstrap's Javascript plugins. Bootstrap by default uses the JQuery Javascript library for its Javascript plugins. Hence the need to include JQuery library in the web page.
    ```
    <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    ```

    4. Bootstrap is designed to be mobile first, meaning that the classes are designed such that we can begin by targeting mobile device screens first and then work upwards to larger screen sizes. The starting point for this is first through media queries. We have already added the support for media queries in the last lesson, where we added this line to the head:
    ```
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    ```

Install less: "npm install -g less@2.7.2" 
    to convert less codes into css codes, you can run "lessc style.less style.css"

Install Sass: "npm install --save-dev node-sass@4.7.2"
    to convert sass codes into css codes, you need to add " "scss": "node-sass -o css/ css/" " into you package.json script field and run "npm run scss"

Deployment and Automation:
    install onChange: npm install --save-dev onchange@3.3.0 parallelshell@3.0.2
    if parallesshell doesn't work for this issue: The "options.cwd" property must be of type string. Received type function
    paste this to node_module/parallelshell/index.js https://raw.githubusercontent.com/darkguy2008/parallelshell/master/index.js

    install rimraf: npm install --save-dev rimraf@2.6.2

    install copyfiles: npm -g install copyfiles@2.0.0

    install imagemin: npm install -g imagemin-cli@3.0.0 --unsafe-perm=true --allow-root

    install grunt: 
        1. npm install -g grunt-cli@1.2.0
        2. npm install grunt@1.0.2 --save-dev
        3. npm install grunt-sass@2.1.0 --save-dev
        4. npm install time-grunt@1.4.0 --save-dev
        5. npm install jit-grunt@0.10.0 --save-dev
        6. npm install grunt-contrib-watch@1.0.0 --save-dev
        7. npm install grunt-browser-sync@2.2.0 --save-dev