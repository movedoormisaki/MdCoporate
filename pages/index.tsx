import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { createClient } from 'contentful';
import { memberType, blogData, workTag, workData, newsData } from '../lib/type';
import Animation from '../components/templates/Animation';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { type } from 'os';
import FirstView from '../components/topTemplates/firstView';
import Concept from '../components/topTemplates/Concept';
import Mission from '../components/topTemplates/Mission';
import Service from '../components/topTemplates/Service';
import TopWorks from '../components/topTemplates/TopWorks';
import TopMembers from '../components/topTemplates/TopMembers';
import TopBlog from '../components/topTemplates/TopBlog';
import TopNews from '../components/topTemplates/TopNews';

type Props = memberType & blogData & workTag & workData & newsData;

const Home: NextPage<Props> = ({ memberData, blogData, workTag, workData, newsData }: Props) => {
  const description =
    '兵庫県三田市を拠点の広報PR会社です。WEBサイトや映像制作やチラシ・パンフなどのデザイン制作などを中心にご依頼承っております。';
  const title = '株式会社MOVEDOOR';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Animation />
      <div className={styles.full_bg}>
        {/* ファーストビュー */}
        <FirstView />

        <div className={styles.black_bg}>
          <div className={styles.black}>
            <div className={styles.color_filter}>
              <div className={styles.white}></div>
            </div>

            {/* コンセプトエリア*/}
            <Concept />

            {/* our mission */}
            <Mission />

            {/* サービスエリア */}
            <Service workTag={workTag} />

            {/* worksのカテゴリ */}
            <TopWorks workData={workData}></TopWorks>

            {/* メンバー一覧 */}
            <TopMembers memberData={memberData}></TopMembers>

            {/* ブログ一覧 */}
            <TopBlog blogData={blogData}></TopBlog>

            {/* ニュース一覧 */}
            <TopNews newsData={newsData}></TopNews>
          </div>
          {/* コンセプトエリア */}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: 'tcl09h8ynjdr',
    accessToken: 'wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc',
  });

  const res_blog = await client.getEntries({ content_type: 'blog', limit: 3 });
  const res_works_tag = await client.getEntries({ content_type: 'worksTag' });
  const res_member = await client.getEntries({ content_type: 'members', limit: 5, order: 'fields.order' });
  const res_work = await client.getEntries({ content_type: 'works', limit: 3, order: 'fields.order' });
  const res_news = await client.getEntries({ content_type: 'news', limit: 3, order: '-fields.newsData' });

  return {
    props: {
      blogData: res_blog.items,
      memberData: res_member.items,
      workTag: res_works_tag.items,
      workData: res_work.items,
      newsData: res_news.items,
    },
  };
};

export default Home;
