import {useSelector} from 'react-redux';

const usePosts = () =>
  useSelector(state => state.posts);

export default usePosts;