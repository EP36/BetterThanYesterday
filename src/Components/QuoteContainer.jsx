import { useRef, useState } from 'react';
import { TextField, Typography, Container, Box, Button, OutlinedInput } from '@material-ui/core';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { makeStyles } from '@material-ui/core/styles';

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
  const [loading, setLoading] = useState(false);
  const textfieldRef = useRef(null);

  const takeShot = () => {
    var element = document.getElementById("quote-overlay");

    html2canvas(element).then(function(canvas) {
      canvas.toBlob(function(blob) {
        const imgdl = saveAs(blob, "fucking.png")
      })
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
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