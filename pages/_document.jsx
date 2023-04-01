import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render () {
        return (
          <Html lang='en'>
            <Head>
              <script
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P9JMPJX');`,
                }}></script>
              <base href={process.env.PUBLIC_URL} />
              <link
                rel='stylesheet'
                href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700%7CPoppins:300,400,500,600,700'
              />
              <link
                rel='stylesheet'
                type='text/css'
                href='css/bootstrap.min.css'
              />
              <link
                rel='stylesheet'
                type='text/css'
                href='css/fonts-molla.min.css'
              />
              <link
                rel='stylesheet'
                type='text/css'
                href='vendor/line-awesome/css/line-awesome.min.css'
              />
            </Head>
            <body>
              <noscript
                dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9JMPJX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}></noscript>
            
              <Main />

              <script src='js/jquery.min.js'></script>
              <NextScript />
            </body>
          </Html>
        );
    }
}