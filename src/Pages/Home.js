import { Box, Fab } from '@mui/material';
import banner from '../images/bg5.png';
import Slide from '@mui/material/Slide';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Marquee from '../Component/Marquee';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import SelectActionCard from '../Component/SelectActionCard';
import SelectActionCard2 from '../Component/SelectActionCard2'

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ block: 'center' });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 9999,
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function Home(props) {
  return (
    <>
      {/* Scroll Anchor */}
      <Box sx={{ height: 0 }} id="back-to-top-anchor" />

      {/* Banner Section */}
      {/* <Slide in={true} direction="down" timeout={600}>
        <Box
          sx={{
            height: '350px',
            backgroundImage: `url(${banner})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            position: 'relative',
            pt: 10,
          }}
        >
        </Box>
      </Slide> */}
      {/* Banner Section */}
      <Slide in={true} direction="down" timeout={600}>
        <Box sx={{ textAlign: 'center', pt: 0 }}>
          <img
            src={banner}
            alt="Banner"
            style={{
              width: '100%',
              //height: '350px',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Slide>


      {/* Marquee Section */}
      <Marquee />
      <SelectActionCard />
      {/* <SelectActionCard2/> */}

      {/* Scroll to top button (always visible on scroll) */}
      <ScrollTop {...props}>
        <Fab size="small" color="primary" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}