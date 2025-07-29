import {
  Box,
  Typography,
  IconButton,
  useTheme,
  Tooltip,
  Paper,
} from '@mui/material';
import { GitHub, LinkedIn, Email, Instagram } from '@mui/icons-material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'GitHub',
    icon: <GitHub />,
    url: 'https://github.com/ayushsoni155',
  },
  {
    label: 'LinkedIn',
    icon: <LinkedIn />,
    url: 'https://linkedin.com/in/ayush-soni-9b2583239',
  },
  {
    label: 'Email',
    icon: <Email />,
    url: 'mailto:ayushsoni.gcsb@gmail.com',
  },
  {
    label: 'Instagram',
    icon: <Instagram />,
    url: 'https://instagram.com/ayushsoni.155',
  },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        mt: 8,
        zIndex: 1100,
      }}
    >
      {/* Fake top shadow using a Box */}
      <Box
        sx={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '10px',
          boxShadow: '0 -10px 15px -5px rgba(0,0,0,0.2)',
          zIndex: 1,
        }}
      />

      <Paper
        elevation={4}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderTop: `1px solid ${theme.palette.divider}`,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          py: 4,
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Social Icons */}
          <Box mb={2} display="flex" justifyContent="center" gap={2}>
            {socialLinks.map(({ label, icon, url }) => (
              <Tooltip key={label} title={label} arrow>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    {icon}
                  </IconButton>
                </motion.div>
              </Tooltip>
            ))}
          </Box>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: 9, sm: 12 },
              color: 'text.secondary',
              textAlign: 'center',
              m: 2,
              fontWeight: 500,
              fontFamily: 'Poppins, serif',
            }}
          >
            © {new Date().getFullYear()} Ayush Soni. All rights reserved. |
            <span style={{ fontStyle: 'italic', marginLeft: 6 }}>
              “यत् भावो – तत् भवति।” — You become what you believe.
            </span>
          </Typography>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default Footer;
