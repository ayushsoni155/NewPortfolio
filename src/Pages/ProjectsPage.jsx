import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  useTheme,
  useMediaQuery,
  Divider,
  IconButton
} from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiberManualRecord } from '@mui/icons-material';

const projects = [
  {
    title: 'SkillSyncAI',
    description:
      'An AI-powered career development platform with mock interviews, quizzes, and performance tracking. Built using MERN stack and OpenAI API.',
    image: 'skillsyncaiSS.png',
    link: 'https://skillsyncai.vercel.app',
    repo: 'https://github.com/ayushsoni101/skillsyncai',
  },
  {
    title: 'ByteWise - Your Tool kit for Engineering Success',
    description:
      'An academic toolkit for engineering students with notes, lab manuals, and Razorpay integration. Full-stack app using React, Node.js, and MySQL.',
    image: 'bytewiseSS.png',
    link: 'https://bytewise24.vercel.app',
    repo: 'https://github.com/ayushsoni101/bytewise',
  },
  {
    title: "ByteWise - Admin Panel",
    description: "An admin dashboard for managing students, orders, products, and courses on the ByteWise eCommerce platform, providing an intuitive interface for administrators.",
    image: "adminBytewiseSS.png",
    link: "https://admin-bytewise24.vercel.app/",
   repo:'aa'
  },
  {
    title: "Weather Forecast App",
    description: "A weather forecasting application that provides real-time weather updates, including temperature, humidity, and wind speed, using OpenWeatherMap API.",
    image: "Weather-forcastSS.png",
    link: "https://weather-forcast-murex.vercel.app/",
   repo:'aa'
  },
];



const ProjectsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="projects"
      sx={{
        px: { xs: 2, md: 6 },
        pt:{xs:10, sm:12},
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          fontWeight={700}
          fontFamily="Poppins"
          gutterBottom
        >
          Projects
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary} mb={4}>
          Here are some of the projects I've worked on. Each one reflects my passion for solving problems with code.
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent={'center'}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index} >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
            <Card
  sx={{
    borderRadius: 3,
    boxShadow: 4,
    backgroundColor: theme.palette.background.paper,
    display: 'block',
    maxWidth: 900,
    mx: 'auto',
    overflow: 'hidden',
  }}
>
  {/* Browser Bar */}
  <Box
    sx={{
      px: 2,
      py: 1.5,
      bgcolor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#e0e0e0',
      display: 'flex',
      alignItems: 'center',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    }}
  >
    <IconButton size="small" sx={{ p: 0.5 }}>
      <FiberManualRecord sx={{ color: '#ff5f57', fontSize: 12 }} />
    </IconButton>
    <IconButton size="small" sx={{ p: 0.5 }}>
      <FiberManualRecord sx={{ color: '#ffbd2e', fontSize: 12 }} />
    </IconButton>
    <IconButton size="small" sx={{ p: 0.5 }}>
      <FiberManualRecord sx={{ color: '#28c840', fontSize: 12 }} />
    </IconButton>
    <Box
      sx={{
        ml: 2,
        bgcolor: theme.palette.background.default,
        borderRadius: 1,
        px: 1.5,
        py: 0.5,
        fontSize: 12,
        fontFamily: 'monospace',
        flexGrow: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }}
    >
      {project.link}
    </Box>
  </Box>

  {/* Project Screenshot */}
  <CardMedia
    component="img"
    image={project.image}
    alt={project.title}
    sx={{
      width: '100%',
      aspectRatio: '16/9',
      objectFit: 'cover',
    }}
  />

  {/* Text Content */}
  <CardContent>
    <Typography variant="h6" fontWeight={600} gutterBottom>
      {project.title}
    </Typography>
    <Typography variant="body2" color={theme.palette.text.secondary}>
      {project.description}
    </Typography>
  </CardContent>

  <CardActions sx={{ px: 2, pb: 2 }}>
     <Button
                component='a'
                href={project.link}
                variant="outlined"
                size={isMobile ? 'small' : 'medium'}
                sx={{
                  textTransform: 'none',
                  fontWeight: 500,
                  borderRadius: 2,
                }}
              >
             
      Live Demo
    </Button>
    {/* <Button
      size="small"
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </Button> */}
  </CardActions>
</Card>

            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
