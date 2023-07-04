import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
        <head>
        <title>OhmyCity!</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </head>
      <body>
        <div className="row">
        <footer className="footer">OhmyCity! &copy; {new Date().getFullYear()}</footer>
        </div>
        </body>
        
        </>
    )
}
export default Footer;