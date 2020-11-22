import axios from 'axios';

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

const routesFetchAll = async (list, url, params, token, routeFn) =>
  await Promise.all(
    list.map(item =>
      axios
        .get(url, {
          params: { ...params },
          headers: { 'X-API-KEY': token }
        })
        .then(() => {
          return {
            route: routeFn(item.id)
          };
        })
    )
  );

const routesFetchAllRange = async (list, url, params, token, postPerPage, routeFn) =>
  await Promise.all(
    list.map(item =>
      axios
        .get(url, {
          params: { ...params },
          headers: { 'X-API-KEY': token }
        })
        .then(({ data }) =>
          range(1, Math.ceil(data.totalCount / postPerPage)).map(pageIndex => ({
            route: routeFn(item.id, pageIndex)
          }))
        )
    )
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

export default {
  routesFetch,
  routesFetchArr,
  routesFetchAll,
  routesFetchAllRange,
  routesFetchRange
};
