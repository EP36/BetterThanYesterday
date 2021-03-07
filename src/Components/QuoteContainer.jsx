import { useCallback, useEffect, useState } from 'react';
import { TextField, Typography, Container, Box, Button, OutlinedInput } from '@material-ui/core';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { makeStyles } from '@material-ui/core/styles';
import { createApi } from "unsplash-js";

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
  const [quote, setQuote] = useState('');
  const [submittedQuote, setSubmittedQuote] = useState('');
  const [fetchedImg, setFetchedImg] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('fetchedImg', fetchedImg)
  })

  const takeShot = () => {
    var element = document.getElementById("quote-overlay");

    html2canvas(element).then(function(canvas) {
      canvas.toBlob(function(blob) {
        const imgdl = saveAs(blob, "fucking.png")
      })
    });
  };

  const fetchImage = useCallback(() => {
    setLoading(true);
    api.photos.getRandom({
      query: 'city',
      count: 1,
      orientation: 'landscape'
    }).then((res) => {
      setFetchedImg(res.response);
      setLoading(false);
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    
    fetchImage();
    setSubmittedQuote(quote);
    setQuote('')
  };

  const handleChange = e => {
    setQuote(e.target.value);
  }

  return (
    <div className='quote-container'>
      <div className='quote-textfield-container'>
        <OutlinedInput
          id='quote-textfield'
          value={quote}
          onChange={handleChange}
          placeholder='Enter Your Quote'
        />
        <Button className={classes.button_root} onClick={handleSubmit}>Submit</Button>
      </div>
      <div id='quote-photo'>
        <div id='quote-overlay'>
          
          <h2>
            {submittedQuote}
          </h2>
        </div>
      </div>
      <div>
        {
          submittedQuote ? (
            <Button className={classes.button_root} onClick={takeShot}>Download</Button>
          ) : null
        }
      </div>
    </div>
  )
};

export default QuoteContainer;