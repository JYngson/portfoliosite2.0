import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Raleway&display=swap' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap' rel='stylesheet' />
      </Head> 
      <body className='max-w-screen max-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
