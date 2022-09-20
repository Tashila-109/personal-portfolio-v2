import React from 'react';
import Image from 'next/image';

const defaultProps = {
  title: 'Page Header',
  imgUrl: '/img/slid/about.jpg',
};

const PagesHeader = ({ title = defaultProps.title, imgUrl = defaultProps.imgUrl }) => {
  return (
    <header className='pages-header circle-bg valign'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            <div className='cont mt-100 mb-50 text-center'>
              <h1 className='color-font fw-700'>{title}</h1>
            </div>
          </div>
          <div className='col-lg-10'>
            <div className='img'>
              <Image src={imgUrl} alt='Page Header Image' width={970} height={640} />
            </div>
          </div>
        </div>
      </div>
      <div className='half sub-bg'>
        <div className='circle-color'>
          <div className='gradient-circle'></div>
          <div className='gradient-circle two'></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
