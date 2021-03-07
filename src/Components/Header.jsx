import { Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import MenuAppBar from './MenuAppBar';
import { createApi } from "unsplash-js";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "cDt2eI6eJSUZZvHbsDHp9ESR2h04QqZ1zl7QByMXvlI"
});

const Header = props => {
  const [bgStyle, setBgStyle] = useState({})

  useEffect(()=>{
    console.log('yellow', process.env.UNSPLASH_ACCESS_KEY)
  })

  useEffect(() => {
    
   api.photos.getRandom({
     query: 'city',
     count: 1,
     orientation: 'landscape'
   }).then((res) => {
     setBgStyle({
      //  backgroundImage: `url(${res.response[0].urls.full})`,
        background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${res.response[0].urls.full})`,
       height:"80vh",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
     })
   })
  }, [])
  return (
    <>
      <MenuAppBar {...props} />
      <header style={bgStyle} className="App-header">
        <Typography id="header-logo" variant="h1">
          Be Better Than Yesterday
        </Typography>
      </header>

    </>
  )
};

export default Header;