import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';
import ThemeToggleButton from './ThemeToggleButton';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const navItems = [
  { label: '<Home/>', path: '#home' },
  { label: '$About-Me', path: '#about'  },
  { label: './My-Skills.js', path: '#skills' },
  { label: '[Projects]', path: '#projects' },
  { label: '{Contact}', path: '#contact' },
];

const CV_LINK = 'https://drive.google.com/file/d/1lG-0-h9lnu2BGoNygz_gLWgR4qD5eqcR/view?usp=drive_link';
export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const hoverColor =
    theme.palette.mode === 'dark'
      ? theme.palette.action.hover
      : theme.palette.grey[200];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          px: 0,
          py: 0,
          borderRadius:0,
           borderBottomRightRadius:12,
           borderBottomLeftRadius:12,
          borderBottom: `1px solid ${theme.palette.divider}`,
           zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'nowrap', px:0.5 }}>
          {/* Logo + Menu for Tablet/Mobile */}
          <Box display="flex" alignItems="center" gap={1}>
            {isTablet && (
              <>
                <IconButton onClick={handleMenuOpen} sx={{ color: 'inherit' }}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.label}
                      component="a"
                      href={item.path}
                      onClick={handleMenuClose}
                      sx={{
                        fontSize:14,
                        px: 2,
                        '&:hover': {
                          backgroundColor: hoverColor,
                        },
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box>
                <Typography
                  variant="h6"
                  component="a"
                  href="#home"
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontWeight: 700,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {`(A.S)=>`}
                </Typography>
                {!isTablet && (
                  <Typography
                    variant="caption"
                    sx={{
                      fontStyle: 'italic',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {`{<Full-Stack Developer/>}`}
                  </Typography>
                )}
              </Box>
            </motion.div>
          </Box>

          {/* Desktop Nav Links */}
          {!isTablet && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Box display="flex" gap={2} alignItems="center">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Button
                      component="a"
                      href={item.path}
                      sx={{
                        fontSize:14,
                        color: 'inherit',
                        fontWeight: 500,
                        borderRadius: '12px',
                        textTransform: 'none',
                        transition: '0.3s',
                        '&:hover': {
                          backgroundColor: hoverColor,
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          )}

          {/* Theme toggle & CV button */}
          <Box display="flex" alignItems="center" gap={1}>
            <motion.div whileHover={{ rotate: 10 }} transition={{ type: 'spring', stiffness: 200 }}>
              <ThemeToggleButton />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DownloadIcon />}
                variant="contained"
                size={isMobile ? 'small' : 'medium'}
                sx={{
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: isMobile ? '0.7rem' : '0.875rem',
                  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                  color: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#f5f5f5' : '#222222',
                  },
                }}
              >
                {`<CV/>`}
              </Button>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}


