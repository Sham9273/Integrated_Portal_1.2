import { Box, Fab } from '@mui/material';
import banner from '../images/bg3.png';
import Slide from '@mui/material/Slide';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Marquee from '../Component/Marquee';
import useScrollTrigger from '@mui/material/useScrollTrigger';

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
      <Slide in={true} direction="down" timeout={600}>
        <Box
          sx={{
            height: '70vh',
            backgroundImage: `url(${banner})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            position: 'relative',
            pt: 10,
          }}
        >
        
        </Box>

        {/* <Box
          sx={{
            height: '70vh',
            position: 'relative',
            overflow: 'hidden',
          }}
        >

          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          >
            <source src={banner} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              pt: 10,
              height: '100%',
              // width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >

          </Box>
        </Box> */}

      </Slide>

      {/* Marquee Section */}
      <Marquee />

      {/* Scroll to top button (always visible on scroll) */}
      <ScrollTop {...props}>
        <Fab size="small" color="primary" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}



