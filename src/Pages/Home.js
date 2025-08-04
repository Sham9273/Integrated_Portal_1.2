import { Box, Fab } from '@mui/material';
import banner from '../images/bg2.png';
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
          zIndex: 9999, // ensures it's on top of all other content
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
          {/* Banner content if any */}
        </Box>
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





// import { Box, Container, Fab } from '@mui/material';
// import banner from '../images/bg2.png';
// import Slide from '@mui/material/Slide';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Fade from '@mui/material/Fade';
// import Marquee from '../Component/Marquee';
// import useScrollTrigger from '@mui/material/useScrollTrigger';

// function ScrollTop(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
//     if (anchor) {
//       anchor.scrollIntoView({ block: 'center' });
//     }
//   };

//   return (
//     <Fade in={trigger}>
//       <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
//         {children}
//       </Box>
//     </Fade>
//   );
// }

// export default function Home(props) {
//   return (
//     <>
//       {/* Spacer matching AppBar height */}
//       <Box sx={{ height: 0}} id="back-to-top-anchor" />

//       {/* Banner Section */}
//       <Slide in={true} direction="down" timeout={600}>
//         <Box
//           sx={{
//             height: '70vh',
//             backgroundImage: `url(${banner})`,
//             backgroundSize: '100% 100%',
//             backgroundPosition: 'center',
//             position: 'relative',
//             pt: 10,
//           }}
//         >
//           {/* Scroll to top button */}
//           <ScrollTop {...props}>
//             <Fab size="small" color="primary" aria-label="scroll back to top">
//               <KeyboardArrowUpIcon />
//             </Fab>
//           </ScrollTop>
//         </Box>
//       </Slide>

//       {/* Marquee Section */}
//       <Marquee />
//     </>
//   );
// }



// import { Box, Container, Toolbar, Typography, Fab } from '@mui/material';
// import banner from '../images/1.png';
// import Slide from '@mui/material/Slide';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Fade from '@mui/material/Fade';
// //import { motion } from 'framer-motion';
// import Marquee from '../Component/Marquee';
// import useScrollTrigger from '@mui/material/useScrollTrigger';

// function ScrollTop(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
//     if (anchor) {
//       anchor.scrollIntoView({ block: 'center' });
//     }
//   };

//   return (
//     <Fade in={trigger}>
//       <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
//         {children}
//       </Box>
//     </Fade>
//   );
// }

// export default function Home(props) {
//   return (
//     <>
//       <Toolbar id="back-to-top-anchor" />
//       <Slide in={true} direction="down" timeout={600}>
//         <Box
//           sx={{
//             height: '70vh',
//             backgroundImage: `url(${banner})`,
//             backgroundSize: '100% 100%',
//             backgroundPosition: 'center',
//             position: 'relative',
//             pt: 10,
//           }}
//         >
//           {/* <Container>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.4 }}
//             >
//               <Box
//                 sx={{
//                   my: 5,
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   height: '50vh',
//                   textAlign: 'center',
//                 }}
//               >
//                 <Typography variant="h3" sx={{ color: '#fff', fontWeight: 'bold' }}>
//                   Welcome to the Integrated Portal
//                 </Typography>
//               </Box>
//             </motion.div>
//           </Container> */}

//           <ScrollTop {...props}>
//             <Fab size="small" color="primary" aria-label="scroll back to top">
//               <KeyboardArrowUpIcon />
//             </Fab>
//           </ScrollTop>
//         </Box>
//       </Slide>
//       <Marquee />
//     </>
//   );
// }