import Head from 'next/head';
import Link from 'next/link';
import { title } from 'process';
import { ReactNode, useTransition } from 'react';
import { Html, Main, NextScript } from 'next/document';
import Footer from '../layouts/footer';
import Header from '../layouts/header';
import { motion, Variants } from 'framer-motion';
import { getWindowSize } from '../../hooks/GetWindowSize';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../templates/layout.module.scss';

type Props = {
  children?: ReactNode;
};

const nav_items: string[] = ['top', 'works', 'about us', 'members', 'blog', 'contact'];
const link_items: string[] = ['/', '/works/', '/aboutus/', '/members/', '/blog/', '/contact/'];

const Layout = ({ children }: Props) => {
  const description =
    '兵庫県三田市を拠点の広報PR会社です。WEBサイトや映像制作やチラシ・パンフなどのデザイン制作などを中心にご依頼承っております。';
  const title = '株式会社MOVEDOOR';
  const { width, height } = getWindowSize();

  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => url !== router.asPath && setPageLoading(true);
    const handleComplete = () => setTimeout(() => setPageLoading(false), 1000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    console.log(pageLoading);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${process.env.SITE_URL}/ogp_large.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(d) {
              var config = {
                kitId: 'spm5mak',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
            
            (function(d) {
              var config = {
                kitId: 'fgh1hsk',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);

        `,
          }}
        />
      </Head>
      <Transition />
      <Header nav={nav_items} link={link_items}></Header>
      {/* {(() => {
        if (pageLoading) {
          return <PageTransition />;
        }
      })()} */}
      <motion.main style={{ overflow: 'hidden', position: 'relative' }}>{children}</motion.main>
      <Footer nav={nav_items} link={link_items}></Footer>
    </>
  );
};

export default Layout;

const Transition = () => {
  const { width, height } = getWindowSize();
  return (
    <motion.div
      style={{
        width: width + 'px',
        height: height + 'px',
        position: 'fixed',
        background: '#000',
        zIndex: '9999',
        top: '0',
        left: '0',
      }}
      variants={blackBox}
      initial="initial"
      animate="animate"
      exit="exit"
    ></motion.div>
  );
};

const PageTransition = () => {
  const { width, height } = getWindowSize();
  return (
    <div
      style={{
        width: width + 'px',
        height: height + 'px',
        position: 'fixed',
        background: '#000',
        zIndex: '9999',
        top: '0',
        left: '0',
      }}
      className={styles.pageTransition}
    ></div>
  );
};

const blackBox: Variants = {
  initial: {
    y: '0',
  },

  animate: {
    y: '-100%',
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },

  exit: {
    y: '0',
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
