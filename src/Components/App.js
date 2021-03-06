import React from 'react'
import { TextField, Typography, Container, Box } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import '../Stylesheets/App.css';
import MenuAppBar from './MenuAppBar';
import ImageEditor from './ImageEditor';


function App(props) {
  return (
    <div className="App">
        <MenuAppBar {...props} />
        <header className="App-header">
          <Typography id='header-logo' variant="h1">
            Be Better Than Yesterday
          </Typography>  
        </header>
        <div>
          <TextField placeholder="Enter Quote" />
          {/* <ImageEditor /> */}
          <Container>
          <Box my={2}>
            {[...new Array(42)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
          </Box>
        </Container>
        </div>
    </div>
  );
}

export default App;
