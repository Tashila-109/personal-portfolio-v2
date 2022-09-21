import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import initIsotope from '@common/initIsotope';

import styles from './Code-snippets-section.module.css';

const CodeSnippetsGrid = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  return (
    <section className='portfolio-frl section-padding pb-70'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-md-10'>
            <div className='sec-head  text-center'>
              <h6 className='wow fadeIn' data-wow-delay='.5s'>
                Library
              </h6>
              <h3 className='wow color-font'>Code Snipets Library</h3>
              <p>List of code snippets</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {/* <div className='filtering col-12'>
            <div className='filter wow fadeIn' data-wow-delay='.5s'>
              <span data-filter='*' className='active'>
                All
              </span>
              <span data-filter='.brand'>Branding</span>
              <span data-filter='.web'>Mobile App</span>
              <span data-filter='.graphic'>Creative</span>
            </div>
          </div> */}

          <div className='gallery full-width'>
            <div className='col-md-6 items graphic lg-mr wow fadeInUp' data-wow-delay='.4s'>
              <div className='item-img'>
                <div className='cont'>
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='rota'>
                    <Image src='/img/portfolio/freelancer/1.jpg' alt='image' width={460} height={345} />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
                <div className='tags'>
                  <span>
                    <Link href='/works2/works2-dark'>App</Link>
                  </span>
                  <span>
                    <Link href='/works2/works2-dark'>Fitnes</Link>
                  </span>
                  <span>
                    <Link href='/works2/works2-dark'>Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className='col-md-6 items web wow fadeInUp' data-wow-delay='.4s'>
              <div className='item-img'>
                <div className='cont'>
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='rota'>
                    <Image src='/img/portfolio/freelancer/2.jpg' alt='image' width={460} height={345} />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
                <div className='tags'>
                  <span>
                    <Link href='/works2/works2-dark'>App</Link>
                  </span>
                  <span>
                    <Link href='/works2/works2-dark'>Fitnes</Link>
                  </span>
                  <span>
                    <Link href='/works2/works2-dark'>Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className='col-md-6 items web wow fadeInUp' data-wow-delay='.4s'>
              <div className='item-img'>
                <div className='cont'>
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='rota'>
                    <Image src='/img/portfolio/freelancer/3.jpg' alt='image' width={460} height={345} />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
                <div className='tags'>
                  <span>
                    <Link href='/works2/works2-dark'>App</Link>
                  </span>
                  <span>
                    <Link href='/works2/works2-dark'>Fitnes</Link>
                  </span>
                  <span>
                    <Link href='/works2/works2-dark'>Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className='col-md-6 items web graphic wow fadeInUp' data-wow-delay='.4s'>
              <div className='item-img'>
                <div className='cont'>
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='rota'>
                    <Image src='/img/portfolio/freelancer/4.jpg' alt='image' width={460} height={345} />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
                <div className='tags'>
                  <span>
                    <Link href='/works2/works2-dark'>App</Link>
                  </span>
                  <span>
                    <Link href='/works2/works2-dark'>Fitnes</Link>
                  </span>
                  <span>
                    <Link href='/works2/works2-dark'>Creative</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames('mt-30 text-center', styles.Buttons)}>
          <Link href={`/library`}>
            <a className='butn bord curve'>
              <span>See More Projects</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CodeSnippetsGrid;
