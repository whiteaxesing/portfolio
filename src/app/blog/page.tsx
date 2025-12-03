'use client';
import { useState, useEffect } from 'react';
import { Container, Typography, Box, Card, Chip, CircularProgress } from '@mui/material';
import { AccessTime as TimeIcon, CalendarToday as DateIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { supabase, type BlogPost } from '@/lib/supabase';
import CTASection from '@/components/sections/CTASection';

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <Box
      ref={ref}
      component={Link}
      href={`/blog/${post.slug}`}
      sx={{
        textDecoration: 'none',
        display: 'block',
        mb: { xs: 4, md: 6 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <Card
        sx={{
          p: { xs: 4, md: 5 },
          borderRadius: 4,
          background: '#FEFEFE',
          border: '1px solid #f0f0f0',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '&:hover': {
            boxShadow: '0 15px 50px rgba(16, 107, 143, 0.15)',
            transform: 'translateY(-8px)',
            borderColor: 'rgba(16, 107, 143, 0.3)',
          },
        }}
      >
        {/* Date and Read Time */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <DateIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              {new Date(post.published_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </Typography>
          </Box>
          {post.read_time && (
            <>
              <Typography variant="caption" color="text.secondary">
                •
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <TimeIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                  {post.read_time} min read
                </Typography>
              </Box>
            </>
          )}
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: { xs: '1.75rem', md: '2rem' },
            color: 'text.primary',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          {post.title}
        </Typography>

        {/* Excerpt */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.7,
            color: 'text.secondary',
            mb: 3,
          }}
        >
          {post.excerpt}
        </Typography>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {post.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  background: 'rgba(16, 107, 143, 0.08)',
                  color: '#106B8F',
                  border: '1px solid rgba(16, 107, 143, 0.2)',
                }}
              />
            ))}
          </Box>
        )}
      </Card>
    </Box>
  );
}

export default function BlogPage() {
  const [heroRef, heroVisible] = useScrollAnimation(0.2);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('published_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

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
            Blog
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
            Thoughts on software, architecture, and building systems that last.
          </Typography>
        </Container>
      </Box>

      {/* Blog Posts Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: '#FEFEFE', minHeight: '60vh' }}>
        <Container maxWidth="md">
          {loading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '400px',
              }}
            >
              <CircularProgress />
            </Box>
          ) : posts.length > 0 ? (
            posts.map((post, index) => <BlogCard key={post.id} post={post} index={index} />)
          ) : (
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                Coming Soon
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                I&apos;m working on sharing insights about software architecture, database
                engineering, and lessons learned building systems at scale. Check back soon.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      <CTASection />
    </Box>
  );
}
