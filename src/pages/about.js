import React from 'react';

import DarkTheme from '@layouts/Dark';
import Navbar from '@components/Navbar/navbar';
import AboutIntro from '@components/About-intro';
import Services from '@components/Services/services';
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
      <PagesHeader />
      <AboutIntro />
      <Services style='4item' />
      <Clients theme='dark' />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default About;
