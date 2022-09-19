import React from 'react';

import DarkTheme from '@layouts/Dark';
import Navbar from '@components/Navbar/navbar';
import Intro from '@components/Intro/intro';
import AboutUs from '@components/About-us/about-us';
import Works from '@components/Works-section-grid';
import Blogs from '@components/Blogs-section';
import CodeSnippets from '@components/Code-snippets-section';
import CallToAction from '@components/Call-to-action/call-to-action';
import Footer from '@components/Footer/footer';

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
      <CodeSnippets />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Home;
