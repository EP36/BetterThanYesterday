import { TextField, Typography } from '@material-ui/core';
import '../Stylesheets/App.css';
import MenuAppBar from './MenuAppBar';
import ImageEditor from './ImageEditor';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <header className="App-header">
        <Typography id='header-logo' variant="h1">
          Be Better Than Yesterday
        </Typography>  
      </header>
      <div>
        <TextField placeholder="Enter Quote" />
        {/* <ImageEditor /> */}
      </div>
    </div>
  );
}

export default App;
