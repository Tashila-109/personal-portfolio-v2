import React from 'react';
import Navbar from '@components/Navbar/navbar';
import CallToAction from '@components/Call-to-action/call-to-action';
import Footer from '@components/Footer/footer';
import DarkTheme from '@layouts/Dark';
import Works from '@components/Works-section-grid';
import Blogs from '@components/Blogs-section';
import Intro from '@components/Intro/intro';
import AboutUs from '@components/About-us/about-us';

const Home = () => {
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
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro />
      <AboutUs />
      <Works />
      <Blogs />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Home;
