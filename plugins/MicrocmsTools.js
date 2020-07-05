/* eslint-disable no-empty-pattern */
/**
 *
 * @param {String} key - APIキー
 * @param {String} url - APIのURL
 * @param {Object} options クエリやページングの情報
 */

async function getContents(key, url, options) {
  try {
    const { contents } = await this.$axios.$get(url, {
      params: { ...options },
      headers: { 'X-API-KEY': key }
    });
    return contents;
  } catch (e) {
    console.error(e.massage);
  }
}

export default ({}, inject) => {
  inject('getContents', getContents);
};
