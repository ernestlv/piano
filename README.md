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

http://<my-server-domain>:8000

If you populated the mongoDB, You should a  screen similar to the one at the bottom of this page.

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
