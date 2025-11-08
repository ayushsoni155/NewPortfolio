import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';

const CV_LINK = 'https://drive.google.com/file/d/1S6KnvSU9kXbi-0aJS_Al3aKY2V7x13n4/view?usp=drive_link';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const primaryText = theme.palette.mode === 'dark' ? '#ffffff' : '#000000';
  const secondaryText = theme.palette.text.secondary;

  return (
    <Box
      id="home"
      sx={{
        // pt:{xs:0, md:6, lg:8},
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt:{xs:10, sm:12},
        px: { xs: 2, md: 6 },
        bgcolor: theme.palette.background.default,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
        width="100%"
      >
        {/* Left Content */}
        <Box flex={1}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              fontWeight={700}
              color={primaryText}
              gutterBottom
              fontFamily="Poppins"
            >
              Hi, I’m Ayush Soni
            </Typography>
            <Typography
              variant="h6"
              fontWeight={400}
              color={secondaryText}
              fontFamily="Poppins"
              mb={3}
            >
              Full-Stack Developer | MERN | Java | Problem Solver
            </Typography>
            <Typography variant="body1" color={secondaryText} maxWidth={600} mb={4}>
              Motivated B.Tech Computer Science student with hands-on experience in MERN stack, backend development, and real-world projects like SkillSyncAI and ByteWise. Passionate about solving problems and building impactful software.
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button
                component='a'
                href='#about'
                variant="outlined"
                size={isMobile ? 'small' : 'medium'}
                sx={{
                  textTransform: 'none',
                  fontWeight: 500,
                  borderRadius: 2,
                }}
              >
                More about me
              </Button>
              <Button
  href={CV_LINK}
  target="_blank"
  rel="noopener noreferrer"
  variant="contained"
  size={isMobile ? 'small' : 'medium'}
  startIcon={<DownloadIcon />}
  sx={{
    textTransform: 'none',
    fontWeight: 500,
    borderRadius: 2,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    color:
      theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
    '&:hover': {
      backgroundColor:
        theme.palette.mode === 'dark' ? '#f5f5f5' : '#222222',
    },
  }}
>
 npm i ayush-cv
</Button>

            </Stack>
          </motion.div>
        </Box>

        {/* Right Content (Animation/Image) */}
        <Box flex={1} display="flex" justifyContent="center">
          <motion.img
            src="ayushImg.jpg"
            alt="Hero Animation"
            style={{
              maxWidth: '100%',
              height: isMobile ? '380px' : '480px',
              objectFit: 'contain',
              borderRadius: '12px',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default LandingPage;

