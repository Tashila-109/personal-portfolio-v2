import React from 'react';

import fadeWhenScroll from '@common/fadeWhenScroll';

const defaultProps = {
  title: 'Title header',
  backText: 'Ttitle',
  description:
    'Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.',
};

const TextHeader = ({
  title = defaultProps.title,
  backText = defaultProps.backText,
  description = defaultProps.description,
  sliderRef,
}) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll('.fixed-slider .capt .parlx'));
  }, []);
  return (
    <header ref={sliderRef} className='works-header fixed-slider hfixd valign sub-bg'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7 col-md-9 static'>
            <div className='capt mt-50'>
              <div className='parlx text-center'>
                <h1 className='color-font'>{title}</h1>
                <p>{description}</p>
              </div>

              <div className='bactxt custom-font valign'>
                <span className='full-width'>{backText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TextHeader;
