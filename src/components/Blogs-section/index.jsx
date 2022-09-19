import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './Blogs-section.module.css';

const BlogsSection = () => {
  return (
    <section className='blog-list section-padding sub-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='head md-mb50'>
              <h6 className='back-color'>Blog Posts</h6>
              <h3>Featured Blog Posts</h3>
              <p>We provide company and finance service for startups and company business.</p>
              <Link href='/'>
                <a className={classNames(styles.UpfrontPosition)}>
                  <span>More Blog Posts</span>
                </a>
              </Link>
            </div>
          </div>
          <div className='col-lg-7 offset-lg-1'>
            {/* This is the correct block */}
            <Link href='/blog/blog-dark' passHref>
              <div className={classNames('item wow fadeInUp', styles.BlogCard)} data-wow-delay='.3s'>
                <div className='img valign'>
                  <Image src='/img/blog/1.jpg' alt='Featured blog 1' width={237} height={133} />
                </div>
                <div className='cont valign'>
                  <div>
                    <div className='info'>
                      <a className='date'>
                        <span>
                          <i>06</i> August
                        </span>
                      </a>
                      <span>/</span>
                      <a className='tag'>
                        <span>WordPress</span>
                      </a>
                    </div>
                    <a>
                      <h5>How to use solid color combine with simple furnitures.</h5>
                    </a>
                  </div>
                </div>
              </div>
            </Link>

            <div className='item wow fadeInUp' data-wow-delay='.5s'>
              <div className='img valign'>
                <Image src='/img/blog/2.jpg' alt='Featured blog 2' width={237} height={133} />
              </div>
              <div className='cont valign'>
                <div>
                  <div className='info'>
                    <Link href='/blog/blog-dark'>
                      <a className='date'>
                        <span>
                          <i>06</i> August
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href='/blog/blog-dark'>
                      <a className='tag'>
                        <span>WordPress</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href='/blog-details/blog-details-dark'>
                      <a>How to use solid color combine with simple furnitures.</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className='item wow fadeInUp' data-wow-delay='.3s'>
              <div className='img valign'>
                <Image src='/img/blog/3.jpg' alt='Featured blog 3' width={237} height={133} />
              </div>
              <div className='cont valign'>
                <div>
                  <div className='info'>
                    <Link href='/blog/blog-dark'>
                      <a className='date'>
                        <span>
                          <i>06</i> August
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href='/blog/blog-dark'>
                      <a className='tag'>
                        <span>WordPress</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href='/blog-details/blog-details-dark'>
                      <a>How to use solid color combine with simple furnitures.</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
