import Document, { Html, Main, NextScript, DocumentContext } from 'next/document'
import Head from '@modules/common/components/Head'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
