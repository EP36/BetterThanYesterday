import React from 'react'
import { TextField, Typography, Container, Box } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import '../Stylesheets/App.css';
import MenuAppBar from './MenuAppBar';
import ImageEditor from './ImageEditor';
import Header from './Header';
import QuoteContainer from './QuoteContainer';


function App(props) {
  return (
    <div className="App">
        <Header {...props} />
        <QuoteContainer {...props} />
    </div>
  );
}

export default App;
