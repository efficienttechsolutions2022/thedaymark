import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
// import * as gtag from "../../lib/gtag";
import Browsersize from "../Browsersize/Browsersize";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "views/components/menu";

function Layout(props) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    return setOpenMenu(!openMenu);
  };
  // //Analytics
  // const { query } = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  // useEffect(() => {
  //   // console.log(query);
  //   if (query.utm_source) {
  //     localStorage.setItem("utm_source", query.utm_source);
  //   }
  //   if (query.utm_medium) {
  //     localStorage.setItem("utm_medium", query.utm_medium);
  //   }
  //   if (query.utm_term) {
  //     localStorage.setItem("utm_term", query.utm_term);
  //   }
  // }, [router.isReady]);
  return (
    <>
      <Head>
        <title>{props.head.title}</title>
        <meta name="description" content={props.head.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXX');
            gtag('config', 'UA-XXX');
                gtag('config', 'AW-XXX');
                gtag('event', 'page_view', {
                'send_to': 'AW-XXX'
                });
            `}
      </Script> */}
      {/* <Script id="facebook-pixel" strategy="afterInteractive">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'XXXX');
        fbq('track', 'PageView');
      `}
      </Script> */}
      {props.header && (
        <Header
          reveal={props.header?.reveal}
          color={props.header?.color}
          centerLogo={props.header?.centerLogo}
          openedMenu={openMenu}
          toggleMenu={toggleMenu}
        />
      )}
      <Menu open={openMenu} toggleMenu={toggleMenu} />
      {props.children}
      {props.footer && <Footer className={props.footer?.style} />}
      <Browsersize />
    </>
  );
}

export default Layout;
