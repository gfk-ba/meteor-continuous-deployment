#meteor-continuous-deployment


Continuous deployment to *.meteor.com using travis-ci for boiler plate.

## Enviroment variables
|Variable|Description|
| ------------- |:-------------:| -----:|
|METEOR_DEPLOY_URL|URL to deploy to|
|METEOR_EMAIL|Email adres of the meteor developer account to use for deploying|
|METEOR_PASSWORD|Password of the meteor developer account to use for deploying|
|SAUCE_USERNAME|Saucelabs username|
|SAUCE_ACCESS_KEY|Saucelabs access key|
|BROWSERSTACK_USERNAME|Browserstack username|
|BROWSERSTACK_KEY|Browserstack access key|

*Always use ```travis encrypt``` when adding sensitive information to the travis.yml env variables*

If you're only gonna use phantomjs you will only need the first 3 env variabls setup.


## Setup

1. Put your application in the app directory
2. Write tests in the tests directory
2. Install the travis cli ```gem install travis```
3. Change METEOR_DEPLOY_URL in ```.travis.yml``` to your deploy url
4. Add secure env variables you're gonna need using: ```travis encrypt ENV_VARIABLE=ENV_VARIABLE_VALUE --add```

Default setup is for phantomjs. If you wanna use browserstack or saucelabs make sure you add the needed env variables
and change the last argument of ```run_nightwatch.js``` in ```.travis.yml``` to either saucelabs or browserstack.

## Running on local machine
1.
