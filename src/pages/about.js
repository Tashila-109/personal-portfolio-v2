import React from 'react';

import DarkTheme from '@layouts/Dark';
import Navbar from '@components/Navbar/navbar';
import Intro from '@components/Header-intro';
import Features from '@components/Features';
import Clients from '@components/Clients/clients';
import CallToAction from '@components/Call-to-action/call-to-action';
import Footer from '@components/Footer/footer';
import PagesHeader from '@components/Pages-header';

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
      } else {
        navbar.classList.remove('nav-scroll');
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} from='about-dark' />
      <PagesHeader
        title='Tashila Fernando'
        imgUrl='https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      />
      <Intro title='About Me' />
      <Features title='Current Prefered Tech Stack' subTitle='Tech Stack' style='4item' />
      <Clients theme='dark' />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default About;
