"use client"
import { Box, Typography, Link, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import style from './css/Footer.module.css'

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1f1f1f;',
  color: '#fff',
  padding: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const LogoSection = styled(Box)(({ theme }) => ({
  maxWidth: '300px',
  marginLeft:'15px'
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  display: 'block',
  marginBottom: theme.spacing(1),
  '&:hover': {
    color: '#ffa500',
  },
}));

const NewsletterForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
  fontSize: '14px',
  color: '#888',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <LogoSection>
        <img src="/images/logo.jpeg" alt="Codezy Logo" className={style.logo} />
          <Typography variant="body2">
            We aim at continual improvement to achieve new heights of quality and success for our customers and their customers.
          </Typography>
        </LogoSection>

        <Box>
          <Typography variant="h6">Useful Links</Typography>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/services">Services</FooterLink>
          <FooterLink href="/portfolio">Portfolio</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </Box>

        <Box>
          <Typography variant="h6">Newsletter</Typography>
          <NewsletterForm>
            <TextField
              variant="outlined"
              placeholder="youremail@gmail.com"
              size="small"
              InputProps={{
                style: { backgroundColor: '#333', color: '#fff', borderRadius: '4px' },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ffa500',
                '&:hover': {
                  backgroundColor: '#e69500',
                },
              }}
            >
              Subscribe Now
            </Button>
          </NewsletterForm>
        </Box>
      </FooterSection>

      <FooterBottom>
        <Typography>© 2024 Codezy All Rights Reserved.</Typography>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
