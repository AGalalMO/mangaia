import Helmet from "react-helmet";
import { Provider, useSelector } from "react-redux";
import Layout from "../src/components/layout";
import { appWithTranslation } from "next-i18next";
import { store } from "~/src/store/store.js";

import "~/public/scss/plugins/owl-carousel/owl.carousel.scss";
import "~/public/scss/style.scss";

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Helmet>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Molla React Template" />
        <meta
          name="description"
          content="Molla –  eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites."
        />
        <meta name="author" content="d-themes" />
        <meta name="apple-mobile-web-app-title" content="Molla" />
        <meta
          name="application-name"
          content="Molla React eCommerce Template"
        />
        <meta name="msapplication-TileColor" content="#cc9966" />
        <meta
          name="msapplication-config"
          content="images/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        <title>Molla - React eCommerce Template</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="images/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="images/icons/safari-pinned-tab.svg"
          color="#666666"
        />
        <link rel="shortcut icon" href="images/icons/favicon.ico" />
      </Helmet>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

WrappedApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default appWithTranslation(WrappedApp);
