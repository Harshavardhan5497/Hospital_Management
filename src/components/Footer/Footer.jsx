// src/components/Footer/Footer.jsx
import React from 'react';
import {
  Box, Container, Grid, Typography, Link as MuiLink, Divider,
  IconButton, TextField, Button, Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Our Doctors', path: '/doctors' },
  { label: 'Book Appointment', path: '/appointments' },
  { label: 'Contact', path: '/contact' },
];

const services = [
  'Emergency Care', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Diagnostics',
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0D1B2A', color: 'grey.300', pt: 8, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={1.5} mb={2}>
              <Box sx={{
                width: 44, height: 44, borderRadius: '12px',
                background: 'linear-gradient(135deg, #0A6EBD, #00C9A7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <LocalHospitalIcon sx={{ color: 'white', fontSize: 22 }} />
              </Box>
              <Box>
                <Typography fontWeight={800} fontSize={20} color="white">LifeCare</Typography>
                <Typography variant="caption" color="grey.500">Hospital & Medical Center</Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="grey.400" lineHeight={1.8} mb={3}>
              Delivering compassionate, world-class healthcare to every patient since 1999.
              Your health is our mission.
            </Typography>
            <Stack direction="row" spacing={1}>
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                <IconButton key={i} size="small" sx={{
                  color: 'grey.400', border: '1px solid', borderColor: 'grey.700',
                  '&:hover': { borderColor: 'primary.main', color: 'primary.main', bgcolor: 'primary.main' + '15' },
                }}>
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography fontWeight={700} color="white" mb={2.5} fontSize={15}>Quick Links</Typography>
            <Stack spacing={1.2}>
              {quickLinks.map((l) => (
                <MuiLink
                  key={l.path}
                  component={Link}
                  to={l.path}
                  underline="none"
                  sx={{
                    color: 'grey.400', fontSize: '0.875rem',
                    '&:hover': { color: 'secondary.main', pl: 0.5, transition: 'all 0.2s' },
                    transition: 'all 0.2s',
                  }}
                >
                  {l.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={6} md={2}>
            <Typography fontWeight={700} color="white" mb={2.5} fontSize={15}>Services</Typography>
            <Stack spacing={1.2}>
              {services.map((s) => (
                <Typography key={s} variant="body2" color="grey.400" sx={{
                  cursor: 'pointer',
                  '&:hover': { color: 'secondary.main' }, transition: 'color 0.2s',
                }}>
                  {s}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Contact + Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography fontWeight={700} color="white" mb={2.5} fontSize={15}>Contact Us</Typography>
            <Stack spacing={1.5} mb={3}>
              {[
                { Icon: LocationOnIcon, text: '#12 Health Avenue, Koramangala, Bengaluru – 560001' },
                { Icon: PhoneIcon, text: '+91 80 4567 8900' },
                { Icon: EmailIcon, text: 'info@lifecarehospital.in' },
              ].map(({ Icon, text }, i) => (
                <Box key={i} display="flex" gap={1.5} alignItems="flex-start">
                  <Icon sx={{ color: 'secondary.main', fontSize: 18, mt: 0.3 }} />
                  <Typography variant="body2" color="grey.400">{text}</Typography>
                </Box>
              ))}
            </Stack>
            <Typography fontWeight={600} color="white" mb={1} fontSize={13}>Newsletter</Typography>
            <Box display="flex" gap={1}>
              <TextField
                size="small"
                placeholder="Your email"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255,255,255,0.06)',
                    color: 'white',
                    '& fieldset': { borderColor: 'grey.700' },
                    '&:hover fieldset': { borderColor: 'grey.500' },
                  },
                  '& input::placeholder': { color: 'grey.500' },
                }}
              />
              <Button variant="contained" color="secondary" size="small" sx={{ whiteSpace: 'nowrap', px: 2 }}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'grey.800' }} />
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" gap={1}>
          <Typography variant="caption" color="grey.600">
            © 2024 LifeCare Hospital. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
              <Typography key={t} variant="caption" color="grey.600" sx={{ cursor: 'pointer', '&:hover': { color: 'grey.400' } }}>
                {t}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
