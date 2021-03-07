import React from 'react'
import { CircularProgress, TextField, Typography, Container, Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import '../Stylesheets/App.css';
import MenuAppBar from './MenuAppBar';
import ImageEditor from './ImageEditor';
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
  const [imgSrc, setImgSrc] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (!loading) {
      const fetchData = async () => {
      setLoading(true);
        const result = await api.photos.getRandom({
          query: 'city',
          count: 1,
          orientation: 'landscape'
        });
        await setBgStyle({
          background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${result.response[0].urls.full})`,
          height:"80vh",
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
  }, [imgSrc])
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
    </div>
  );
}

export default App;
