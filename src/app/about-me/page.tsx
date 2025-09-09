'use client';
import { Container, Typography, Box, Button } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const timelineEvents = [
  {
    year: '2024',
    title: 'Transformation',
    content:
      "Flush Crypto Casino. Migrated entire backend from Node.js to Rust. Queries from 30+ seconds to milliseconds. This wasn't just optimization. It was transformation.",
  },
  {
    year: '2022',
    title: 'Growth',
    content:
      'The Home Depot Canada. Beyond Java and Spring Boot, I discovered software architecture — the art of shaping systems that last.',
  },
  {
    year: '2021',
    title: 'Discovery',
    content:
      'Joined Mismo as an intern. Learned that building software means communicating clearly, collaborating at all levels, and designing with purpose.',
  },
  {
    year: '2020',
    title: 'First Steps',
    content:
      'Freelance projects brought ideas to life. Small steps preparing for something bigger.',
  },
  {
    year: '2018',
    title: 'The Beginning',
    content:
      'Started Computer Engineering at Costa Rica Institute of Technology. A foundation was laid.',
  },
];

function TimelineItem({ event, index }: { event: (typeof timelineEvents)[0]; index: number }) {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: { xs: 3, md: 6 },
        mb: { xs: 6, md: 8 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transitionDelay: `${index * 0.2}s`,
      }}
    >
      <Box
        sx={{
          minWidth: { xs: '60px', md: '80px' },
          textAlign: 'right',
          pt: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: '#106B8F',
            fontSize: { xs: '1rem', md: '1.25rem' },
            letterSpacing: '0.05em',
          }}
        >
          {event.year}
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: '-20px',
            top: '12px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #106B8F, #8EC005)',
            boxShadow: '0 0 0 4px rgba(16, 107, 143, 0.2)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '-16px',
            top: '20px',
            width: '1px',
            height: '100px',
            background: 'linear-gradient(to bottom, rgba(16, 107, 143, 0.3), transparent)',
            display: index === timelineEvents.length - 1 ? 'none' : 'block',
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            mb: 1,
            fontSize: { xs: '1.25rem', md: '1.5rem' },
          }}
        >
          {event.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.7,
            fontSize: { xs: '1rem', md: '1.1rem' },
            maxWidth: '600px',
          }}
        >
          {event.content}
        </Typography>
      </Box>
    </Box>
  );
}

export default function AboutSection() {
  const [heroRef, heroVisible] = useScrollAnimation(0.2);
  const [musicRef, musicVisible] = useScrollAnimation(0.3);
  const [futureRef, futureVisible] = useScrollAnimation(0.3);

  return (
    <Box>
      {/* Hero Section - Dark background like your HeroSection */}
      <Box
        ref={heroRef}
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(45deg, #106B8F, #002336)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'translateY(0)' : 'translateY(60px)',
          transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Background Pattern like your HeroSection */}
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
              textAlign: 'center',
              mb: 3,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.4,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              opacity: 0.95,
            }}
          >
            Every journey has a beginning. Mine started with a simple belief: technology should work
            beautifully.
          </Typography>
        </Container>
      </Box>

      {/* Timeline Section - White background like your other sections */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#FEFEFE' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '900px', mx: 'auto', pl: { xs: 2, md: 4 } }}>
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.year} event={event} index={index} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Music & Philosophy Section - White background */}
      <Box
        ref={musicRef}
        sx={{
          py: { xs: 8, md: 12 },
          background: '#FEFEFE',
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              opacity: musicVisible ? 1 : 0,
              transform: musicVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                mb: 4,
                textAlign: 'center',
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: 'text.primary',
              }}
            >
              Beyond Technology
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.8,
                color: 'text.secondary',
                textAlign: 'center',
                mb: 4,
              }}
            >
              Music has been with me since childhood — from &apos;80s records on my
              father&apos;s turntable to my sister&apos;s Discman. Now I play drums, piano,
              bass, guitar, and sing. Music taught me rhythm, harmony, and flow — the same qualities
              I bring to building software.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.8,
                color: 'text.secondary',
                textAlign: 'center',
              }}
            >
              I believe in balance. In code, in music, in life. That&apos;s why I&apos;m
              passionate about finance, fitness, and nature — areas that keep me grounded, focused,
              and energized.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Future Section - White background */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#FEFEFE' }}>
        <Container maxWidth="md">
          <Box
            ref={futureRef}
            sx={{
              textAlign: 'center',
              opacity: futureVisible ? 1 : 0,
              transform: futureVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                mb: 4,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              What&apos;s Next
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.8,
                color: 'text.secondary',
                mb: 6,
              }}
            >
              Advancing in database administration with SQL focus, expanding into NoSQL by late
              2025, and beginning my Master&apos;s in Software Architecture in 2026 — a discipline
              I first embraced at Mismo and THD, and now live every day.
            </Typography>

            <Box
              sx={{
                p: 4,
                borderRadius: 3,
                background:
                  'linear-gradient(135deg, rgba(16, 107, 143, 0.05), rgba(142, 192, 5, 0.05))',
                border: '1px solid rgba(16, 107, 143, 0.1)',
                mb: 6,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: '#106B8F',
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                &quot;Build with purpose. Play with passion. Learn endlessly.&quot;
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                }}
              >
                From small beginnings to global platforms.
                <br />
                From backend migrations to full-stack ownership.
                <br />
                From rhythm in music to structure in code.
              </Typography>
            </Box>

            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: 'linear-gradient(45deg, #106B8F, #8EC005)',
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                textTransform: 'none',
                letterSpacing: '0.02em',
                '&:hover': {
                  background: 'linear-gradient(45deg, #8EC005, #106B8F)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 20px 40px rgba(16, 107, 143, 0.2)',
                },
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              Innovation Starts With a Conversation
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
