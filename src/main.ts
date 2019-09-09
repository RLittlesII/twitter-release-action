import * as core from '@actions/core';
import * as octokit from '@octokit/rest';
import * as twitter from 'twitter';

async function run() {
  try {
    const Octokit = require('@octokit/rest');
    const octokit = new Octokit();
    const token = core.getInput('token');
    core.debug(`Hello ${token}`);

    var Twitter = require('twitter');

    var client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    client
      .post('statuses/update', {status: 'I Love Twitter'})
      .then(function (tweet) {
          console.log(tweet);
      })
      .catch(function (error) {
        throw error;
      });

  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();