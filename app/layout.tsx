import React, { ReactNode } from 'react';
import '@/styles/globals.css';
import  "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@components/Navbar';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Certificate Guide',
  description: '',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  themeColor: '',
  keywords: '',
  openGraph: {
    title: 'Certificate Guide Website',
    description: 'Description for the Certificate Guide website',
    url: 'https://yourwebsite.com', // replace with actual URL
    type: 'website', // Make sure to use a valid type, e.g., 'website'
    images: [
      {
        url: 'https://yourwebsite.com/image.jpg', // replace with actual image URL
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // common valid Twitter card type
    title: 'Certificate Guide Twitter Title',
    description: 'Certificate Guide website description for Twitter',
    image: 'https://yourwebsite.com/twitter-image.jpg', // replace with actual image URL
  },
  link: [
    {
      rel: 'icon',
      href: './images/WebIcon.svg',
    },
    {
      rel: 'stylesheet',
      href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
    },
  ],
};


const RootLayout = ({ children }: RootLayoutProps) => {


  return (
    <html lang="ar">
      <head>
        <meta charSet={metadata.charset} />
        <meta name="viewport" content={metadata.viewport} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="keywords" content={metadata.keywords} />

        {/* OpenGraph meta tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}

        {/* Twitter meta tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Links */}
        {metadata.link.map((link, index) => (
          <link key={index} rel={link.rel} href={link.href} />
        ))}
      </head>
      <body>
      
        <div className="main">
          <div className="gradient" />
        </div>

        <Navbar />
  
        <main className="app">{children}</main>

        
      </body>
    </html>
  );
};

export default RootLayout;
