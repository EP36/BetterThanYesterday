import { Typography } from '@material-ui/core';
import MenuAppBar from './MenuAppBar';

const Header = props => {
  return (
    <div style={{ width: "100%", paddingBottom: 12 }}>
      <MenuAppBar {...props} />
      <header style={props.bgStyle} className="App-header">
        <Typography id="header-logo" variant="h1">
          Be Better Than Yesterday
        </Typography>
      </header>
    </div>
  )
};

export default Header;