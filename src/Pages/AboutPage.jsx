import {
  Box,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { School, Computer, Terminal } from "@mui/icons-material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="about"
      sx={{
        px: { xs: 2, md: 6 },
          pt:{xs:10, sm:12},
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
          variant={isMobile ? "h4" : "h3"}
          fontWeight={700}
          fontFamily="Poppins"
          gutterBottom
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          maxWidth={800}
          mb={3}
        >
          I'm <b>Ayush Soni</b>, a passionate <b>Full-Stack Developer</b> and
          Computer Science engineering student at Mahakal Institute of
          Technology. With a deep interest in backend architecture and problem
          solving, I specialize in the <b>MERN stack</b> and enjoy building
          scalable web applications that create real-world impact. My dedication
          to continuous learning, clean code, and user-centric design drives me
          to craft meaningful digital experiences. I'm also an enthusiastic
          coder on platforms like <b>LeetCode</b>, with a commitment to
          improving my DSA and system design knowledge.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Experience
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={<b>Software Trainee Intern</b>}
              secondary={
                <>
                  Backbencher Technologies Pvt Ltd (45 Days)
                  <br />
                  Indore, Madhya Pradesh
                  <Box mt={1}>
                    <a
                      href="https://drive.google.com/file/d/1vlbKlg4CqueOU1MPlkdR1JOMzDFftn6U/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Chip
                        label="View Offer Letter"
                        variant="outlined"
                        color="primary"
                        sx={{ fontWeight: 500, cursor: "pointer" }}
                      />
                    </a>
                  </Box>
                </>
              }
            />
          </ListItem>
        </List>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
          Education
        </Typography>

   <Timeline
  position={isMobile ? 'right' : 'alternate'}
  sx={{
    pl: isMobile ? 0 : 2,
    [`& .MuiTimelineItem-root:before`]: {
      display: isMobile ? 'none' : 'block',
    },
    [`& .MuiTimelineContent-root`]: {
      ml: isMobile ? 2 : 0, // adds space between line and card on mobile
    },
    [`& .MuiTimelineSeparator-root`]: {
      minHeight: 60,
    },
  }}
>

          <TimelineItem alignItems="flex-start">
            <TimelineSeparator>
              <TimelineDot color="primary">
                <Computer fontSize="small" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card elevation={2} sx={{ borderRadius: 2, p: 1 }}>
                <CardContent>
                  <Typography fontWeight={600}>
                    B.Tech in Computer Science
                  </Typography>
                  <Typography
                    variant="caption"
                    color={theme.palette.text.secondary}
                  >
                    Mahakal Institute of Technology (2022–2026)
                    <br />
                    Affiliated to RGPV University
                    <br />
                    Ujjain Madhya Pradesh
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem alignItems="flex-start">
            <TimelineSeparator>
              <TimelineDot color="primary">
                <School fontSize="small" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card elevation={2} sx={{ borderRadius: 2, p: 1 }}>
                <CardContent>
                  <Typography fontWeight={600}>Higher Secondary</Typography>
                  <Typography
                    variant="caption"
                    color={theme.palette.text.secondary}
                  >
                    Padmaja Higher Secondary School (2021–2022)
                    <br />
                    Dewas Madhya Pradesh
                    <br />
                    MP Board
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>

        <TimelineItem alignItems="flex-start">
            <TimelineSeparator>
              <TimelineDot color="primary">
                <School fontSize="small" />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Card elevation={2} sx={{ borderRadius: 2, p: 1 }}>
                <CardContent>
                  <Typography fontWeight={600}>Secondary</Typography>
                  <Typography
                    variant="caption"
                    color={theme.palette.text.secondary}
                  >
                    Morning Star School (2019–2020)
                    <br />
                    Dewas Madhya Pradesh
                    <br />
                    MP Board
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
          Interests
        </Typography>
        <Typography>🏋️‍♂️ Gym • 👨‍💻 Coding • 🎧 Music • 🎬 Movies</Typography>
      </motion.div>
    </Box>
  );
};

export default AboutPage;
