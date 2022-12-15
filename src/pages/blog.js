import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {uid} from 'uid';
import usePosts from '../hooks/usePosts';
import {getPosts} from '../store/posts/postsSlice';
import Loader from '../components/Loader';
import BlogCard from '../components/Cards/BlogCard';
import ImageContainer from '../components/ImageContainer';
import BgSphere from '../../public/assets/images/sphere.svg';
import BgAboveTheFold from '../../public/assets/images/bg-above-the-fold4.svg';
import BgDonut from '../../public/assets/images/donut.svg';
import styles from '../styles/pages/Blog.module.scss';

const Blog = () => {
  const {data: posts, status} = usePosts();

  const dispatch = useDispatch();
  useEffect(() => {
    posts?.length < 1 && dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <ImageContainer
        className={styles.donut}
        src={BgDonut}
        alt={'donut'}
      />
      <ImageContainer
        className={styles.sphere}
        src={BgSphere}
        alt={'sphere'}
      />
      <ImageContainer
        className={styles.BgAboveTheFold}
        src={BgAboveTheFold}
        alt={'shadow'}
      />
      <h1 className={styles.title}>blog</h1>
      <div className={styles.blogCardsWrapper}>
        <div className={`${styles.leftColumn} ${styles.column}`}>
          {status !== 'success' || posts.length < 1
            ? <Loader/>
            : posts.slice(0, posts.length / 2).map(post =>
              <BlogCard key={uid()} data={post} isEven={false}/>
            )}
        </div>
        <div className={`${styles.rightColumn} ${styles.column}`}>
          {status !== 'success' || posts.length < 1
            ? <Loader/>
            : posts.slice(posts.length / 2).map(post =>
              <BlogCard key={uid()} data={post} isEven/>
            )}
        </div>
      </div>
    </>
  );
};

export default Blog;