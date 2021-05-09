// "start": "node ./node_modules/pm2/bin/pm2 start ./server.js --name hello_aws --log ../logs/app.log",
// "stop": "node ./node_modules/pm2/bin/pm2 stop hello_aws"

// pm2 ==> Process Manager to monitor our application so that it automatically
// restarts if it crashes

// Having the directory for logs outside the application’s directory will be important when we deploy this with CodeDeploy, since it prevents the logs directory from being deleted with every deployment.