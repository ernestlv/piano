# piano
piano-test

install:

- node.js

- npm 

- mongoDB

start mongoDB: mongod

(optional) import videos into mongo using: mongoimport --db piano --collection videos --file videos.js

run: npm install

run: npm start

Notes:

DB Back-End services are in file: modules/mongo.js
CRUD services are in file: module/router.js
Angular Web App is in folder: public/js
HTML components are in: public/components
Main File: public/index.html

Front End Dependencies (will be installed automatically by npm don't worry!):

- materilize - CSS framewrok
- jquery 2.1
- angular 1.4
- holder.js - image generator

Screen Sample:

(https://github.com/ernestlv/piano/blob/master/screens/piano-video-list.png)
