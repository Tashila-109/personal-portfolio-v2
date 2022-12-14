import React from 'react';
import classNames from 'classnames';

import Split from '../Split';
import styles from './call-to-action.module.css';

const CallToAction = ({ img }) => {
  return (
    <section className='call-action section-padding sub-bg bg-img' style={{ backgroundImage: `url(${img ? img : '/img/patrn.svg'})` }}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-lg-9'>
            <div className='content sm-mb30'>
              <Split>
                <h6 className='wow words chars splitting' data-splitting>
                  Let’s Talk
                </h6>
                <h2 className='wow words chars splitting' data-splitting>
                  about anything <br /> <b className='back-color'>on code and tech</b>.
                </h2>
              </Split>
            </div>
          </div>

          <div className={classNames('col-md-4 col-lg-3 valign', styles.Buttons)}>
              <a href='mailto:tashila.dev@gmail.com' className='butn bord curve wow fadeInUp' data-wow-delay='.5s'>
                <span>Email Me</span>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
