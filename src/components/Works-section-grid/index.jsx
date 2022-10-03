import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import initIsotope from '@common/initIsotope';

import styles from './Works-section-grid.module.css';

const WorksSectionGrid = () => {
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
                Portfolio
              </h6>
              <h3 className='wow color-font'>Featured Projects</h3>
              <p>Some projects that I&apos;m proud of.</p>
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
            <div className={classNames('col-md-6 items graphic lg-mr wow fadeInUp', styles.UpfrontPosition)} data-wow-delay='.4s'>
              <div className='item-img'>
                <div className='cont'>
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/portfolio/details`}>
                  <a className='rota'>
                    <Image src='/img/portfolio/freelancer/1.jpg' alt='image' width={460} height={345} />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
                <div className='tags'>
                  <span>
                    <Link href='/portfolio/details'>App</Link>
                  </span>
                  <span>
                    <Link href='/portfolio/details'>Fitnes</Link>
                  </span>
                  <span>
                    <Link href='/portfolio/details'>Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className={classNames('col-md-6 items web wow fadeInUp', styles.UpfrontPosition)} data-wow-delay='.4s'>
              <div className='item-img'>
                <div className='cont'>
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/portfolio/details`}>
                  <a className='rota'>
                    <Image src='/img/portfolio/freelancer/2.jpg' alt='image' width={460} height={345} />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
                <div className='tags'>
                  <span>
                    <Link href='/portfolio/details'>App</Link>
                  </span>
                  <span>
                    <Link href='/portfolio/details'>Fitnes</Link>
                  </span>
                  <span>
                    <Link href='/portfolio/details'>Creative</Link>
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
                <Link href={`/portfolio/details`}>
                  <a className='rota'>
                    <Image src='/img/portfolio/freelancer/3.jpg' alt='image' width={460} height={345} />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
                <div className='tags'>
                  <span>
                    <Link href='/portfolio/details'>App</Link>
                  </span>
                  <span>
                    <Link href='/portfolio/details'>Fitnes</Link>
                  </span>
                  <span>
                    <Link href='/portfolio/details'>Creative</Link>
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
                <Link href={`/portfolio/details`}>
                  <a className='rota'>
                    <Image src='/img/portfolio/freelancer/4.jpg' alt='image' width={460} height={345} />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
                <div className='tags'>
                  <span>
                    <Link href='/portfolio/details'>App</Link>
                  </span>
                  <span>
                    <Link href='/portfolio/details'>Fitnes</Link>
                  </span>
                  <span>
                    <Link href='/portfolio/details'>Creative</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames('mt-30 text-center', styles.UpfrontPosition)}>
          <Link href="/portfolio">
            <a className='butn bord curve'>
              <span>See More Projects</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorksSectionGrid;
