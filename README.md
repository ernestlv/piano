# piano
piano-test

install:

- node.js

- npm 

- mongoDB

start mongoDB: mongod

import videos into mongo using: mongoimport --db piano --collection videos --file videos.js

run: npm install

run: npm start

That is it!

You can enter this in the browser to access the app:

http://&lt;my-server-domain&gt;:8000

If you populated the mongoDB, You should see a screen, similar to the one at the bottom of this page.

Comments:

I took the liberty to re-architect a bit the app. The original requested asked to encapsulate the CRUD operations in a modal box, but it made the design and code much more modular and compact to encapsulate each CRUD in a different controller and present them in different views. Also a modal box is more tighly coupled with a desktop experience. Should you decide to implement responsive design, in the future, an angular view will provide more flexibility.

Since each video is a well defined object with, more or less stable data, and the list of videos is a collection of them, rather than a set of transactional joins, running in real time, it makes more sense to use a hierarchical database like mongoDB rather than a RDBMS like mariaDB.

Finally there is a number of CSS frameworks. However materialize is easy to use, very well documented, support responsive design  and is not tighly copulated to any javascript frameworks, additionally, it uses standard markup, e.g. you can apply styles just using class attributes, similarly the way bootstrap works, so for experience developers the learning curve for materialize is smooth. Materialize uses a new design style that is base on what is called [material design philosopy](https://www.google.com/design/spec/material-design/introduction.html). Material design tries to enrich user intercations inserting a third-dimensional experience in some components.

Notes:

- DB Back-End services are in file: modules/mongo.js
- CRUD services are in file: module/router.js
- Angular Web App is in folder: public/js
- HTML components are in: public/components
- Main File: public/index.html

Front End Dependencies (will be installed automatically by npm don't worry!):

- materilize - CSS framewrok
- jquery 2.1
- angular 1.4
- holder.js - image generator

Screen Sample:

![sample screen](https://github.com/ernestlv/piano/blob/master/screens/piano-video-list.png)
