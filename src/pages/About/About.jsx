// src/pages/About/About.jsx
import React from 'react';
import {
  Box, Container, Grid, Typography, Card, CardContent,
  Avatar, Chip, Stack, Divider, LinearProgress,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { stats } from '../../data/mockData';

const values = [
  { icon: FavoriteIcon, color: '#E91E8C', title: 'Compassion', desc: 'Every patient is treated with dignity and empathy, always putting human connection first.' },
  { icon: VerifiedIcon, color: '#0A6EBD', title: 'Excellence', desc: 'We uphold the highest standards of medical practice and patient safety.' },
  { icon: GroupsIcon, color: '#00C9A7', title: 'Collaboration', desc: 'Our multidisciplinary teams work together to deliver holistic care.' },
  { icon: EmojiEventsIcon, color: '#F9A825', title: 'Innovation', desc: 'Continuously adopting cutting-edge technology to improve outcomes.' },
];

const milestones = [
  { year: '1999', event: 'LifeCare Hospital founded with 50-bed facility' },
  { year: '2005', event: 'Expanded to 200 beds and opened Cardiac ICU' },
  { year: '2010', event: 'Received first NABH Accreditation' },
  { year: '2015', event: 'Launched robotic surgery program' },
  { year: '2020', event: 'Digital health transformation — telemedicine & AI diagnostics' },
  { year: '2024', event: 'Ranked #3 Best Hospital in Karnataka' },
];

const accreditations = ['NABH Accredited', 'ISO 9001:2015', 'JCI Standards', 'NABL Certified Lab'];

export default function About() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{
        background: 'linear-gradient(135deg, #054580 0%, #0A6EBD 100%)',
        color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center',
      }}>
        <Container maxWidth="md">
          <Chip label="About Us" sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', mb: 3 }} />
          <Typography variant="h2" fontWeight={800} mb={2}>
            25 Years of Healing, Hope & Healthcare
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.85, fontSize: '1.1rem', maxWidth: 580, mx: 'auto' }}>
            LifeCare Hospital has been Bengaluru's most trusted multi-specialty healthcare institution,
            driven by a singular mission: to make world-class care accessible to all.
          </Typography>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ bgcolor: 'primary.main', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {stats.map((s) => (
              <Grid item xs={6} md={3} key={s.label} textAlign="center">
                <Typography variant="h3" fontWeight={800} color="white">{s.value}</Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.75)">{s.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&h=420&fit=crop"
              alt="Hospital team"
              sx={{ width: '100%', borderRadius: 4, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Chip label="Our Purpose" color="primary" variant="outlined" sx={{ mb: 2 }} />
            <Typography variant="h3" fontWeight={700} mb={2}>Mission & Vision</Typography>
            <Box mb={3}>
              <Typography fontWeight={700} color="primary.main" mb={0.5}>Our Mission</Typography>
              <Typography color="text.secondary" lineHeight={1.8}>
                To provide accessible, high-quality, patient-centered healthcare that improves lives and
                strengthens communities — with integrity, compassion, and clinical excellence.
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography fontWeight={700} color="secondary.main" mb={0.5}>Our Vision</Typography>
              <Typography color="text.secondary" lineHeight={1.8}>
                To be South India's most trusted and innovative healthcare partner, setting the
                gold standard for medical outcomes, patient experience, and health education.
              </Typography>
            </Box>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {accreditations.map((a) => (
                <Chip key={a} label={a} icon={<VerifiedIcon />} color="success" variant="outlined" size="small" />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Core Values */}
      <Box sx={{ bgcolor: 'background.default', py: 10 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Chip label="What Drives Us" color="secondary" variant="outlined" sx={{ mb: 2 }} />
            <Typography variant="h3" fontWeight={700}>Our Core Values</Typography>
          </Box>
          <Grid container spacing={3}>
            {values.map((v) => (
              <Grid item xs={12} sm={6} md={3} key={v.title}>
                <Card sx={{ textAlign: 'center', p: 1, height: '100%' }}>
                  <CardContent>
                    <Box sx={{
                      width: 64, height: 64, borderRadius: '18px',
                      bgcolor: v.color + '18', mx: 'auto', mb: 2,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <v.icon sx={{ color: v.color, fontSize: 30 }} />
                    </Box>
                    <Typography fontWeight={700} mb={1}>{v.title}</Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{v.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Box textAlign="center" mb={6}>
          <Chip label="Our Journey" color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h3" fontWeight={700}>Milestones & History</Typography>
        </Box>
        <Stack spacing={0}>
          {milestones.map((m, i) => (
            <Box key={i} display="flex" gap={3} alignItems="flex-start">
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 80 }}>
                <Box sx={{
                  width: 48, height: 48, borderRadius: '50%',
                  bgcolor: 'primary.main', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '0.75rem', flexShrink: 0,
                }}>
                  {m.year}
                </Box>
                {i < milestones.length - 1 && (
                  <Box sx={{ width: 2, flex: 1, bgcolor: 'grey.200', my: 1, minHeight: 32 }} />
                )}
              </Box>
              <Box pb={4}>
                <Typography variant="body1" fontWeight={600} mt={1.2}>{m.event}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
