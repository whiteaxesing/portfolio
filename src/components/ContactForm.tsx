'use client';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Alert,
  Divider,
} from '@mui/material';
import {
  Send as SendIcon,
  CalendarMonth as CalendarIcon,
  Message as MessageIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import CalendlyWidget from './CalendlyWidget';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [heroRef, heroVisible] = useScrollAnimation(0.2);
  const [optionsRef, optionsVisible] = useScrollAnimation(0.1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'Contact Form Submission',
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          background: 'linear-gradient(45deg, #106B8F, #002336)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'translateY(0)' : 'translateY(60px)',
          transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 3,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            Let&apos;s Work Together
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.4,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              opacity: 0.95,
            }}
          >
            Ready to bring your ideas to life? Choose how you&apos;d like to connect.
          </Typography>
        </Container>
      </Box>

      {/* Contact Options */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {/* Introduction */}
        <Box
          ref={optionsRef}
          sx={{
            textAlign: 'center',
            mb: 8,
            opacity: optionsVisible ? 1 : 0,
            transform: optionsVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Two Ways to Connect
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            Send a message for detailed project discussions, or schedule a call for immediate
            conversation.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 6,
            alignItems: 'start',
          }}
        >
          {/* Message Option */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              background: '#FEFEFE',
              border: '1px solid rgba(16, 107, 143, 0.1)',
              boxShadow: '0 4px 25px rgba(16, 107, 143, 0.1)',
              opacity: optionsVisible ? 1 : 0,
              transform: optionsVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: '0.2s',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <MessageIcon sx={{ fontSize: 32, color: '#106B8F', mr: 2 }} />
              <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 600 }}>
                Send a Message
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.6,
              }}
            >
              Perfect for project details, technical questions, or when you prefer writing.
            </Typography>

            {status === 'success' && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Message sent successfully! I&apos;ll get back to you soon.
              </Alert>
            )}

            {status === 'error' && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {errorMessage}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 3,
                  mb: 3,
                }}
              >
                <TextField
                  name="name"
                  label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                />
              </Box>

              <TextField
                name="message"
                label="Tell me about your project"
                value={formData.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={status === 'loading'}
                endIcon={status === 'loading' ? null : <SendIcon />}
                sx={{
                  background: 'linear-gradient(45deg, #106B8F, #8EC005)',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #8EC005, #106B8F)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px rgba(16, 107, 143, 0.2)',
                  },
                  '&:disabled': {
                    background: 'rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Paper>

          {/* Divider for mobile */}
          <Box sx={{ display: { lg: 'none' }, mx: 4 }}>
            <Divider sx={{ position: 'relative' }}>
              <Typography
                variant="body2"
                sx={{
                  px: 2,
                  py: 1,
                  background: '#FEFEFE',
                  color: 'text.secondary',
                  borderRadius: 2,
                }}
              >
                OR
              </Typography>
            </Divider>
          </Box>

          {/* Schedule Option */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              background: '#FEFEFE',
              border: '1px solid rgba(16, 107, 143, 0.1)',
              boxShadow: '0 4px 25px rgba(16, 107, 143, 0.1)',
              overflow: 'hidden',
              opacity: optionsVisible ? 1 : 0,
              transform: optionsVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: '0.4s',
            }}
          >
            <Box sx={{ p: 4, pb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <CalendarIcon sx={{ fontSize: 32, color: '#106B8F', mr: 2 }} />
                <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Schedule a Call
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                Let&apos;s talk directly. Book a time that works for both of us.
              </Typography>
            </Box>

            <CalendlyWidget
              url="https://calendly.com/franciscogonzalezmadrigal/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
              height="550px"
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
