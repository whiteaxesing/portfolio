'use client';
import { Container, Typography, Box, TextField, Button, Paper, Alert } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { useState } from 'react';
import CalendlyWidget from './CalendlyWidget';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          background: 'linear-gradient(45deg, #106B8F, #002336)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#8EC005',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              mb: 2,
              '@media (max-width: 480px)': { fontSize: '4.5rem' },
              '@media (min-width: 481px) and (max-width: 1200px)': { fontSize: '5rem' },
              '@media (min-width: 1201px)': { fontSize: '6rem' },
            }}
          >
            Let&lsquo;s Work Together
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              opacity: 0.95,
              '@media (max-width: 480px)': { fontSize: '1.5rem', px: 2 },
              '@media (min-width: 481px) and (max-width: 1200px)': { fontSize: '1.75rem' },
              '@media (min-width: 1201px)': { fontSize: '2rem' },
            }}
          >
            Have a project in mind? Let&lsquo;s discuss how I can help you achieve your goals.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.5fr 1fr' },
            gap: 6,
            alignItems: 'stretch',
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              background: '#FEFEFE',
              border: '1px solid rgba(16, 107, 143, 0.1)',
              boxShadow: '0 4px 25px rgba(16, 107, 143, 0.1)',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', mb: 3 }}>
              Send me a message
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
                label="Message"
                value={formData.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={8}
                variant="outlined"
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={status === 'loading'}
                endIcon={status === 'loading' ? null : <SendIcon />}
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: '50px' }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              background: '#FEFEFE',
              border: '1px solid rgba(16, 107, 143, 0.1)',
              boxShadow: '0 4px 25px rgba(16, 107, 143, 0.1)',
              overflow: 'hidden',
            }}
          >
            <CalendlyWidget
              url="https://calendly.com/franciscogonzalezmadrigal/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
              height="600px"
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
