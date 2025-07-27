import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
  Divider,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  Code,
  Groups,
  EmojiObjects,
  Translate,
  Terminal,
  ArrowBack,
  ArrowForward,
} from '@mui/icons-material';

const skills = {
  Frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Bootstrap',
    'MUI',
    'DaisyUI',
  ],
  Backend: [
    'Node.js',
    'Express',
    'Java',
    'C++',
    'Supabase',
    'Servlets',
    'JSP',
  ],
  Databases: ['MongoDB', 'MySQL'],
  'DevOps & Platforms': [
    'Vercel',
    'Render',
    'GitHub',
    'Postman',
    'AWS',
    'Razorpay',
  ],
};

const softSkills = [
  { label: 'Teamwork', icon: <Groups fontSize="small" /> },
  { label: 'Creativity', icon: <EmojiObjects fontSize="small" /> },
  { label: 'Communication', icon: <Translate fontSize="small" /> },
  { label: 'Problem Solving', icon: <Terminal fontSize="small" /> },
];

const certificates = [
  {
    title: 'Fundamentals of C and C++ Programming',
    issuer: 'AKSoft',
    img: 'c&cpp.jpg',
    link: 'https://drive.google.com/file/d/1w2qXvhIbYmlWT1rsJLWPOhHIkgwstpMg/view?usp=drive_link',
  },
  {
    title: 'Web Components Development using Servlets and JSP',
    issuer: 'AKSoft',
    img: 'java.png',
    link: 'https://drive.google.com/file/d/1A6OKpR-Hyi47Tts90GCZrXFbfmPVpG1X/view?usp=sharing',
  },
  {
    title: 'JavaScript - Beginners to Advanced',
    issuer: 'AKSoft',
    img: 'javascript.png',
    link: 'https://drive.google.com/file/d/1ad8dDtqb61C9PvvWV9hnl6W4INqHm9gh/view?usp=sharing',
  },
  {
    title: 'Web Designing using HTML5, CSS3, and Bootstrap',
    issuer: 'AKSoft',
    img: 'webD.png',
    link: 'https://drive.google.com/file/d/1BLsZHV2TAGpL-35kB-ZOr1MuEoI61M7q/view?usp=sharing',
  },
  {
    title: 'Data Science Workshop and Hands-on',
    issuer: 'MIT Ujjain',
    img: 'datascience.jpg',
    link: 'https://drive.google.com/file/d/1vp0r-n-rDzBGZdi2IGlSfBvBHbfRDY2e/view?usp=sharing',
  },
  {
    title: 'Google Cloud Arcade Facilitator Program',
    issuer: 'MIT Ujjain',
    img: 'gcsb.png',
    link: 'https://drive.google.com/file/d/1jOfg4OOulBLO9EOoMetIymObFzhqyLcC/view?usp=drive_link',
  },
  {
    title: 'Machine Learning Workshop and Hands-on',
    issuer: 'MIT Ujjain',
    img: 'ml.jpg',
    link: 'https://drive.google.com/file/d/1jWaSVorhwz6RsfIPeKgnSKIKBHHeohJV/view?usp=sharing',
  },
  {
    title: 'ProjectExpo 4.0 1st Price',
    issuer: 'MIT Ujjain',
    img: 'expo.jpg',
    link: 'https://drive.google.com/file/d/1jTXJusBrRDsePeQ26ijTN0zy7MBQ8Hl5/view?usp=sharing',
  },
];

const responsiveCarousel = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 3 },
  desktop: { breakpoint: { max: 1280, min: 960 }, items: 2 },
  tablet: { breakpoint: { max: 960, min: 600 }, items: 1 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
};

const CustomButtonGroup = ({ next, previous }) => (
  <Box display="flex" justifyContent="center" gap={2} mt={2}>
    <Button onClick={previous} variant="outlined" startIcon={<ArrowBack />}>
      Previous
    </Button>
    <Button onClick={next} variant="outlined" endIcon={<ArrowForward />}>
      Next
    </Button>
  </Box>
);

const SkillsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const carouselRef = useRef();

  return (
    <Box
      id="skills"
      sx={{
        px: { xs: 2, md: 6 },
        py: 6,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
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
          My Skills
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary} mb={4}>
          Here's a quick overview of the technologies and tools I work with. I
          specialize in building full-stack web applications using modern
          development stacks and tools.
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {Object.entries(skills).map(([category, items], index) => (
          <Grid item xs={12} md={6} key={category}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {category}
              </Typography>
              <Divider sx={{ mb: 2, maxWidth: 300 }} />
              <Box display="flex" gap={1} flexWrap="wrap">
                {items.map((skill) => (
                  <Chip
                    key={skill}
                    icon={<Code fontSize="small" />}
                    label={skill}
                    variant="outlined"
                    sx={{ fontWeight: 500 }}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box mt={6}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Soft Skills
          </Typography>
          <Box display="flex" gap={1.5} flexWrap="wrap" mb={5}>
            {softSkills.map((skill, idx) => (
              <Chip
                key={idx}
                icon={skill.icon}
                label={skill.label}
                variant="outlined"
                sx={{ fontWeight: 500 }}
              />
            ))}
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Certificates & Achievements
          </Typography>
          <Typography variant="body2" color={theme.palette.text.secondary} mb={3}>
            Recognitions and certifications earned throughout my learning
            journey.
          </Typography>
        </motion.div>

        <Carousel
          ref={carouselRef}
          responsive={responsiveCarousel}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          arrows={false}
          renderButtonGroupOutside
          customButtonGroup={
            <CustomButtonGroup
              next={() => carouselRef.current.next()}
              previous={() => carouselRef.current.previous()}
            />
          }
        >
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{ padding: 12 }}
            >
              <Box
                sx={{
                  boxShadow: 3,
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: theme.palette.background.paper,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}
                />
                <Box p={2}>
                  <Typography fontWeight={600} gutterBottom>
                    {cert.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color={theme.palette.text.secondary}
                    gutterBottom
                  >
                    {cert.issuer || 'View Certificate'}
                  </Typography>
                  <Box mt={1}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <Chip
                        label="View Certificate"
                        variant="outlined"
                        color="primary"
                        sx={{ fontWeight: 500, cursor: 'pointer' }}
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Carousel>

        <Box mt={4}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            🏆 1st Prize – ProjectExpo 4.0 (2025)
          </Typography>
          <Typography variant="body2" color={theme.palette.text.secondary}>
            Secured <b>1st place</b> and a <b>cash award of ₹3100</b> in{' '}
            <b>ProjectExpo 4.0</b>, a national-level technical competition at
            Mahakal Institute of Technology. Presented a full-stack project
            tackling skill development using AI and MERN stack technologies,
            recognized for innovation and practical impact.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsPage;
