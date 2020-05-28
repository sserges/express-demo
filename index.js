// const express = require('express');
// const Joi = require('joi');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const config = require('config');

// const courses = require('./routes/courses');
// const home = require('./routes/home');

// const startupDebugger = require('debug')('app:startup');
// const dbDebugger = require('debug')('app:db');

// const logger = require('./middlewares/logger');
// const authenticate = require('./middlewares/authenticate');

// const app = express();

// app.set('view engine', 'pug');
// app.set('views', './views'); // default

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use(helmet());

// app.use('/api/courses', courses);
// app.use('/', home);

// // Configuration
// // console.log('Application Name: ' + config.get('name'));
// // console.log('Mail Server: ' + config.get('mail.host'));
// // console.log('Mail Password: ' + config.get('mail.password'));

// if (app.get('env') === 'development') {
//   app.use(morgan('tiny'));
//   startupDebugger('Morgan enabled...');
// }

// // Db work...
// dbDebugger('Connected to the database...');

// app.use(logger);
// app.use(authenticate);

// // PORT
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

const getRepositories = (username, callback) => {
  setTimeout(() => {
    console.log('Calling GitHub API...');
    callback({ username, repos: ['repos1', 'repos2', 'repos3'] });
  }, 2000);
};

const getUser = (id, callback) => {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id, gitHubUsername: 'mosh' });
  }, 2000);
};

console.log('Before');
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    console.log('Repos', repos);
  });
});
console.log('After');
