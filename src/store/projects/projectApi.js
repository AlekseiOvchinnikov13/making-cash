import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
  reducerPath: 'projects',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.coingecko.com/api/v3/coins/'}),
  endpoints: builder => ({
    getProjects: builder.query({
      query: ids => `markets?ids=${ids}&vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    }),
    getCoinInfo: builder.query({
      query: coinId => `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false`
    })
  })
});

export const {useGetProjectsQuery, useGetCoinInfoQuery} = projectsApi;