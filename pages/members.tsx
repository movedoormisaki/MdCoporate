import { createClient } from 'contentful';
import styles from '../styles/member.module.scss';
import type { NextPage, GetStaticProps } from 'next';
import { memberType } from '../lib/type';
import BackGround from '../components/molecules/BackGround';
import Image from 'next/image';
import Link from 'next/link';
import { INSPECT_MAX_BYTES } from 'buffer';

const members: NextPage<memberType> = (props: memberType) => {
  const { memberData } = props;
  const member_top_img = '/img/team_member_top.jpg';
  console.log(memberData);
  return (
    <>
      <BackGround opacity={0.95}>
        <div className={styles.member}>
          <div className={styles.post_top}>
            <div className={styles.post_img}>
              <div className={styles.img_inner}>
                <Image src={member_top_img} layout="fill" alt="About us の画像" />
                <div className={styles.container}>
                  <img className={styles.svg} src="/svg/teammembers.svg" alt="チームメンバーの画像" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.member_cont}>
              <div className={styles.member_ttl}>
                <h1>
                  “個性”と“感性”が<span className={styles.span_br}>クリエイティブを</span>進化させる
                </h1>
                <p>
                  “個性” を伸ばし、“感性” を研ぎ澄ます。
                  <br /> それが、我々の最大の武器だ。
                  <br /> クリエイティブは “人” が作り出すもの。 <br />
                  クリエイターの数だけ作品が存在する。
                </p>
              </div>
              <div className={styles.member_inner}>
                <ul>
                  {memberData.map((items: any, work_index: number) => {
                    return (
                      <li key={work_index}>
                        {(() => {
                          if (items.fields.thumbImg) {
                            return (
                              <>
                                <Link href={`/member/${items.fields.slug}`}>
                                  <a>
                                    <section>
                                      <div className={styles.img_inner}>
                                        {(() => {
                                          if (items.fields.thumbImg) {
                                            return (
                                              <>
                                                <div className={styles.open_img}>
                                                  <Image
                                                    src={'https:' + items.fields.thumbImg.fields.file.url}
                                                    layout="fill"
                                                    alt="ワークス背景素材"
                                                  />
                                                </div>
                                                <div className={styles.hover}>
                                                  <Image
                                                    src={'https:' + items.fields.thumbHover.fields.file.url}
                                                    layout="fill"
                                                    alt="ワークス背景素材"
                                                  />
                                                </div>
                                              </>
                                            );
                                          } else {
                                            return (
                                              <>
                                                <div className={styles.noImg}>
                                                  <p className="noImgTxt">仕度中 …</p>
                                                </div>
                                              </>
                                            );
                                          }
                                        })()}
                                      </div>
                                    </section>
                                    <section>
                                      <p className={styles.sub_name}>{items.fields.managerialPosition}</p>
                                      <p className={styles.name}>{items.fields.name}</p>
                                      <p className={styles.name_en}>{items.fields.nameEn}</p>
                                      <p className={styles.one_word}>{items.fields.speechBubbles}</p>
                                      <p className={styles.one_word}>{items.fields.speechBubble}</p>
                                    </section>
                                  </a>
                                </Link>
                              </>
                            );
                          } else {
                            return (
                              <>
                                <section>
                                  <div className={styles.img_inner}>
                                    {(() => {
                                      if (items.fields.thumbImg) {
                                        return (
                                          <>
                                            <div className={styles.open_img}>
                                              <Image
                                                src={'https:' + items.fields.thumbImg.fields.file.url}
                                                layout="fill"
                                                alt="ワークス背景素材"
                                              />
                                            </div>
                                            <div className={styles.hover}>
                                              <Image
                                                src={'https:' + items.fields.thumbHover.fields.file.url}
                                                layout="fill"
                                                alt="ワークス背景素材"
                                              />
                                            </div>
                                          </>
                                        );
                                      } else {
                                        return (
                                          <>
                                            <div className={styles.noImg}>
                                              <p className="noImgTxt">仕度中 …</p>
                                            </div>
                                          </>
                                        );
                                      }
                                    })()}
                                  </div>
                                </section>
                                <section>
                                  <p className={styles.sub_name}>{items.fields.managerialPosition}</p>
                                  <p className={styles.name}>{items.fields.name}</p>
                                  <p className={styles.name_en}>{items.fields.nameEn}</p>
                                  <p className={styles.one_word}>{items.fields.speechBubbles}</p>
                                  <p className={styles.one_word}>{items.fields.speechBubble}</p>
                                </section>
                              </>
                            );
                          }
                        })()}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default members;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: 'tcl09h8ynjdr',
    accessToken: 'wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc',
  });

  const res_member = await client.getEntries({ content_type: 'members', order: 'fields.order' });

  return {
    props: { memberData: res_member.items },
  };
};
