import { Box, Typography, IconButton, useTheme, Tooltip, Link as MuiLink } from '@mui/material';
import { GitHub, LinkedIn, Email, Instagram } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        mt: 8,
        py: 4,
        textAlign: 'center',
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        borderTop: `1px solid ${theme.palette.divider}`,
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
        <Typography variant="body2" sx={{ fontSize: 14 }}>
          © {new Date().getFullYear()} Ayush Soni. All rights reserved.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Footer;
