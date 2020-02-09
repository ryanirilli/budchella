import React from "react";
import NextDocument from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat:400,600|Roboto+Slab:300,400&display=swap"
              rel="stylesheet"
            />
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
