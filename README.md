This is repo for Express exercise with leagues and teams - usage of router

## Setup
Create a working dir and run ```npm init```


## Install Modules
```
$ npm install express hbs --save
```

### Launch App
```
$ node server.js
```


### Test in Browser (404 error route)
+ [http://localhost:3000](http://localhost:3000)
+ Should display Error: 404!


### Test in Browser (login route)
+ [http://localhost:3000/index](http://localhost:3000/index)in browser
+ index (success)
    + Lists down teams and leagues options
    + Click on teams - lists down the list of teams in console log
    + click on leagues - lists down the list of leagues in the browser

+ index (fail)
    + 404 not found
    + Error

![Screen Shot](./public/img/leagues.png "Screen Shot")

## Useful link(s)
* [hbs](https://www.npmjs.com/package/hbs)

 