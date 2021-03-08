import React from 'react'
import { CircularProgress, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import '../Stylesheets/App.css';
import Header from './Header';
import QuoteContainer from './QuoteContainer';
import { createApi } from "unsplash-js";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "cDt2eI6eJSUZZvHbsDHp9ESR2h04QqZ1zl7QByMXvlI"
});

function App(props) {
  const [bgStyle, setBgStyle] = useState({});
  // const [imgSrc, setImgSrc] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (!loading) {
      const fetchData = async () => {
      // setLoading(true);
        const result = await api.photos.getRandom({
          query: 'city',
          count: 1,
          orientation: 'landscape'
        });
        await setBgStyle({
          background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${result.response[0].urls.full})`,
          height:"69vh",
          width: "100vw",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#89b0ae"
         });
        await setLoading(false);
        console.log(result)
      }
      fetchData();
    // }
  }, [])
  return (
    <div className="App">
      {
        loading ? (
          <div id='circular-progress'>
            <CircularProgress />
          </div>
        ) : (
          <>
            <Header {...props} bgStyle={bgStyle} />
            <QuoteContainer {...props} />
          </>
        )
      }
      <footer>
        <div className='footer-container'>
          <div className='footer-text-container'>
            <Typography variant="h6">
              Contact us 📧: <a href="ep@betterthanyesterday.io">support@betterthanyesterday.io</a>
            </Typography>
          </div>
        </div>
        <span style={{ color: '#faf9f9' }}>Copyright © 2012-2021 betterthanyesterday.io. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
