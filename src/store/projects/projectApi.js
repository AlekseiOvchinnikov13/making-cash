import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
  reducerPath: 'api/projects',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.coingecko.com/api/v3/coins/'}),
  endpoints: builder => ({
    getProjects: builder.query({
      query: (
        ids,
        vs_currency = 'usd',
        order = 'market_cap_desc',
        per_page = 100,
        page = 1,
        sparkline = false
      ) => `markets?ids=${ids}&vs_currency=${vs_currency}&order=${order}&per_page=${per_page}&page=${page}&sparkline=${sparkline}`
    })
  })
});

export const {useGetProjectsQuery} = projectsApi;