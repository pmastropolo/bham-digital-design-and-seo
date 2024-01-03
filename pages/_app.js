import "../styles/globals.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import NProgress from 'nprogress';
import '../public/nprogress.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config.js';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      NProgress.start();
    };
    const handleComplete = () => {
      setIsLoading(false);
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <>
      <NavBar />
      <Script 
        strategy="lazyOnload" 
        src={`https://www.googletagmanager.com/gtag/js?id=G-82JN7Y105W`} 
      />
      <Script 
        id="google-analytics-script" 
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-82JN7Y105W', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <ToastContainer />
      {isLoading && <div className="nprogress-custom-parent"><div className="nprogress-custom-bar"/></div>}
      <Footer />
    </>
  );
}
