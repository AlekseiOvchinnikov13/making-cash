import {useGetCoinInfoQuery} from '../../store/projects/projectApi';
import {useRouter} from 'next/router';
import styles from '../../styles/pages/Project.module.scss';
import Loader from '../../components/Loader';
import {PROJECT_DATA} from '../../data/projects';
import ImageContainer from '../../components/ImageContainer';
import LinkArrow from '../../components/LinkArrow';
import {whiteColor} from '../../styles/variables.module.scss';
import BgAboveTheFold from '../../../public/assets/images/bg-above-the-fold.svg';
import BgAboveTheFold2 from '../../../public/assets/images/bg-above-the-fold2.svg';
import BgAboveTheFold3 from '../../../public/assets/images/bg-above-the-fold3.svg';
import BgSphere from '../../../public/assets/images/sphere.svg';
import InfoCard from '../../components/Cards/InfoCard';
import ReadMore from '../../components/ReadMore';
import {useEffect, useState} from 'react';
import SectionTitle from '../../components/SectionTitle';
import PostCard from '../../components/Cards/PostCard';
import {uid} from 'uid';
import MetricCard from '../../components/Cards/MetricCard';
import {isMobile, isTablet} from '../../utils';


const Project = () => {
  const [isMobileState, setIsMobileState] = useState(false);
  useEffect(() => {
    setIsMobileState(isMobile);
  }, [setIsMobileState]);
  const [isMetricsOpen, setIsMetricOpen] = useState(false);
  const seeMoreHandler = () =>
    setIsMetricOpen(!isMetricsOpen);

  const router = useRouter();
  const {id} = router.query;
  const {data, isLoading} = useGetCoinInfoQuery(id);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const readMoreHandler = () =>
    setIsDescriptionOpen(!isDescriptionOpen);

  if (isLoading) return <Loader/>;
  const description = data.description.en;

  const {apy, fee, link, basicInfoList, articleList} = PROJECT_DATA.find(item => item.id === id);
  const mainIndicators = [
    {
      label: 'Nominal Reward APY',
      value: apy
    },
    {
      label: 'Staking Commission',
      value: fee
    }];
  const metrics = [
    {
      label: 'ath',
      value: data.market_data.ath.usd.toFixed(5)
    },
    {
      label: 'atl',
      value: data.market_data.atl.usd.toFixed(5)
    },
    {
      label: 'price',
      value: data.market_data.current_price.usd.toFixed(5)
    },
    {
      label: 'country origin',
      value: data.country_origin
    },
    {
      label: 'liquidity score',
      value: data.liquidity_score
    },
    {
      label: 'coingecko rank',
      value: data.coingecko_rank
    },
    {
      label: 'market cap rank',
      value: data.market_cap_rank
    },
    {
      label: 'community score',
      value: data.community_score
    },
  ];

  // console.log(data);

  return (
    <>
      <div className={`${styles.mainSection} ${styles.section}`}>
        <ImageContainer
          className={styles.BgAboveTheFold}
          src={BgAboveTheFold}
          alt={'shadow'}
        />
        <ImageContainer
          className={styles.sphere}
          src={BgSphere}
          alt={'sphere'}
        />
        <div className={styles.topBlock}>
          <h1 className={styles.title}>{data.name}</h1>
          <ImageContainer
            src={data.image.large}
            alt={data.name}
            className={styles.logo}
          />
        </div>
        <div className={styles.middleBlock}>
          {mainIndicators.map(indicator =>
            <div className={styles.mainIndicator} key={uid()}>
              <p className={styles.title}>{indicator.label}</p>
              <p className={styles.value}>{indicator.value}</p>
            </div>
          )}
          <LinkArrow
            isLong
            text={'stake now'}
            to={link}
            fillColor={whiteColor}
            className={`${styles.linkStake} buttonCommonStyle`}
          />
        </div>
      </div>
      <div className={`${styles.infoSection} ${description.length < 1 ? styles.infoSectionWithoutDescr : ''}`}>
        {description.length > 0 &&
          <div className={styles.descriptionBlock}>
            <p className={styles.text}>
              {!isDescriptionOpen ? `${description.slice(0, 250)}${description.length > 200 ? '...' : ''}` : description}
            </p>
            {description.length > 200 &&
              <ReadMore
                textOpen={'read more'}
                onClick={readMoreHandler}
                isOpen={isDescriptionOpen}
                className={styles.readMore}
              />}
          </div>
        }
        <div className={styles.indicatorsBlock}>
          {Object.entries(basicInfoList).map(([title, value]) =>
            <InfoCard
              key={uid()}
              title={title}
              value={value}
              isAddress={title === 'Validator Address'}
            />
          )}
        </div>
      </div>
      <div className={`${styles.blogSection} ${styles.section}`}>
        <ImageContainer
          className={styles.BgAboveTheFold}
          src={BgAboveTheFold3}
          alt={'shadow'}
        />
        <div className={styles.textBlock}>
          <SectionTitle
            title={`${data.name} staking tutorial`}
            subtitle={`Your ${data.symbol.toUpperCase()}s must be in a wallet or custodial account in order to use our staking services.`}
            classNameTitle={`${styles.title} ${styles.sectionTitle}`}
            classNameSubtitle={styles.text}
            isGray
          />
        </div>
        <div className={styles.postBlock}>
          {articleList.map(article =>
            <PostCard
              key={uid()}
              name={data.name}
              title={article.title}
              isSoon={article.isSoon}
              isIntro={article.isIntro}
              link={article.link}
            />
          )}
        </div>
      </div>
      <div className={`${styles.metricsSection} ${isMetricsOpen ? styles.metricsSectionOpen : ''}`}>
        <ImageContainer
          className={styles.BgAboveTheFold}
          src={BgAboveTheFold2}
          alt={'shadow'}
        />
        <SectionTitle
          title={`${data.name} network metrics`}
          isGray
          classNameTitle={`${styles.sectionTitle}`}
        />
        <div className={styles.metricsWrapper}>
          {metrics.map(metric =>
            metric.value &&
            <MetricCard
              key={uid()}
              label={metric.label}
              value={metric.value}
            />
          )}
        </div>
        {isTablet &&
          <ReadMore
            isOpen={isMetricsOpen}
            textOpen={'See more'}
            onClick={seeMoreHandler}
            className={styles.seeMore}
          />
        }
      </div>
    </>
  );
};

export default Project;