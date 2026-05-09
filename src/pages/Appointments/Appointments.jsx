// src/pages/Appointments/Appointments.jsx
import React, { useState } from 'react';
import {
  Box, Container, Grid, Typography, Card, CardContent,
  TextField, Button, MenuItem, Chip, Stepper, Step, StepLabel,
  Avatar, Stack, Alert, Divider,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { doctors, departments, timeSlots } from '../../data/mockData';

const steps = ['Select Doctor & Time', 'Your Details', 'Confirm Booking'];

export default function Appointments() {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    specialty: '', doctor: '', date: '', time: '',
    name: '', phone: '', email: '', age: '', gender: '', reason: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const filteredDoctors = form.specialty
    ? doctors.filter((d) => d.specialty === form.specialty && d.available)
    : doctors.filter((d) => d.available);

  const selectedDoctor = doctors.find((d) => d.id === parseInt(form.doctor));

  const handleNext = () => setActiveStep((s) => s + 1);
  const handleBack = () => setActiveStep((s) => s - 1);
  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <Box sx={{ bgcolor: 'background.default', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="sm">
          <Card sx={{ textAlign: 'center', p: 4 }}>
            <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
            <Typography variant="h4" fontWeight={800} mb={1}>Appointment Confirmed!</Typography>
            <Typography color="text.secondary" mb={3}>
              Your appointment has been booked. A confirmation will be sent to <strong>{form.email}</strong>.
            </Typography>
            <Box sx={{ bgcolor: 'grey.50', borderRadius: 3, p: 3, textAlign: 'left', mb: 3 }}>
              {[
                ['Patient', form.name],
                ['Doctor', selectedDoctor?.name],
                ['Specialty', form.specialty || selectedDoctor?.specialty],
                ['Date', form.date],
                ['Time', form.time],
              ].map(([k, v]) => (
                <Box key={k} display="flex" justifyContent="space-between" py={0.8}>
                  <Typography variant="body2" color="text.secondary">{k}</Typography>
                  <Typography variant="body2" fontWeight={600}>{v}</Typography>
                </Box>
              ))}
            </Box>
            <Alert severity="info" sx={{ textAlign: 'left' }}>
              Please arrive 15 minutes early and bring a valid photo ID and any previous medical records.
            </Alert>
            <Button variant="contained" sx={{ mt: 3 }} onClick={() => { setSubmitted(false); setActiveStep(0); setForm({ specialty: '', doctor: '', date: '', time: '', name: '', phone: '', email: '', age: '', gender: '', reason: '' }); }}>
              Book Another Appointment
            </Button>
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero */}
      <Box sx={{
        background: 'linear-gradient(135deg, #054580, #0A6EBD)',
        color: 'white', py: { xs: 8, md: 10 }, textAlign: 'center',
      }}>
        <Container maxWidth="md">
          <Chip label="Online Booking" sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', mb: 3 }} />
          <Typography variant="h2" fontWeight={800} mb={2}>Book an Appointment</Typography>
          <Typography sx={{ opacity: 0.85, fontSize: '1.05rem' }}>
            Same-day and next-day slots available. Easy 3-step booking.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 6 }}>
        {/* Stepper */}
        <Stepper activeStep={activeStep} sx={{ mb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Card sx={{ p: { xs: 2, md: 2 } }}>
          <CardContent>
            {/* Step 1 */}
            {activeStep === 0 && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" fontWeight={700} mb={2} display="flex" alignItems="center" gap={1}>
                    <MedicalServicesIcon color="primary" /> Select Department & Doctor
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select fullWidth label="Specialty / Department"
                    value={form.specialty} onChange={handleChange('specialty')}
                  >
                    {departments.filter(d => d !== 'All').map((d) => (
                      <MenuItem key={d} value={d}>{d}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select fullWidth label="Select Doctor"
                    value={form.doctor} onChange={handleChange('doctor')}
                  >
                    {filteredDoctors.map((d) => (
                      <MenuItem key={d.id} value={d.id}>
                        {d.name} — {d.specialty}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {selectedDoctor && (
                  <Grid item xs={12}>
                    <Box sx={{ bgcolor: 'primary.main' + '08', borderRadius: 2, p: 2, display: 'flex', gap: 2 }}>
                      <Avatar src={selectedDoctor.image} />
                      <Box>
                        <Typography fontWeight={700}>{selectedDoctor.name}</Typography>
                        <Typography variant="body2" color="primary.main">{selectedDoctor.specialty} · {selectedDoctor.experience}</Typography>
                        <Typography variant="caption" color="text.secondary">Available: {selectedDoctor.timings}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                )}

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth type="date" label="Preferred Date"
                    value={form.date} onChange={handleChange('date')}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ min: new Date().toISOString().split('T')[0] }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select fullWidth label="Preferred Time Slot"
                    value={form.time} onChange={handleChange('time')}
                  >
                    {timeSlots.map((t) => (
                      <MenuItem key={t} value={t}>{t}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained" size="large" onClick={handleNext}
                    disabled={!form.doctor || !form.date || !form.time}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
            )}

            {/* Step 2 */}
            {activeStep === 1 && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" fontWeight={700} mb={2} display="flex" alignItems="center" gap={1}>
                    <PersonIcon color="primary" /> Your Personal Details
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Full Name *" value={form.name} onChange={handleChange('name')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone Number *" value={form.phone} onChange={handleChange('phone')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email Address *" type="email" value={form.email} onChange={handleChange('email')} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField fullWidth label="Age" value={form.age} onChange={handleChange('age')} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField select fullWidth label="Gender" value={form.gender} onChange={handleChange('gender')}>
                    {['Male', 'Female', 'Other'].map((g) => <MenuItem key={g} value={g}>{g}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth multiline rows={3}
                    label="Reason for Visit / Symptoms"
                    value={form.reason} onChange={handleChange('reason')}
                    placeholder="Briefly describe your symptoms or reason for the appointment..."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" onClick={handleBack}>Back</Button>
                    <Button variant="contained" size="large" onClick={handleNext}
                      disabled={!form.name || !form.phone || !form.email}>
                      Review Appointment
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            )}

            {/* Step 3 */}
            {activeStep === 2 && (
              <Box>
                <Typography variant="h6" fontWeight={700} mb={3} display="flex" alignItems="center" gap={1}>
                  <CalendarMonthIcon color="primary" /> Review & Confirm
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography fontWeight={700} mb={2} color="primary.main">Appointment Details</Typography>
                    {[
                      ['Doctor', selectedDoctor?.name],
                      ['Specialty', selectedDoctor?.specialty],
                      ['Date', form.date],
                      ['Time', form.time],
                    ].map(([k, v]) => (
                      <Box key={k} display="flex" justifyContent="space-between" py={1} borderBottom="1px solid" borderColor="grey.100">
                        <Typography variant="body2" color="text.secondary">{k}</Typography>
                        <Typography variant="body2" fontWeight={600}>{v}</Typography>
                      </Box>
                    ))}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography fontWeight={700} mb={2} color="primary.main">Patient Details</Typography>
                    {[
                      ['Name', form.name],
                      ['Phone', form.phone],
                      ['Email', form.email],
                      ['Age', form.age],
                      ['Gender', form.gender],
                    ].map(([k, v]) => (
                      <Box key={k} display="flex" justifyContent="space-between" py={1} borderBottom="1px solid" borderColor="grey.100">
                        <Typography variant="body2" color="text.secondary">{k}</Typography>
                        <Typography variant="body2" fontWeight={600}>{v}</Typography>
                      </Box>
                    ))}
                  </Grid>
                  {form.reason && (
                    <Grid item xs={12}>
                      <Typography fontWeight={600} mb={1}>Reason for Visit</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 2 }}>
                        {form.reason}
                      </Typography>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Alert severity="warning" sx={{ mb: 2 }}>
                      Please ensure all information is correct before confirming. Cancellations must be made 4 hours in advance.
                    </Alert>
                    <Stack direction="row" spacing={2}>
                      <Button variant="outlined" onClick={handleBack}>Back</Button>
                      <Button variant="contained" size="large" color="success" onClick={handleSubmit}
                        startIcon={<CheckCircleIcon />}>
                        Confirm Appointment
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
