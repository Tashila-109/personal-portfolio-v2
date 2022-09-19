import React from 'react';
// import Link from 'next/link';
import Particles from 'react-tsparticles';
import classNames from 'classnames';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa';

import particlesConfig from '@config/particle-config';
import particlesBlackConfig from '@config/pr-s-black';

import styles from './intro.module.css';

const Intro = ({ sliderRef, blackStar }) => {
  return (
    <header ref={sliderRef} className='particles circle-bg valign'>
      <div className={classNames('container', styles.Container)}>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            <div className='cont text-center'>
              <h1>
                <span className='color-font'>Hey there</span>, I just like to make and break{' '}
                <span className='color-font'>sh*t with code</span>.
              </h1>
            </div>
            <div className={classNames('mt-50', styles.AboutMe)}>
              {/* <Link href={`/`}>
                <a className='butn bord curve'>
                  <span>About Me</span>
                </a>
              </Link> */}
              <IconContext.Provider value={{ color: '#ffffff', size: '2rem' }}>
                <div className={classNames(styles.SocailLinkWrapper)}>
                  <a href='https://github.com/Tashila-109' target='_blank' rel='noreferrer'>
                    <FaGithub />
                  </a>
                  <a href='https://www.linkedin.com/in/tashila-fernando/' target='_blank' rel='noreferrer'>
                    <FaLinkedin />
                  </a>
                  <a href='https://twitter.com/Tashila_dev' target='_blank' rel='noreferrer'>
                    <FaTwitter />
                  </a>
                  <a href='https://dev.to/tashila109' target='_blank' rel='noreferrer'>
                    <FaDev />
                  </a>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>

      <Particles id='particles-js' options={blackStar ? particlesBlackConfig : particlesConfig} />

      <div className='gradient-circle'></div>
      <div className='gradient-circle two'></div>
      <div className='line bottom left'></div>
    </header>
  );
};

export default Intro;
