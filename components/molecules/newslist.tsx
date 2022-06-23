import styles from '../molecules/newslist.module.scss';
import Moment from 'react-moment';

export interface newsData {
  newsData: {
    fields: {
      newTtl: string;
      slug?: string;
      tumbTxt: string;
      newsData: string;
      newsCont?: string;
    };
  };
}

const Newslist = (props: newsData) => {
  const { newsData } = props;

  return (
    <>
      <div className={styles.news_list}>
        <div className={styles.time}>
          <div className={styles.date_inner}>
            <Moment format="MM.DD" className={styles.date}>
              {newsData.fields.newsData}
            </Moment>
            <Moment format="ddd." className={styles.youbi}>
              {newsData.fields.newsData}
            </Moment>
            <Moment format="YYYY" className={styles.year}>
              {newsData.fields.newsData}
            </Moment>
          </div>
        </div>
        <div className={styles.news_ttl}>
          <p className={styles.main_ttl}>{newsData.fields.newTtl}</p>
          <p className={styles.detail}>{newsData.fields.tumbTxt}</p>
        </div>
      </div>
    </>
  );
};

export default Newslist;
