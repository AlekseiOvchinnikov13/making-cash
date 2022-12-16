import {useSelector} from 'react-redux';

const useProjects = () =>
  useSelector(state => state.projects.queries[Object.keys(state.projects.queries)[0]]?.data);

export default useProjects;