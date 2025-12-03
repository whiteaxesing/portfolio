'use client';
import { useState, useEffect } from 'react';
import { Container, Typography, Box, Chip, CircularProgress } from '@mui/material';
import { AccessTime as TimeIcon, CalendarToday as DateIcon } from '@mui/icons-material';
import { useParams } from 'next/navigation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { supabase, type BlogPost } from '@/lib/supabase';
import CTASection from '@/components/sections/CTASection';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [heroRef, heroVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.3);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        setPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!post) {
    return (
      <Box sx={{ py: 12, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
            Post Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </Typography>
        </Container>
      </Box>
    );
  }

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
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                flexWrap: 'wrap',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                />
              ))}
            </Box>
          )}

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
              fontWeight: 700,
              textAlign: 'center',
              mb: 3,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            {post.title}
          </Typography>

          {/* Meta Info */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              opacity: 0.9,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <DateIcon sx={{ fontSize: '1rem' }} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </Typography>
            </Box>
            {post.read_time && (
              <>
                <Typography variant="body2">•</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <TimeIcon sx={{ fontSize: '1rem' }} />
                  <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                    {post.read_time} min read
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Box
        ref={contentRef}
        sx={{
          py: { xs: 6, md: 8 },
          background: '#FEFEFE',
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              '& p': {
                fontSize: { xs: '1.05rem', md: '1.125rem' },
                lineHeight: 1.8,
                color: 'text.secondary',
                mb: 3,
              },
              '& h2': {
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: 'text.primary',
                mt: 6,
                mb: 3,
              },
              '& h3': {
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 600,
                color: 'text.primary',
                mt: 4,
                mb: 2,
              },
              '& ul, & ol': {
                pl: 3,
                mb: 3,
              },
              '& li': {
                fontSize: { xs: '1.05rem', md: '1.125rem' },
                lineHeight: 1.8,
                color: 'text.secondary',
                mb: 1,
              },
              '& code': {
                background: 'rgba(16, 107, 143, 0.08)',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '0.9em',
                fontFamily: 'monospace',
              },
              '& pre': {
                background: '#1e1e1e',
                color: '#d4d4d4',
                padding: 3,
                borderRadius: 2,
                overflow: 'auto',
                mb: 3,
              },
              '& blockquote': {
                borderLeft: '4px solid #106B8F',
                pl: 3,
                py: 1,
                my: 3,
                fontStyle: 'italic',
                color: 'text.secondary',
              },
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Container>
      </Box>

      <CTASection />
    </Box>
  );
}
