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

const getCommits = (repo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });
};

const getRepositories = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      // resolve({ username, repos: ['repos1', 'repos2', 'repos3'] });
      reject(new Error('Could not get the repos.'));
    }, 2000);
  });
};

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id, gitHubUsername: 'mosh' });
    }, 2000);
  });
};

console.log('Before');
// getUser(1).then((user) => {
//   getRepositories(user.gitHubUsername).then((repos) => {
//     console.log(repos);
//   });
// });
console.log('After');

// Promise-based approach
// getUser(1)
//   .then((user) => getRepositories(user.gitHubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log('Commits', commits))
//   .catch((err) => console.log('Error', err.message));

// Async and Await approach
const displayCommits = async () => {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log('with await', commits);
  } catch (error) {
    console.log('Error', error.message);
  }
};

displayCommits();
