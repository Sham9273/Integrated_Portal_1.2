import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { motion } from 'framer-motion';
//import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import PageHeading from './PageHeading';
import bg2 from '../images/bgbg.jpg';

// Icon Images
import webmailicon from '../images/icons/1.png';
import ihrmsicon from '../images/icons/2.png';
import eMulazimicon from '../images/icons/3.png';
import APARicon from '../images/icons/4.png';
import AssetManagementicon from '../images/icons/5.png';
import HelpDeskicon from '../images/icons/6.png';
import VistorManagementicon from '../images/icons/7.png';
import ProjectManagementicon from '../images/icons/8.png';
import CAKESicon from '../images/icons/9.png';
import CorporateLearningDevelopmentPlatformicon from '../images/icons/10.png';
import CDACWebsiteicon from '../images/icons/11.png';
import IntranetPortalicon from '../images/icons/12.png';
//import { Button } from '@mui/material';
import Logout from '../LoginWithEpramaan/Logout';

const cards = [
  { id: 1, title: 'Webmail', icon: webmailicon, description: 'Access your official email securely.' }, //, url: 'https://webmail4.cdac.in/appsuite/sample297.php'
  { id: 2, title: 'IHRMS', icon: ihrmsicon, description: 'Coming Soon' }, 
  { id: 3, title: 'eMulazim', icon: eMulazimicon, description: 'Coming Soon'}, 
  { id: 4, title: 'APAR', icon: APARicon, description: 'Coming Soon' }, //, url: ''
  { id: 5, title: 'Asset Management', icon: AssetManagementicon, description: 'Coming Soon' },
  { id: 6, title: 'Help Desk', icon: HelpDeskicon, description: 'Coming Soon' },
  { id: 7, title: 'Visitor Management', icon: VistorManagementicon, description: 'Coming Soon' },
  { id: 8, title: 'Project Management', icon: ProjectManagementicon, description: 'Coming Soon' },
  { id: 9, title: 'CAKES', icon: CAKESicon, description: 'Coming Soon' },
  { id: 10, title: 'Corporate Learning & Development Platform', icon: CorporateLearningDevelopmentPlatformicon, description: 'Coming Soon' },
  { id: 11, title: 'CDAC Website', icon: CDACWebsiteicon, description: 'Coming Soon' },
  { id: 12, title: 'Intranet Portal', icon: IntranetPortalicon, description: 'Coming Soon' },
];

export default function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        px: 4,
        py: 3,
      }}
    >
      <PageHeading />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
        }}
      >
        {/* <FormatListBulletedSharpIcon sx={{ fontSize: '3rem', color: 'grey', mr: 1 }} /> */}
        <Typography
          variant="h4"
          sx={{
            // fontFamily: 'Poppins, sans-serif',
<<<<<<< HEAD

            fontFamily: 'Cambria, serif',
            fontWeight: 'bold',
            textDecoration: 'underline',

            fontFamily: 'Cambria, serif',
            //fontWeight: 'bold',
            //textDecoration: 'underline',

=======
            fontFamily: 'Cambria, serif',
>>>>>>> 92581cf5d448af2947c7ca1eced250e1462b2e16
            color: '#0c4a88ff',
          }}
        >
          Services
        </Typography>
        <Logout />
      </Box>
      <hr />
      <br />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 3,
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ x: index % 2 === 0 ? -150 : 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card
              elevation={selectedCard === index ? 10 : 3}
              sx={{
                height: '220px',
                borderRadius: '10px',
                transition: 'all 0.3s ease-in-out',
                transform: selectedCard === index ? 'scale(1.02)' : 'scale(1)',
                border:
                  selectedCard === index ? '2px solid #1976d2' : '1px solid #ccc',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <CardActionArea sx={{ height: '100%' }}

                onClick={() => {
                  setSelectedCard(index);
                  if (card.url) {
                    window.open(card.url, '_blank'); // opens in new tab
                    // window.location.href = card.url; // use this if you want same tab
                  }
                }}

              >
                <CardContent sx={{ height: '100%' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ mb: 1 }}>
                      <img
                        src={card.icon}
                        alt={`${card.title} Icon`}
                        style={{ width: '40px', height: '40px' }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontFamily: 'Cambria, serif',
                        fontWeight: 600,
                        mb: 1,
                        color: '#1976d2',
                        textAlign: 'center',
                      }}
                    >
                      {card.title}
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: 'center', fontStyle: 'italic' }}
                    >
                      Coming Soon
                    </Typography> */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: 'center', mb: 1 }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        ))}
      </Box>
      <br />
      <br />
    </Box>
  );
}