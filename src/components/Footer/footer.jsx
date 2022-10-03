import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './footer.module.css';

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='item md-mb50'>
              <div className='title'>
                <h5>Contact Me</h5>
              </div>
              <ul>
                <li>
                  <span className='icon pe-7s-mail'></span>
                  <div className='cont'>
                    <h6>Email</h6>
                    <a>tashila.dev@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className={classNames(styles.UpfrontPosition, 'item')}>
              <div className='social'>
                <a href='#0'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href='#0'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='#0'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='#0'>
                  <i className='fab fa-youtube'></i>
                </a>
              </div>
              <div className='copy-right'>
                <p>
                  © Tashila Fernando {new Date().getFullYear()}. <br /> Made with NextJS and passion
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='item md-mb50'>
              <div className='title'>
                <h5>Recent Blog Posts</h5>
              </div>
              <ul className={styles.UpfrontPosition}>
                <li>
                  <div className='img'>
                    <Link href='/blog-details/blog-details-dark'>
                      <a>
                        <Image src='/img/blog/1.jpg' alt='' width={136.64} height={76.51} />
                      </a>
                    </Link>
                  </div>
                  <div className='sm-post'>
                    <Link href='/blog-details/blog-details-dark'>
                      <a>
                        <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
                      </a>
                    </Link>
                    <Link href='/blog/blog-dark'>
                      <a>
                        <span className='date'>14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='img'>
                    <Link href='/blog-details/blog-details-dark'>
                      <a>
                        <Image src='/img/blog/2.jpg' alt='' width={136.64} height={76.51} />
                      </a>
                    </Link>
                  </div>
                  <div className='sm-post'>
                    <Link href='/blog-details/blog-details-dark'>
                      <a>
                        <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
                      </a>
                    </Link>
                    <Link href='/blog/blog-dark'>
                      <a>
                        <span className='date'>14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                {/* <li>
                  <div className='subscribe'>
                    <input type='text' placeholder='Type Your Email' />
                    <span className='subs pe-7s-paper-plane'></span>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
