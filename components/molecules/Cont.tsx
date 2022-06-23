import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { useRef, useState, useEffect, RefObject } from 'react';
import { useRouter } from 'next/router';
import styles from '../molecules/Cont.module.scss';

type DOMRectProperty = 'height' | 'width';

const Cont = (props: any) => {
  const { postCont } = props;
  const Bold = ({ children }: any) => <span className="bold">{children}</span>;
  const router = useRouter().pathname;

  const Youtube = ({ children, width }: any) => {
    return (
      <iframe
        src={children}
        width="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className={styles.iframe}
      ></iframe>
    );
  };

  const renderOption = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const src = 'https:' + node.data.target.fields.file.url;
        const height = node.data.target.fields.file.details.height;
        const width = node.data.target.fields.file.details.width;
        return <img src={src} width={width} height={height} />;
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        const src = 'https:' + node.data.target.fields.inlineImage.fields.file.url;
        const height = node.data.target.fields.inlineImage.fields.file.details.height;
        const width = node.data.target.fields.inlineImage.fields.file.details.width;
        const direction = node.data.target.fields.imgDirection;
        const inline_txt = node.data.target.fields.inlineTxt;
        const inlineImgRate: number = node.data.target.fields.imgSize;
        return (
          <div className={direction == 'right' ? `${styles.right} ${styles.inlineTxt}` : styles.inlineTxt}>
            <section style={{ width: `${100 - inlineImgRate}%` }}>
              <p>{inline_txt}</p>
            </section>
            <section style={{ width: `${inlineImgRate}%` }}>
              <img className={styles.inlineImage} src={src} width={width} height={height} />
            </section>
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node: any) => {
        if (node.data.uri.indexOf('youtube.com') !== -1) {
          return <Youtube width={contWidth}>{node.data.uri}</Youtube>;
        }
        return <a href={node.data.uri}>{node.data.uri}</a>;
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
    },
    renderText: (text: any) => {
      return text.split('\n').reduce((children: any, textSegment: any, index: number) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  //コンテンツの横幅を取得して、Videoの高さを決定する
  const contRef = useRef(null);
  const [contWidth, setContWidth] = useState(500);

  return (
    <div
      ref={contRef}
      className={router == '/member/[member]' ? `${styles.post_cont} ${styles.member_page}` : styles.post_cont}
    >
      {documentToReactComponents(postCont, renderOption)}
    </div>
  );
};

export default Cont;
