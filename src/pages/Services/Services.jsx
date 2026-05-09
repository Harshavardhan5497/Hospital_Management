// src/pages/Services/Services.jsx
import React from 'react';
import {
  Box, Container, Grid, Typography, Card, CardContent,
  Chip, Stack, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BiotechIcon from '@mui/icons-material/Biotech';
import { services } from '../../data/mockData';

const iconMap = {
  LocalHospital: LocalHospitalIcon,
  Favorite: FavoriteIcon,
  Psychology: PsychologyIcon,
  ChildCare: ChildCareIcon,
  AccessibilityNew: AccessibilityNewIcon,
  Biotech: BiotechIcon,
};

const faqs = [
  { q: 'Do I need a referral to see a specialist?', a: 'No referral is required for most of our outpatient specialties. You can book directly through our website or call our front desk.' },
  { q: 'Does LifeCare accept insurance?', a: 'Yes, we are empanelled with 50+ insurance providers including Star Health, HDFC Ergo, United India, and government schemes like Ayushman Bharat.' },
  { q: 'What are the visiting hours?', a: 'General visiting hours are 10AM – 12PM and 5PM – 7PM. ICU visits are by prior arrangement with the nursing staff.' },
  { q: 'Is emergency care available 24/7?', a: 'Yes, our Emergency Department operates 24 hours a day, 7 days a week, including all public holidays.' },
  { q: 'How do I access my digital reports?', a: 'Lab and radiology reports are available on our patient portal within 24 hours. You can also receive them via SMS or email.' },
];

export default function Services() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{
        background: 'linear-gradient(135deg, #054580, #00876A)',
        color: 'white', py: { xs: 8, md: 10 }, textAlign: 'center',
      }}>
        <Container maxWidth="md">
          <Chip label="Medical Services" sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', mb: 3 }} />
          <Typography variant="h2" fontWeight={800} mb={2}>
            Comprehensive Healthcare Services
          </Typography>
          <Typography sx={{ opacity: 0.85, maxWidth: 540, mx: 'auto', fontSize: '1.05rem' }}>
            From emergency care to specialist consultations, diagnostics, and surgical procedures —
            everything under one roof.
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight={700} mb={1}>All Departments & Specialties</Typography>
          <Typography color="text.secondary">40+ specialties staffed by board-certified physicians</Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((s) => {
            const Icon = iconMap[s.icon] || LocalHospitalIcon;
            return (
              <Grid item xs={12} sm={6} md={4} key={s.id}>
                <Card sx={{ height: '100%', borderTop: `4px solid ${s.color}` }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <Box sx={{
                        width: 52, height: 52, borderRadius: '14px',
                        bgcolor: s.color + '18',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon sx={{ color: s.color, fontSize: 26 }} />
                      </Box>
                      <Typography variant="h6" fontWeight={700}>{s.title}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.8} mb={2.5}>
                      {s.description}
                    </Typography>
                    <Typography variant="caption" fontWeight={700} color="text.primary" mb={1} display="block">
                      Key Offerings:
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={0.8}>
                      {s.features.map((f) => (
                        <Chip key={f} label={f} size="small"
                          sx={{ bgcolor: s.color + '12', color: s.color, fontWeight: 500, fontSize: '0.72rem' }} />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Why Choose Us */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=560&h=400&fit=crop"
                alt="Services"
                sx={{ width: '100%', borderRadius: 4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Chip label="Why LifeCare" color="primary" variant="outlined" sx={{ mb: 2 }} />
              <Typography variant="h3" fontWeight={700} mb={3}>
                Advanced Technology, Human Touch
              </Typography>
              {[
                'State-of-the-art 3T MRI, 128-slice CT, and robotic surgery systems',
                '24/7 intensivists in Cardiac, Neuro, and Surgical ICUs',
                'Digital-first patient experience with online records and telemedicine',
                'Multidisciplinary tumor boards and complex case conferencing',
                'Dedicated physiotherapy, nutrition, and palliative care teams',
              ].map((item, i) => (
                <Box key={i} display="flex" gap={2} mb={2}>
                  <Box sx={{
                    width: 28, height: 28, borderRadius: '50%', bgcolor: 'primary.main',
                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 12, flexShrink: 0,
                  }}>
                    ✓
                  </Box>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8} mt={0.3}>{item}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQs */}
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Box textAlign="center" mb={6}>
          <Chip label="FAQ" color="secondary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h3" fontWeight={700}>Frequently Asked Questions</Typography>
        </Box>
        {faqs.map((faq, i) => (
          <Accordion key={i} sx={{ mb: 1.5, borderRadius: '12px !important', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', '&:before': { display: 'none' } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary" lineHeight={1.8}>{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
