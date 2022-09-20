import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './about-us.module.css';

const AboutMe = () => {
  return (
    <section className='about-us section-padding position-relative'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 valign md-mb50'>
            <div className='mb-50'>
              <h6 className='fw-100 text-u ls10 mb-10'>ABOUT ME</h6>
              <h3 className='fw-600 text-u ls1 mb-30 color-font'>TASHILA FERNANDO</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <Link href='/about/about-dark'>
                <a className={classNames('butn bord curve mt-30', styles.Buttons)}>
                  <span>More About Me</span>
                </a>
              </Link>
            </div>
          </div>
          <div className='col-lg-7 img'>
            <Image
              src='https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
              alt='About Me Hero Image'
              width={500}
              height={333}
            />
            <div className='stauts'>
              <div className='item'>
                <h4>
                  14
                  <span>k</span>
                </h4>
                <h6>Something</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='line bottom right'></div>
    </section>
  );
};

export default AboutMe;
