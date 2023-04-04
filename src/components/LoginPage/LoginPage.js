import React from 'react';
import './LoginPage.css';
import hotelLogo from '../../images/hotel-logo.png';
import LoginForm from '../LoginForm/LoginForm';

export default function LoginPage() {
  
  return (
    <section className='login-page'>
      <img src={hotelLogo} className='login-logo' alt='Grand Budapest Hotel Logo'/>
      <LoginForm />
    </section>
  );
}