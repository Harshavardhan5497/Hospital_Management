// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List,
  ListItem, ListItemText, Container, Typography, useScrollTrigger,
  Slide, Chip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Appointments', path: '/appointments' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top strip */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 0.5, display: { xs: 'none', md: 'block' } }}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" sx={{ opacity: 0.85 }}>
              🕐 Emergency: 24/7 Available &nbsp;|&nbsp; 📍 #12 Health Avenue, Bengaluru – 560001
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <PhoneIcon sx={{ fontSize: 14 }} />
              <Typography variant="caption" fontWeight={600}>+91 80 4567 8900</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <AppBar
        position="sticky"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: scrolled ? 'white' : 'white',
          color: 'text.primary',
          borderBottom: scrolled ? 'none' : '1px solid',
          borderColor: 'grey.100',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo */}
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', flexGrow: 1 }}>
              <Box sx={{
                width: 42, height: 42, borderRadius: '12px',
                background: 'linear-gradient(135deg, #0A6EBD, #3D9BE9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <LocalHospitalIcon sx={{ color: 'white', fontSize: 22 }} />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={800} color="primary.main" lineHeight={1.1}>
                  LifeCare
                </Typography>
                <Typography variant="caption" color="text.secondary" lineHeight={1}>
                  Hospital & Medical Center
                </Typography>
              </Box>
            </Box>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: location.pathname === link.path ? 'primary.main' : 'text.secondary',
                    fontWeight: location.pathname === link.path ? 700 : 500,
                    fontSize: '0.875rem',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: location.pathname === link.path ? '60%' : '0%',
                      height: 2,
                      bgcolor: 'primary.main',
                      borderRadius: 2,
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': { width: '60%' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/appointments"
                sx={{ ml: 1, px: 3 }}
              >
                Book Appointment
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { md: 'none' } }}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" px={2} pb={2}>
            <Typography fontWeight={800} color="primary.main" fontSize={18}>LifeCare</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.path}
                component={Link}
                to={link.path}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  bgcolor: location.pathname === link.path ? 'primary.light' + '15' : 'transparent',
                  color: location.pathname === link.path ? 'primary.main' : 'text.primary',
                  borderRadius: 2, mx: 1, mb: 0.5,
                  textDecoration: 'none',
                }}
              >
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItem>
            ))}
          </List>
          <Box px={2} pt={2}>
            <Button variant="contained" fullWidth component={Link} to="/appointments" onClick={() => setDrawerOpen(false)}>
              Book Appointment
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
