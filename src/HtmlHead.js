import React from 'react'
import { Helmet } from "react-helmet"

const HtmlHead = () => {
  const title = 'Marc Opsal - Author of LIFECAST';
  const url = 'https://marcopsal.com/';
  const description = "BRAVE NEW WORLD  meets FEED  in this thrilling adventure that pits one man against a pleasure-obsessed society that threatens to take everything from him."
  const image = 'https://marcopsal.com/lifecast-product.png';
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Helmet>
      <Helmet 
        script={[{ 
          type: 'text/javascript', 
          innerHTML: `
          function clearServiceWorkers() {
            if(!(localStorage && localStorage.getItem && !localStorage.getItem('serviceworker-reset') && navigator && navigator.serviceWorker && navigator.getRegistrations)) {
              return
            } 
            
            localStorage.setItem('serviceworker-reset',true);
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
              for(let registration of registrations) {
                registration.unregister()
                document.location.reload()
              }
            })
          }
          clearServiceWorkers();
          ` 
        }]} 
      />
    </>
  );
};

export default HtmlHead;
