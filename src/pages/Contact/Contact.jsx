// src/pages/Contact/Contact.jsx
import React, { useState } from 'react';
import {
  Box, Container, Grid, Typography, Card, CardContent,
  TextField, Button, Chip, Stack, Alert, MenuItem,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const contactDetails = [
  {
    Icon: LocationOnIcon, color: '#0A6EBD', label: 'Address',
    lines: ['#12 Health Avenue, Koramangala', 'Bengaluru – 560001, Karnataka'],
  },
  {
    Icon: PhoneIcon, color: '#00C9A7', label: 'Phone',
    lines: ['General: +91 80 4567 8900', 'Emergency: 108 / +91 80 4567 8999'],
  },
  {
    Icon: EmailIcon, color: '#E91E8C', label: 'Email',
    lines: ['info@lifecarehospital.in', 'appointments@lifecarehospital.in'],
  },
  {
    Icon: AccessTimeIcon, color: '#F9A825', label: 'Working Hours',
    lines: ['OPD: Mon–Sat 8AM – 8PM', 'Emergency: 24/7 Always Open'],
  },
];

const departments = ['General Inquiry', 'Appointments', 'Billing', 'Medical Records', 'Feedback', 'Emergency'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dept: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (f) => (e) => setForm({ ...form, [f]: e.target.value });
  const handleSend = () => setSent(true);

  return (
    <Box>
      {/* Hero */}
      <Box sx={{
        background: 'linear-gradient(135deg, #054580, #0A6EBD)',
        color: 'white', py: { xs: 8, md: 10 }, textAlign: 'center',
      }}>
        <Container maxWidth="md">
          <Chip label="Get In Touch" sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', mb: 3 }} />
          <Typography variant="h2" fontWeight={800} mb={2}>Contact LifeCare Hospital</Typography>
          <Typography sx={{ opacity: 0.85, fontSize: '1.05rem', maxWidth: 480, mx: 'auto' }}>
            We're here to help. Reach out to our team for appointments, queries, or feedback.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Info Cards */}
          <Grid item xs={12} md={5}>
            <Typography variant="h5" fontWeight={700} mb={3}>How to Reach Us</Typography>
            <Stack spacing={2} mb={4}>
              {contactDetails.map(({ Icon, color, label, lines }) => (
                <Box key={label} display="flex" gap={2}>
                  <Box sx={{
                    width: 48, height: 48, borderRadius: '12px',
                    bgcolor: color + '15', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon sx={{ color }} />
                  </Box>
                  <Box>
                    <Typography fontWeight={700} fontSize={14}>{label}</Typography>
                    {lines.map((l, i) => (
                      <Typography key={i} variant="body2" color="text.secondary">{l}</Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* Map placeholder */}
            <Box sx={{
              borderRadius: 3, overflow: 'hidden',
              height: 240,
              background: 'linear-gradient(135deg, #e3f0fb, #d0eae0)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid', borderColor: 'grey.200',
            }}>
              <Box textAlign="center">
                <LocationOnIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography fontWeight={600} color="primary.main">#12 Health Avenue</Typography>
                <Typography variant="body2" color="text.secondary">Koramangala, Bengaluru</Typography>
                <Button size="small" sx={{ mt: 1 }} href="https://maps.google.com" target="_blank">
                  Open in Google Maps
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" fontWeight={700} mb={3}>Send Us a Message</Typography>

                {sent ? (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    Thank you for reaching out! Our team will respond within 24 hours to <strong>{form.email}</strong>.
                  </Alert>
                ) : null}

                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name *" value={form.name} onChange={handleChange('name')} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email Address *" type="email" value={form.email} onChange={handleChange('email')} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Phone Number" value={form.phone} onChange={handleChange('phone')} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField select fullWidth label="Department / Subject" value={form.dept} onChange={handleChange('dept')}>
                      {departments.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth multiline rows={5}
                      label="Your Message *"
                      value={form.message} onChange={handleChange('message')}
                      placeholder="Describe your query or feedback in detail..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained" size="large" endIcon={<SendIcon />}
                      onClick={handleSend}
                      disabled={!form.name || !form.email || !form.message}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Emergency Banner */}
      <Box sx={{ bgcolor: '#E53935', py: 5, textAlign: 'center', color: 'white' }}>
        <Container>
          <Typography variant="h5" fontWeight={800} mb={1}>🚨 Medical Emergency?</Typography>
          <Typography mb={2} opacity={0.9}>Call our 24/7 emergency line immediately. Don't wait.</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: 'error.main', fontWeight: 800, fontSize: '1.1rem', '&:hover': { bgcolor: 'grey.100' } }}>
              📞 108 — Emergency
            </Button>
            <Button variant="outlined" size="large" sx={{ borderColor: 'rgba(255,255,255,0.6)', color: 'white' }}>
              +91 80 4567 8999
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
