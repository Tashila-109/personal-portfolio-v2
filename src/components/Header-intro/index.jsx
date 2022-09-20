import React from 'react';
import Split from '../Split';
import AboutInfo1Data from '../../data/sections/about-info1.json';

const defaultProps = {
  title: 'Intro Title',
  paragraphs: [AboutInfo1Data.paragraph2, AboutInfo1Data.paragraph2],
};

const AboutIntro = ({ title = defaultProps.title, paragraphs = defaultProps.paragraphs }) => {
  return (
    <section className='intro-section section-padding pb-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-4'>
            <div className='htit sm-mb30'>
              <h4>{title}</h4>
            </div>
          </div>
          <div className='col-lg-8 offset-lg-1 col-md-8'>
            <div className='text'>
              <Split>
                {paragraphs?.map((paragraph, idx) => {
                  return (
                    <>
                      <p className={`wow txt ${idx === 1 && 'mb-10'} words chars splitting`} data-splitting>
                        {paragraph}
                      </p>
                    </>
                  );
                })}
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
