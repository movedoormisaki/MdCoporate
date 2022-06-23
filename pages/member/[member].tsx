import { GetStaticPaths, GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import styles from '../../styles/post.module.scss';
import classes from '../../styles/member.module.scss';
import { createClient, EntryCollection } from 'contentful';
import Image from 'next/image';
import Cont from '../../components/molecules/Cont';
import BackBtn from '../../components/atoms/backBtn';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const MemberWork: NextPage<Props> = ({ post }) => {
  console.log(post);
  return (
    <>
      <div className={`${styles.member_post} ${styles.post} ${classes.memberPost}`}>
        <div className={classes.header_ttl}>
          <h1>Member Info.</h1>
        </div>
        <div className={classes.post_top}>
          <div className={classes.post_img}>
            <div className={classes.img_inner}>
              <Image
                src={'https:' + post.fields.memberImg.fields.file.url}
                layout="fill"
                alt="ブログのサムネの大画面"
              />
              <div className={classes.main_ttl}>
                <div className={classes.container}>
                  <div className={classes.ttl}>
                    <p className={classes.sub_name}>{post.fields.managerialPosition}</p>
                    <p className={classes.name}>{post.fields.name}</p>
                    <p className={classes.name_en}>{post.fields.nameEn}</p>
                    <p className={classes.one_word}>{post.fields.speechBubbles}</p>
                    <p className={classes.one_word}>{post.fields.speechBubble}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <Cont postCont={post.fields.conts}></Cont>
          <BackBtn customLink="/members/" />
        </div>
      </div>
    </>
  );
};

export default MemberWork;

const client = createClient({
  space: 'tcl09h8ynjdr',
  accessToken: 'wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc',
});

type Params = {
  [param: string]: any;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: EntryCollection<any> = await client.getEntries({
    content_type: 'members',
  });

  const paths = res.items.map((item) => {
    return {
      params: { member: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { items } = await client.getEntries<any>({
    content_type: 'members',
    'fields.slug': params.member,
  });
  return {
    props: { post: items[0] },
  };
};
