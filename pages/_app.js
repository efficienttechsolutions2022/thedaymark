import "../styles/globals.scss";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
// import "nprogress/nprogress.css";
import "styles/preloader.css";

function MyApp({ Component, pageProps, router }) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    setDomLoaded(true);

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router]);

  return (
    domLoaded && (
      <>
        <Component {...pageProps} key={router.route} />
      </>
    )
  );
}

export default MyApp;
