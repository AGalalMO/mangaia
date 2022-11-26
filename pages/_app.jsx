import { useEffect } from "react";
import Helmet from "react-helmet";
import { useStore } from 'react-redux'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from "../store/index.js";
import Layout from '../components/layout';

import { actions as demoAction } from "../store/demo";

import '~/public/scss/plugins/owl-carousel/owl.carousel.scss';
import "~/public/scss/style.scss";

const WrappedApp = ({ Component, pageProps }) => {
    const store = useStore();
    useEffect(() => {
        if (store.getState().demo.current != process.env.NEXT_PUBLIC_DEMO) {
            store.dispatch(demoAction.refreshStore(process.env.NEXT_PUBLIC_DEMO));
        }
    }, [])

    return (
        <Provider store={store}>
            <PersistGate
                persistor={store.__persistor}
                loading={
                    <div className="loading-overlay">
                        <div className="bounce-loader">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>
                }>

                <Helmet>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="keywords" content="unex " />
                    <meta name="description" content="unex – "
                    />
                    <meta name="author" content="d-themes" />
                    <meta name="apple-mobile-web-app-title" content="unex" />
                    <meta name="application-name" content="unex " />
                    <meta name="msapplication-TileColor" content="#cc9966" />
                    <meta name="msapplication-config" content="images/icons/browserconfig.xml" />
                    <meta name="theme-color" content="#ffffff" />
                    <title>UNEX-For Men Clothing</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="images/icons/Logo.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="images/icons/Logo.png" />
                    <link rel="manifest" href="images/icons/site.webmanifest" />
                    <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#666666" />
                    <link rel="shortcut icon" href="images/icons/Logo.png" />
                </Helmet>

                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider >
    )
};

WrappedApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default wrapper.withRedux(WrappedApp);
