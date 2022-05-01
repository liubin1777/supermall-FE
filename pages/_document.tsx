import Document, { Html, Main, NextScript, DocumentContext } from 'next/document'
import MyHead from '@components/Head'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <MyHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
