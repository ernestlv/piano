# piano

#### Requirements:

- node.js

- npm 

- mongoDB

###### Front End Dependencies (will be installed automatically by npm don't worry!):

- materilize - CSS framewrok
- jquery 2.1
- angular 1.4
- holder.js - image generator

#### Installation

start mongoDB: mongod

import videos into mongo using: mongoimport --db piano --collection videos --file videos.js

run: npm install

run: npm start

That is it!

You can enter this in the browser to access the app:

http://&lt;my-server-domain&gt;:8000

If you populated the mongoDB, You should see a screen, similar to the one at the bottom of this page.

#### Comments

I took the liberty to re-architect a bit the application. The original request asked to encapsulate the CRUD operations in a modal box. However the design and code are much more modular and compact, if we encapsulate each CRUD in a different controller and present them using angular views. Also, a modal box is more tightly coupled with a desktop experience. Should you decide to implement responsive design, in the future, an angular view will provide more flexibility.

Since each video is a well defined object, with more or less stable data, and the list of videos is a collection of them, rather than a set of transactional joins, it makes more sense to use a hierarchical database, like mongoDB, instead of a RDBMS.

Finally there is a number of CSS frameworks. However, I choose materialize, because it is easy to use, very well documented, support responsive design and, most important, it is not tighly copulated to any javascript frameworks. Additionally, materialize is implemented thru standard markup, using class attributes, similar to the way bootstrap works, so for developers, the learning curve is smooth. Materialize uses a new style, that is base on [material design philosopy](https://www.google.com/design/spec/material-design/introduction.html). Material design tries to enrich user intercations inserting a three-dimensional experience in some components.

#### Notes

- DB Back-End services are in file: modules/mongo.js
- CRUD services are in file: module/router.js
- Angular Web App is in folder: public/js
- HTML components are in: public/components
- Main File: public/index.html

#### Screen Sample:

![sample screen](https://github.com/ernestlv/piano/blob/master/screens/piano-video-list.png)
