# ShoppingCart
#### It is a Single Page Mean  stack  shopping cart  prototype application where authenticated user can buy the product and  ship them  to their address. Rest API  protected using the Token authentication . Product  facets along with single  product  search facility  powered by elastic search is also built in the app. Code is structured  in efficient  modular way  using  JavaScript  Single page application style guide.

## Stack

* Persistence store: [MongoDB](http://www.mongodb.org/)
* Backend: [Node.js](http://nodejs.org/)
* Awesome [AngularJS](http://www.angularjs.org/) on the client
* CSS based on [Twitter's bootstrap](http://getbootstrap.com/)
* Rest Api (TokenBasedAuthentication)
* Search : [ElaticSearch](https://www.elastic.co/)

### Build

It is a complete project with a build system focused on AngularJS apps and tightly integrated with other tools commonly used in the AngularJS community:
* powered by [Gulp.js](http://gruntjs.com/)
* test written using [Mocha](http://jasmine.github.io/) syntax
* build supporting JS, CSS minification
* [Twitter's bootstrap](http://getbootstrap.com/) with LESS templates processing integrated into the build

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4)
* Install Gulp-CLI and Mocha as global npm modules:

    ```
    npm install -g gulp 
    npm install -g mocha
    ```
### Get the Code
Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/rajatgermany/ShoppingCart.git
cd ShoppingCart
```

### App Server

Our backend application server is a NodeJS application that relies upon some 3rd Party npm packages.  You need to install these:

* Install local dependencies (from the project root folder):

    ```
    npm install
    ```

  (This will install the dependencies declared in the server/package.json file)

### Client App

Our client application is a straight HTML/Javascript application but our development process uses a Node.js build tool
[Gulp.js].


## Building

### Build the client app
The app made up of a number of javascript, css and html files that need to be merged into a final distribution for running.  We use the Gulp build tool to do this.
* Build client application:(If you have made changes to the Development Folder)

    ```
    cd gulp
    ```
## Running
### Start the Server
* Run the server

    ```
    node app.js
    ```
* Browse to the application at [http://localhost:3500/sportscart]


## Browser Support
We only regularly test against Chrome 29 and occasionally against Firefox and Internet Explorer.
The application should run on most modern browsers that are supported by the AngularJS framework.
Obviously, if you chose to base your application on this one, then you should ensure you do your own
testing against browsers that you need to support.

## Development

### Folders structure

At the top, level the repository divided into following folders -
- Development Folder (client Side Components) , 
- server file ( app.js)
- node_modules
- routes( express route Handlers)

    ```
* node_modules- contains build tasks for Grunt along with other, user-installed, Node packages
* Development - contains FrontEnd Components, Vendor Javascripts and built in vendor.min.js and  mainapp.min.js file
* app.js- contains express server file
* routes- contains express app route handlers
  ```

### Default Build

The default gulp task will build the mainapp.min.js: `gulp`.  
* `gulp`



### Continuous Building
The watch gulp task will monitor the source files  in the Development Folder and run the default build task every time a file changes: `DevelopmentApp-watch`.




# User Manaul

## Documentation
1.Run the MongoDB and elasticSearch service on the machine</br>
2.Run the app.js and push a Postrequest http://localhost:3500/api/admin (To add products to the DataBase)</br>
3.Go to HomePage: url - http://localhost:3500/sportscart</br>
4.User will be directed to the Login View</br>
5.If user is intially registered, he can enters his credentials in login form else he must register himself first as he will not be able to go to  other views without being authenticated.</br>
6.After Login, user will be directed to the Homepage where he can view the list of all the Products.</br>
7.User can filter the Products according to the category.</br>
8.User can like or add product to the cart. </br>
9.User can view all the products he wants to buy in the cart along with the Total money. </br>
10.Products from the cart can be deleted and  details about the single product can be viewed. </br>
11.Before paying, the user  will be asked to fill the shipping details if he has'nt filled it before. </br>
12. User can search the products by the name or by the category name ( Browser must support 'Allow-cross-orgin resource sharing)



