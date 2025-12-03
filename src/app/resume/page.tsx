'use client';
import { Container, Typography, Box, Chip, Divider } from '@mui/material';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { experiences, education, skills } from '@/data/experienceData';
import CTASection from '@/components/sections/CTASection';

function ExperienceItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <Box
      ref={ref}
      sx={{
        mb: { xs: 4, md: 5 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          alignItems: 'flex-start',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {experience.logo && (
          <Box
            sx={{
              width: 60,
              height: 60,
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <Image
              src={experience.logo}
              alt={experience.company}
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        )}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 0.5,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              color: 'text.primary',
            }}
          >
            {experience.position}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: '#106B8F',
              mb: 0.5,
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            {experience.company}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {experience.period} • {experience.location}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: 'text.secondary',
              mb: 2,
            }}
          >
            {experience.description}
          </Typography>

          {/* Responsibilities */}
          {experience.responsibilities && experience.responsibilities.length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 1,
                  fontSize: '0.875rem',
                }}
              >
                Key Responsibilities:
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                {experience.responsibilities.map((resp, idx) => (
                  <Box
                    component="li"
                    key={idx}
                    sx={{
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: 'text.secondary',
                      mb: 0.5,
                    }}
                  >
                    {resp}
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 1,
                  fontSize: '0.875rem',
                }}
              >
                Key Achievements:
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                {experience.achievements.map((achievement, idx) => (
                  <Box
                    component="li"
                    key={idx}
                    sx={{
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: 'text.secondary',
                      mb: 0.5,
                    }}
                  >
                    {achievement}
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* Technologies */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
            {experience.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  fontSize: '0.75rem',
                  background: 'rgba(16, 107, 143, 0.08)',
                  color: '#106B8F',
                  border: '1px solid rgba(16, 107, 143, 0.2)',
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function WorkPage() {
  const [heroRef, heroVisible] = useScrollAnimation(0.2);
  const [experienceRef, experienceVisible] = useScrollAnimation(0.3);
  const [eduRef, eduVisible] = useScrollAnimation(0.3);
  const [skillsRef, skillsVisible] = useScrollAnimation(0.3);

  return (
    <Box>
      {/* Hero Section */}
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
            Resume
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
            Experience. Education. Skills.
          </Typography>
        </Container>
      </Box>

      {/* Experience Timeline */}
      <Box
        ref={experienceRef}
        sx={{
          py: { xs: 6, md: 8 },
          background: '#FEFEFE',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: 'text.primary',
              opacity: experienceVisible ? 1 : 0,
              transform: experienceVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            Experience
          </Typography>
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} index={index} />
          ))}
        </Container>
      </Box>

      <Divider sx={{ borderColor: '#f0f0f0' }} />

      {/* Education Section */}
      <Box
        ref={eduRef}
        sx={{
          py: { xs: 6, md: 8 },
          background: '#FEFEFE',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: 'text.primary',
              opacity: eduVisible ? 1 : 0,
              transform: eduVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            Education
          </Typography>
          {education.map((edu, index) => (
            <Box
              key={index}
              sx={{
                mb: 4,
                opacity: eduVisible ? 1 : 0,
                transform: eduVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 3,
                  alignItems: 'flex-start',
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                {edu.logo && (
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                )}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      color: 'text.primary',
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      color: '#106B8F',
                      mb: 0.5,
                      fontSize: { xs: '1rem', md: '1.125rem' },
                    }}
                  >
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {edu.period}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      color: 'text.secondary',
                    }}
                  >
                    {edu.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      <Divider sx={{ borderColor: '#f0f0f0' }} />

      {/* Skills Section */}
      <Box
        ref={skillsRef}
        sx={{
          py: { xs: 6, md: 8 },
          background: '#FEFEFE',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: 'text.primary',
              opacity: skillsVisible ? 1 : 0,
              transform: skillsVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            Skills
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {Object.entries(skills).map(([category, items], index) => (
              <Box
                key={category}
                sx={{
                  opacity: skillsVisible ? 1 : 0,
                  transform: skillsVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: '#106B8F',
                    fontSize: '1.1rem',
                  }}
                >
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {items.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        fontSize: '0.875rem',
                        background: 'rgba(16, 107, 143, 0.08)',
                        color: 'text.primary',
                        border: '1px solid rgba(16, 107, 143, 0.2)',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <CTASection />
    </Box>
  );
}
