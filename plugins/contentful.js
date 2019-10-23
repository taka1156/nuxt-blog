const contentful = require('contentful');

const defaultConfig = {
  CF_SPACE_ID: process.env.CF_SPACE_ID,
  CF_CDA_ACCESS_TOKEN: process.env.CF_CDA_ACCESS_TOKEN
};

module.exports = {
  createClient(config = defaultConfig) {
    return contentful.createClient({
      space: config.CF_SPACE_ID,
      accessToken: config.CF_CDA_ACCESS_TOKEN
    });
  }
};
