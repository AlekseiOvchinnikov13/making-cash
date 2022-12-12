import {configureStore} from '@reduxjs/toolkit';
import {projectsApi} from './projects/projectApi';
import postsReducer from './posts/postsSlice';

export const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
    posts: postsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectsApi.middleware)
});