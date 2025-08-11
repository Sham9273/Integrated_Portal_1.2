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
  { id: 1, title: 'Webmail', icon: webmailicon, description: 'Email platform to compose, send, receive, organize your inbox, and manage contacts effortlessly.' }, //, url: 'https://webmail4.cdac.in/appsuite/sample297.php'
  { id: 2, title: 'IHRMS', icon: ihrmsicon, description: 'HR solution to manage employee profiles, payroll, reimbursements, leaves, and attendance, with automated tax calculations and salary slip generation.' },
  { id: 3, title: 'eMulazim', icon: eMulazimicon, description: 'Streamline file workflows with easy document sharing, automated approvals, and real-time tracking for faster decision-making.' },
  { id: 4, title: 'APAR', icon: APARicon, description: 'Simplify annual performance tracking with centralized employee reports, metrics, and actionable insights.' }, //, url: ''
  { id: 5, title: 'Asset Management', icon: AssetManagementicon, description: 'Track, maintain, and manage assets across their entire lifecycle, from procurement to disposal, with built-in compliance, maintenance, and reporting tools.' },
  { id: 6, title: 'Help Desk', icon: HelpDeskicon, description: 'Coming Soon' },
  { id: 7, title: 'Visitor Management', icon: VistorManagementicon, description: 'Coming Soon' },
  { id: 8, title: 'Project Management', icon: ProjectManagementicon, description: 'Plan projects, assign tasks, track milestones, and collaborate with teams using real-time dashboards and reports.' },
  { id: 9, title: 'CAKES', icon: CAKESicon, description: 'Dedicated training and e-learning hub offering modules, progress tracking, certifications, and a rich content library.' },
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
            fontFamily: 'Cambria, serif',
            color: '#0c4a88ff',
          }}
        >
          Services
        </Typography>
        {/* <Logout /> */}
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
              // sx={{
              //   height: '220px',
              //   borderRadius: '10px',
              //   transition: 'all 0.3s ease-in-out',
              //   transform: selectedCard === index ? 'scale(1.02)' : 'scale(1)',
              //   border:
              //     selectedCard === index ? '2px solid #1976d2' : '1px solid #ccc',
              //   backgroundColor: 'rgba(255, 255, 255, 0.9)',
              // }}

              sx={{
                height: '240px',
                borderRadius: '16px',
                backdropFilter: 'blur(6px)',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                transition: 'all 0.3s ease-in-out',
                transform: selectedCard === index ? 'scale(1.04)' : 'scale(1)',
                border: selectedCard === index ? '2px solid #1976d2' : '1px solid rgba(255,255,255,0.3)',
                boxShadow: selectedCard === index
                  ? '0 8px 20px rgba(25, 118, 210, 0.3)'
                  : '0 4px 12px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  borderColor: '#1976d2',
                }
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
                        // style={{ width: '40px', height: '40px' }}
                        style={{
                          width: '48px',
                          height: '48px',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      component="div"
                      // sx={{
                      //   fontFamily: 'Cambria, serif',
                      //   fontWeight: 600,
                      //   mb: 1,
                      //   color: '#1976d2',
                      //   textAlign: 'center',
                      // }}
                      sx={{
                        fontFamily: 'Cambria, serif',
                        fontWeight: 700,
                        mb: 1,
                        color: '#1976d2',
                        textAlign: 'center'
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
                      sx={{
                        textAlign: 'center',
                        mb: 1,
                        fontStyle: 'italic'
                      }}
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