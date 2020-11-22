import axios from 'axios';
const POSTS_PER_PAGE = 5; // １ページあたりの記事数

const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

const routesFetch = async (url, params, token) =>
  await axios
    .get(url, {
      params: { ...params },
      headers: { 'X-API-KEY': token }
    })
    .then(({ data }) => {
      return data.contents;
    });

const routesFetchArr = async (url, params, token) =>
  await axios
    .get(url, {
      params: { ...params },
      headers: { 'X-API-KEY': token }
    })
    .then(({ data }) => {
      return data.contents.map(item => {
        return item;
      });
    });

const routesFetchAll = async (list, url, params, filters, token, routeFn) =>
  await Promise.all(
    list.map(item => {
      params['filters'] = `${filters}${item.id}`;
      return axios
        .get(url, {
          params: { ...params },
          headers: { 'X-API-KEY': token }
        })
        .then(() => {
          return {
            route: routeFn(item.id)
          };
        });
    })
  );

const routesFetchAllRange = async (
  list,
  url,
  params,
  filters,
  token,
  postPerPage,
  routeFn
) =>
  await Promise.all(
    list.map(item => {
      params['filters'] = `${filters}${item.id}`;
      return axios
        .get(url, {
          params: { ...params },
          headers: { 'X-API-KEY': token }
        })
        .then(({ data }) =>
          range(1, Math.ceil(data.totalCount / postPerPage)).map(pageIndex => ({
            route: routeFn(item.id, pageIndex)
          }))
        );
    })
  );

const routesFetchRange = (url, token, params, postPerPage, routeFn) =>
  axios
    .get(url, {
      params: { ...params },
      headers: { 'X-API-KEY': token }
    })
    .then(({ data }) =>
      range(1, Math.ceil(data.totalCount / postPerPage)).map(pageIndex => ({
        route: routeFn(pageIndex)
      }))
    );

const contentsFetch = async (url, token, offset = 0, limit = POSTS_PER_PAGE) => {
  const { data } = await axios.get(url, {
    params: {
      limit,
      offset
    },
    headers: { 'X-API-KEY': token }
  });
  return {
    contents: data.contents.map(article => {
      return { route: `/article/${article.id}`, payload: article };
    }),
    totalCount: data.totalCount
  };
};

export default {
  routesFetch,
  routesFetchArr,
  routesFetchAll,
  routesFetchAllRange,
  routesFetchRange,
  contentsFetch
};
