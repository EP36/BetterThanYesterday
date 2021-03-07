import { useCallback, useState } from 'react';
import {  Button, OutlinedInput, CircularProgress, Typography } from '@material-ui/core';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { makeStyles } from '@material-ui/core/styles';
import { createApi } from "unsplash-js";
import watermark from '../assets/logo192.png'

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "cDt2eI6eJSUZZvHbsDHp9ESR2h04QqZ1zl7QByMXvlI"
});

const useStyles = makeStyles({
  button_root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '1em'
  },
});

const QuoteContainer = props => {
  const classes = useStyles();
  const [imgStyle, setImgStyle] = useState({});
  const [quote, setQuote] = useState('');
  const [submittedQuote, setSubmittedQuote] = useState('');
  const [imgSrc, setImgSrc] = useState([]);
  const [loading, setLoading] = useState(false);


  const takeShot = () => {
    var element = document.getElementById("quote-photo");
    console.log('element', element)

    html2canvas(element).then(function(canvas) {
      console.log('canvas', canvas)
      canvas.toBlob(function(blob) {
        console.log('blob', blob)
        const imgdl = saveAs(blob, "fucking.png")
      })
      // const img = canvas.toDataURL("image/png");;
      // document.write('<img src="'+img+'"/>');
    });
  };

  const fetchImage = useCallback(async () => {
    setLoading(true);
    const result = await api.photos.getRandom({
      query: 'city',
      count: 1,
      orientation: 'portrait'
    })
    setImgSrc(result.response[0].urls.regular)
    setLoading(false);
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    
    fetchImage();
    setSubmittedQuote(quote);
    setQuote('')
  };

  const handleQuoteChange = e => {
    setQuote(e.target.value);
  }

  return (
    <div className='quote-container'>
      {
        !loading ? (
          <>
            <div id='quote-textfield-container'>
              <div id='copy-container'>
                <Typography variant="h3">
                  Quote Generator
                </Typography>

                <Typography variant="h6">
                  Free Online Quote Generator
                </Typography>

                <br/>

                <Typography variant="subtitle1">
                With this tool you can generate beautiful, pre-filtered images with your favorite quote. The <b>Free Online Quote Generator</b> takes in any quote and layers that on-top of an AI-generated image from a curated list of beautiful images from  <a href="http://unsplash.com">Unsplash</a>.
                <br/>
                <b>Simply enter your favorite quote below, submit & screenshot!</b>
                <br/>
                Less working, more creating!
                </Typography>

                <br/>
              </div>
              <OutlinedInput
                id='quote-textfield'
                value={quote}
                onChange={handleQuoteChange}
                placeholder='Enter Your Quote'
              />
              {/* <OutlinedInput
                id='quote-textfield'
                value={author}
                onChange={handleAuthorChange}
                placeholder='Enter Your Quote'
              /> */}
              <Button className={classes.button_root} onClick={handleSubmit}>Submit</Button>
              <br/>
            </div>
            {
              submittedQuote ? (
              <div id='quote-photo'>
                <div id='quote-overlay' style={{ width: "300px", height: "700px", lineHeight: "36px" }}>
                  <span id='submitted-quote'>
                    {submittedQuote}
                  </span>
                  <div id='watermark-container' style={{ position: 'relative', width: '400px' }} >
                    <img id='watermark' src={watermark} alt={watermark} />
                  </div>
                  <img src={imgSrc} alt={imgSrc} style={{ width: 370 }}  />
                </div>
              </div>
              ) : null
            }
            {/* <div>
              {
                submittedQuote ? (
                  <Button className={classes.button_root} onClick={takeShot}>Download</Button>
                ) : null
              }
            </div> */}
          </>
        ) : (           
        <div id='circular-progress'>
          <CircularProgress />
        </div>)
      }
    </div>  
  )
};

export default QuoteContainer;