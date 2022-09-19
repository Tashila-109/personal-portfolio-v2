import React from 'react';
import Navbar from '@components/Navbar/navbar';
import FullTestimonials from '@components/Full-testimonials/full-testimonials';
import CallToAction from '@components/Call-to-action/call-to-action';
import Footer from '@components/Footer/footer';
import Team from '@components/Team/team';
import DarkTheme from '@layouts/Dark';
import Works from '@components/Works-section-grid';
import Blogs4 from '@components/blogs/Blogs4/blogs4';
import Intro from '@components/Intro/intro';
import AboutUs from '@components/About-us/about-us';
import Services3 from '@components/Services3/services3';
import MinimalArea2 from '@components/Minimal-Area2/minimal-area2';

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
      <Services3 />
      <MinimalArea2 />
      <FullTestimonials classText='pb-0' />
      <Team />
      <Blogs4 />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Home;
