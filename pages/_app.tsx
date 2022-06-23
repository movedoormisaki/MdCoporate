import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/templates/Layout';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
