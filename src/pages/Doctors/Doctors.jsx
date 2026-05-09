// src/pages/Doctors/Doctors.jsx
import React, { useState } from 'react';
import {
  Box, Container, Grid, Typography, Card, CardContent, CardActions,
  Avatar, Rating, Chip, Button, Stack, TextField, InputAdornment,
  ToggleButton, ToggleButtonGroup,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { doctors, departments } from '../../data/mockData';

export default function Doctors() {
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('All');

  const filtered = doctors.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === 'All' || d.specialty === dept;
    return matchSearch && matchDept;
  });

  return (
    <Box>
      {/* Hero */}
      <Box sx={{
        background: 'linear-gradient(135deg, #054580, #0A6EBD)',
        color: 'white', py: { xs: 8, md: 10 }, textAlign: 'center',
      }}>
        <Container maxWidth="md">
          <Chip label="Our Medical Team" sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', mb: 3 }} />
          <Typography variant="h2" fontWeight={800} mb={2}>Meet Our Specialist Doctors</Typography>
          <Typography sx={{ opacity: 0.85, maxWidth: 500, mx: 'auto', fontSize: '1.05rem' }}>
            120+ board-certified physicians dedicated to your health and recovery.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Search & Filter */}
        <Box mb={4}>
          <TextField
            fullWidth
            placeholder="Search by name or specialty..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3, bgcolor: 'white', borderRadius: 2 }}
          />
          <Box sx={{ overflowX: 'auto' }}>
            <ToggleButtonGroup
              value={dept}
              exclusive
              onChange={(_, v) => v && setDept(v)}
              sx={{ flexWrap: 'wrap', gap: 1 }}
            >
              {departments.map((d) => (
                <ToggleButton key={d} value={d} sx={{
                  borderRadius: '20px !important', border: '1px solid',
                  borderColor: 'grey.300', px: 2.5, py: 0.8,
                  '&.Mui-selected': { bgcolor: 'primary.main', color: 'white', borderColor: 'primary.main' },
                }}>
                  {d}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Box>

        <Typography color="text.secondary" mb={3}>
          Showing <strong>{filtered.length}</strong> doctor{filtered.length !== 1 ? 's' : ''}
        </Typography>

        <Grid container spacing={3}>
          {filtered.map((doc) => (
            <Grid item xs={12} sm={6} md={4} key={doc.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Box display="flex" gap={2} mb={2}>
                    <Box position="relative">
                      <Avatar src={doc.image} sx={{ width: 72, height: 72 }} />
                      <Box sx={{
                        position: 'absolute', bottom: 2, right: 2,
                        width: 14, height: 14, borderRadius: '50%',
                        bgcolor: doc.available ? 'success.main' : 'warning.main',
                        border: '2px solid white',
                      }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={700} fontSize={15}>{doc.name}</Typography>
                      <Chip label={doc.specialty} size="small" color="primary" variant="outlined" sx={{ mt: 0.5, mb: 0.5 }} />
                      <Typography variant="caption" color="text.secondary" display="block">{doc.experience} exp</Typography>
                    </Box>
                  </Box>

                  <Typography variant="body2" color="text.secondary" lineHeight={1.7} mb={2}>{doc.about}</Typography>

                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <Rating value={doc.rating} precision={0.1} size="small" readOnly />
                    <Typography variant="caption" color="text.secondary">{doc.rating} ({doc.reviews} reviews)</Typography>
                  </Box>

                  <Typography variant="caption" color="text.secondary">
                    🕐 {doc.timings}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block" mt={0.5}>
                    🎓 {doc.education}
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<CalendarMonthIcon />}
                    component={Link}
                    to="/appointments"
                    disabled={!doc.available}
                  >
                    {doc.available ? 'Book Appointment' : 'Not Available'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filtered.length === 0 && (
          <Box textAlign="center" py={8}>
            <Typography color="text.secondary">No doctors found matching your search.</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
