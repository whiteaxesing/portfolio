'use client';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/francisco-gonzalez-madrigal/',
    icon: <LinkedInIcon />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/whiteaxesing',
    icon: <GitHubIcon />,
  },
  {
    name: 'Email',
    url: 'mailto:franciscogm982@gmail.com',
    icon: <EmailIcon />,
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/50686787558',
    icon: <WhatsAppIcon />,
  },
];

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-me' },
  { label: 'Resume', href: '/resume' },
  // { label: 'Blog', href: '/blog' }, // Temporarily disabled
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(45deg, #106B8F, #002336)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Brand Section */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: '400px' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '1.75rem' },
              }}
            >
              Francisco González
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.9,
                lineHeight: 1.7,
                fontSize: '1rem',
              }}
            >
              Full-Stack Software Engineer specializing in backend systems, database engineering,
              and software architecture.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: '1.1rem',
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.8,
                    fontSize: '0.95rem',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Social Links */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: '1.1rem',
              }}
            >
              Connect
            </Typography>
            <Box
              sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 3 }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              fontSize: '0.875rem',
            }}
          >
            © 2026 Francisco González. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
