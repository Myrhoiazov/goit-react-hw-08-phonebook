import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

// import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { Typography } from '@mui/material';

// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

const Nav = () => {
  return (
    <div
      role="presentation"
      // onClick={handleClick}
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          to="/home"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          HOME
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          to="/contacts"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Contact
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Nav;
