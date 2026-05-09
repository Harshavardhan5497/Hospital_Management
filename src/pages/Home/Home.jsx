// src/pages/Home/Home.jsx
import React from 'react';
import {
  Box, Container, Grid, Typography, Button, Card, CardContent,
  Avatar, Rating, Chip, Stack, Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BiotechIcon from '@mui/icons-material/Biotech';

import { doctors, services, testimonials, stats } from '../../data/mockData';

const iconMap = {
  LocalHospital: LocalHospitalIcon,
  Favorite: FavoriteIcon,
  Psychology: PsychologyIcon,
  ChildCare: ChildCareIcon,
  AccessibilityNew: AccessibilityNewIcon,
  Biotech: BiotechIcon,
};

export default function Home() {
  return (
    <Box>
      {/* ── HERO ── */}
      <Box sx={{
        background: 'linear-gradient(135deg, #0A6EBD 0%, #054580 50%, #032D54 100%)',
        color: 'white',
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background circles */}
        {[400, 600, 250].map((size, i) => (
          <Box key={i} sx={{
            position: 'absolute',
            width: size, height: size,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.07)',
            top: i === 2 ? 'auto' : '-10%',
            bottom: i === 2 ? '-15%' : 'auto',
            right: i === 0 ? '-8%' : i === 1 ? '-15%' : '5%',
          }} />
        ))}

        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip label="🏥 Trusted Since 1999" sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', mb: 3, fontWeight: 600 }} />
              <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3.5rem' }, lineHeight: 1.15, mb: 3 }}>
                Your Health,{' '}
                <Box component="span" sx={{ color: '#00C9A7' }}>Our Priority</Box>
                <br />Every Day
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.85, fontSize: '1.1rem', lineHeight: 1.8, mb: 4, maxWidth: 480 }}>
                Experience world-class healthcare with 120+ specialist doctors, cutting-edge technology,
                and compassionate care — right here in Bengaluru.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={5}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/appointments"
                  sx={{ bgcolor: '#00C9A7', '&:hover': { bgcolor: '#00A88A' }, px: 4, py: 1.5 }}
                  startIcon={<CalendarMonthIcon />}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/doctors"
                  sx={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', px: 4, py: 1.5, '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.08)' } }}
                >
                  Meet Our Doctors
                </Button>
              </Stack>

              {/* Mini Stats */}
              <Grid container spacing={3}>
                {stats.map((s) => (
                  <Grid item xs={6} key={s.label}>
                    <Box>
                      <Typography variant="h4" fontWeight={800} color="#00C9A7">{s.value}</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.75 }}>{s.label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Hero Image Card */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1551601651-bc60f254d532?w=600&h=500&fit=crop"
                  alt="Hospital"
                  sx={{ width: '100%', maxWidth: 480, borderRadius: 5, boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }}
                />
                {/* Floating card */}
                <Paper sx={{
                  position: 'absolute', bottom: -20, left: { xs: 0, md: -30 },
                  p: 2, borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 200,
                }}>
                  <Avatar sx={{ bgcolor: 'success.main', width: 44, height: 44 }}>
                    <CheckCircleIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="body2" fontWeight={700} color="text.primary">NABH Accredited</Typography>
                    <Typography variant="caption" color="text.secondary">Certified Excellence</Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── SERVICES STRIP ── */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box textAlign="center" mb={6}>
          <Chip label="What We Offer" color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h2" fontSize={{ xs: '2rem', md: '2.5rem' }} mb={1.5}>
            Our Medical Services
          </Typography>
          <Typography color="text.secondary" maxWidth={520} mx="auto">
            Comprehensive care across 40+ specialties — because your health deserves nothing less.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((s) => {
            const Icon = iconMap[s.icon] || LocalHospitalIcon;
            return (
              <Grid item xs={12} sm={6} md={4} key={s.id}>
                <Card sx={{ p: 1, height: '100%' }}>
                  <CardContent>
                    <Box
                      sx={{
                        width: 56, height: 56, borderRadius: '14px',
                        bgcolor: s.color + '18',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2,
                      }}
                    >
                      <Icon sx={{ color: s.color, fontSize: 28 }} />
                    </Box>
                    <Typography variant="h6" fontWeight={700} mb={1}>{s.title}</Typography>
                    <Typography variant="body2" color="text.secondary" mb={2} lineHeight={1.7}>
                      {s.description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={0.8}>
                      {s.features.map((f) => (
                        <Chip key={f} label={f} size="small" sx={{ bgcolor: s.color + '12', color: s.color, fontWeight: 500, fontSize: '0.7rem' }} />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box textAlign="center" mt={5}>
          <Button variant="outlined" size="large" component={Link} to="/services" endIcon={<ArrowForwardIcon />}>
            Explore All Services
          </Button>
        </Box>
      </Container>

      {/* ── DOCTORS STRIP ── */}
      <Box sx={{ bgcolor: 'background.default', py: 10 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Chip label="Expert Team" color="secondary" variant="outlined" sx={{ mb: 2 }} />
            <Typography variant="h2" fontSize={{ xs: '2rem', md: '2.5rem' }} mb={1.5}>
              Meet Our Top Doctors
            </Typography>
            <Typography color="text.secondary" maxWidth={500} mx="auto">
              120+ specialists committed to your well-being.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {doctors.slice(0, 3).map((doc) => (
              <Grid item xs={12} sm={6} md={4} key={doc.id}>
                <Card>
                  <CardContent sx={{ textAlign: 'center', pt: 4 }}>
                    <Box position="relative" display="inline-block" mb={2}>
                      <Avatar src={doc.image} sx={{ width: 96, height: 96, mx: 'auto', border: '4px solid', borderColor: 'primary.light' }} />
                      <Box sx={{
                        position: 'absolute', bottom: 4, right: -4,
                        width: 18, height: 18, borderRadius: '50%',
                        bgcolor: doc.available ? 'success.main' : 'warning.main',
                        border: '2px solid white',
                      }} />
                    </Box>
                    <Typography fontWeight={700} fontSize={16}>{doc.name}</Typography>
                    <Typography variant="body2" color="primary.main" fontWeight={600} mb={1}>{doc.specialty}</Typography>
                    <Typography variant="caption" color="text.secondary">{doc.experience} experience</Typography>
                    <Box display="flex" justifyContent="center" alignItems="center" gap={0.5} mt={1} mb={2}>
                      <Rating value={doc.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="caption" color="text.secondary">({doc.reviews})</Typography>
                    </Box>
                    <Button variant="outlined" size="small" component={Link} to="/appointments" fullWidth>
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={5}>
            <Button variant="contained" size="large" component={Link} to="/doctors" endIcon={<ArrowForwardIcon />}>
              View All Doctors
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── TESTIMONIALS ── */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box textAlign="center" mb={6}>
          <Chip label="Patient Stories" color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h2" fontSize={{ xs: '2rem', md: '2.5rem' }} mb={1.5}>
            What Our Patients Say
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {testimonials.map((t) => (
            <Grid item xs={12} md={4} key={t.id}>
              <Card sx={{ p: 1, height: '100%' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 40, color: 'primary.main', lineHeight: 1, mb: 1 }}>"</Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8} mb={3}>
                    {t.text}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={t.image} />
                    <Box>
                      <Typography fontWeight={700} fontSize={14}>{t.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{t.role}</Typography>
                    </Box>
                    <Box ml="auto">
                      <Rating value={t.rating} size="small" readOnly />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── CTA BANNER ── */}
      <Box sx={{
        background: 'linear-gradient(135deg, #00C9A7, #0A6EBD)',
        py: 8, textAlign: 'center', color: 'white',
      }}>
        <Container maxWidth="sm">
          <Typography variant="h3" fontWeight={800} mb={2}>Need Medical Assistance?</Typography>
          <Typography mb={4} opacity={0.9}>Book an appointment with our specialists today — same day slots available.</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button variant="contained" size="large" component={Link} to="/appointments"
              sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}>
              Book Appointment
            </Button>
            <Button variant="outlined" size="large"
              sx={{ borderColor: 'rgba(255,255,255,0.6)', color: 'white', '&:hover': { borderColor: 'white' } }}>
              📞 Emergency: 108
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
