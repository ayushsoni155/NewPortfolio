import {
  Box,
  Typography,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
  Tooltip,
  Paper,
  Divider,
} from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Instagram from '@mui/icons-material/Instagram';
import CodeIcon from '@mui/icons-material/Code';
import Telegram from '@mui/icons-material/Telegram'

const links = [
  {
    label: 'GitHub',
    icon: <GitHubIcon fontSize="large" />,
    url: 'https://github.com/ayushsoni155',
  },
  {
    label: 'LinkedIn',
    icon: <LinkedInIcon fontSize="large" />,
    url: 'https://linkedin.com/in/ayush-soni-9b2583239',
  },
  {
    label: 'Email',
    icon: <EmailIcon fontSize="large" />,
    url: 'mailto:ayushsoni.gcsb@gmail.com',
  },
  {
    label: 'LeetCode',
    icon: <CodeIcon fontSize="large" />,
    url: 'https://leetcode.com/u/ayushsoni6997/',
  },
  {
    label: 'Instagram',
    icon: <Instagram fontSize="large" />,
    url: 'https://Instagram.com/ayushsoni.155',
  },
  {
    label: 'Telegram',
    icon: <Telegram fontSize="large" />,
    url: 'https://t.me/ayushsoni155',
  },
];

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="contact"
      sx={{
        px: { xs: 2, md: 6 },
        pt:{xs:10, sm:12},
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          textAlign: 'center',
          maxWidth: 900,
          margin: '0 auto',
          bgcolor: theme.palette.background.paper,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            fontWeight={700}
            fontFamily="Poppins"
            gutterBottom
          >
            Get in Touch
          </Typography>
          <Typography variant="body1" color={theme.palette.text.secondary} mb={3}>
            Let's connect and build something awesome together! Whether it's freelance, collaboration, or just a chat.
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center">
          {links.map(({ label, icon, url }, idx) => (
            <Grid item key={label}>
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, delay: idx * 0.05 }}
              >
                <Tooltip title={label} arrow>
                  <IconButton
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.text.primary,
                      border: `2px solid ${theme.palette.divider}`,
                      borderRadius: '50%',
                      width: 72,
                      height: 72,
                      transition: '0.4s',
                      backgroundColor: theme.palette.background.default,
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f0f0f0',
                        boxShadow: `0 0 12px ${
                          theme.palette.mode === 'dark' ? '#ffffff33' : '#00000033'
                        }`,
                      },
                    }}
                  >
                    {icon}
                  </IconButton>
                </Tooltip>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ContactPage;
