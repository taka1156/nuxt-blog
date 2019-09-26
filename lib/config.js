// envに書かれたapiキーを読み込み
require('dotenv').config();

function getValidConfig (configEnv, keys) {
  let {config, missingKeys} = keys.reduce((acc, key) => {
    if (!configEnv[key]) {
      acc.missingKeys.push(key);
    } else {
      acc.config[key] = configEnv[key];
    }
    return acc;
  }, {config: {}, missingKeys: []});

  if (missingKeys.length) {
    throw new Error(`Contentful key is missing : ${missingKeys.join(', ')}`);
  }
  return config;
}

module.exports = {
  getConfigForKeys (keys) {
    const configEnv = {
      CF_BLOG_POST_TYPE_ID: process.env.CF_BLOG_POST_TYPE_ID,
      CF_BLOG_TAG_TYPE_ID: process.env.CF_BLOG_TAG_TYPE_ID,
      CF_SPACE_ID: process.env.CF_SPACE_ID,
      CF_CDA_ACCESS_TOKEN: process.env.CF_CDA_ACCESS_TOKEN
    };
    return getValidConfig(configEnv, keys);
  }
};