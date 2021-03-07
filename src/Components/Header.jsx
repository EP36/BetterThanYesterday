import { Typography } from '@material-ui/core';
import MenuAppBar from './MenuAppBar';

const Header = props => {
  return (
    <>
      <MenuAppBar {...props} />
      <header style={props.bgStyle} className="App-header">
        <Typography id="header-logo" variant="h1">
          Be Better Than Yesterday
        </Typography>
      </header>
    </>
  )
};

export default Header;