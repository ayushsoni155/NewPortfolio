import { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ThemeToggleButton from './ThemeToggleButton';

const greetings = [
  "👋 Hello",
  "🙏 नमस्ते",
  "👨‍💻 Welcome to My Portfolio",
];

export default function IntroAnimation({ onComplete }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [done, setDone] = useState(false);

  useEffect(() => {
    const currentMessage = greetings[messageIndex];

    if (charIndex < currentMessage.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(typingTimeout);
    } else {
      if (messageIndex < greetings.length - 1) {
        const nextMessageTimeout = setTimeout(() => {
          setCharIndex(0);
          setDisplayedText('');
          setMessageIndex((prev) => prev + 1);
        }, 1000);
        return () => clearTimeout(nextMessageTimeout);
      } else {
        const endTimeout = setTimeout(() => {
          setDone(true);
          onComplete();
        }, 1000);
        return () => clearTimeout(endTimeout);
      }
    }
  }, [charIndex, messageIndex, onComplete]);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'column',
        p: 2,
      }}
    >
      {/* Skip & Theme Toggle Buttons */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <ThemeToggleButton />
        <IconButton
          onClick={onComplete}
          color="inherit"
          sx={{
            fontSize: '0.875rem',
            border: '1px solid',
            borderRadius: 2,
            px: 2,
          }}
        >
          Skip
        </IconButton>
      </Stack>

      {/* Typing Effect Text */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'monospace',
          textAlign: 'center',
          maxWidth: '90%',
          fontSize: { xs: '1.5rem', sm: '2.5rem' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {displayedText}
        <Box
          component="span"
          sx={{
            width: '10px',
            height: '30px',
            ml: 1,
            backgroundColor: 'text.primary',
            animation: 'blink 1s steps(2, start) infinite',
          }}
        />
      </Typography>

      {/* Blinking Cursor Animation */}
      <style>
        {`
          @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </Box>
  );
}
