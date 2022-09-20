/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IconContext } from 'react-icons';
import {
  SiVuedotjs,
  SiRust,
  SiGo,
  SiDocker,
  SiPython,
  SiReact,
  SiRedux,
  SiNestjs,
  SiVercel,
  SiSocketdotio,
  SiRedis,
  SiExpress,
} from 'react-icons/si';
import classNames from 'classnames';

import Split from '../Split';
import styles from './showcase-mini.module.css';

const techData = [
  {
    id: 1,
    icon: <SiReact />,
    title: 'React Native',
    url: 'https://reactnative.dev/',
  },
  {
    id: 2,
    icon: <SiRedux />,
    title: 'Redux',
    url: 'https://redux.js.org/',
  },
  {
    id: 3,
    icon: <SiVuedotjs />,
    title: 'Vue.js',
    url: 'https://vuejs.org/',
  },
  {
    id: 4,
    icon: <SiVercel />,
    title: 'Vue.js',
    url: 'https://vercel.com/',
  },
  {
    id: 5,
    icon: <SiRust />,
    title: 'Rust',
    url: 'https://www.rust-lang.org',
  },
  {
    id: 6,
    icon: <SiGo />,
    title: 'Go Lang',
    url: 'https://go.dev/',
  },
  {
    id: 7,
    icon: <SiPython />,
    title: 'Python',
    url: 'https://www.python.org/',
  },
  {
    id: 8,
    icon: <SiDocker />,
    title: 'Docker',
    url: 'https://www.docker.com/',
  },
  {
    id: 9,
    icon: <SiNestjs />,
    title: 'Nest.js',
    url: 'https://nestjs.com/',
  },
  {
    id: 10,
    icon: <SiExpress />,
    title: 'Express.js',
    url: 'https://expressjs.com/',
  },
  {
    id: 11,
    icon: <SiSocketdotio />,
    title: 'Socket.io',
    url: 'https://socket.io/',
  },
  {
    id: 12,
    icon: <SiRedis />,
    title: 'Redis.io',
    url: 'https://redis.io/',
  },
];

const ShowcaseMini = ({ theme }) => {
  return (
    <section className='clients section-padding'>
      <div className='container'>
        <IconContext.Provider value={{ color: '#ffffff', size: '4rem', className: styles.Icons }}>
          <div className='row'>
            <div className='col-lg-4 valign md-mb50'>
              <div className='sec-head mb-0'>
                <h6 className='wow fadeIn' data-wow-delay='.5s'>
                  Technologies
                </h6>
                <h3 className='wow mb-20 color-font'>My Arsenal</h3>
                <p>Tools and Technologies that I&apos;m proficient with.</p>
              </div>
            </div>
            <div className='col-lg-8'>
              <div>
                <div className='row bord'>
                  {techData.slice(0, 4).map(item => (
                    <div key={item.id} className='col-md-3 col-6 brands'>
                      <div
                        className='item wow fadeIn'
                        data-wow-delay={`${item.id == 1 ? '.3' : item.id == 2 ? '.6' : item.id == 3 ? '.8' : item.id == 4 ? '.3' : ''}s`}
                      >
                        <div className='img'>
                          {item.icon}
                          <Split>
                            <a
                              href={item.url}
                              target='_blank'
                              rel='noreferrer'
                              className={classNames('link words chars splitting', styles.IconLinks)}
                              data-splitting
                            >
                              {item.title}
                            </a>
                          </Split>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='row bord'>
                  {techData.slice(4, 8).map(item => (
                    <div
                      key={item.id}
                      className={`${
                        item.id == 5
                          ? 'col-md-3 col-6 brands sm-mb30'
                          : item.id == 6
                          ? 'col-md-3 col-6 brands sm-mb30'
                          : item.id == 7
                          ? 'col-md-3 col-6 brands'
                          : item.id == 8
                          ? 'col-md-3 col-6 brands'
                          : ''
                      }`}
                    >
                      <div
                        className='item wow fadeIn'
                        data-wow-delay={`${item.id == 1 ? '.4' : item.id == 2 ? '.7' : item.id == 3 ? '.5' : item.id == 4 ? '.3' : ''}s`}
                      >
                        <div className='img'>
                          {item.icon}
                          <Split>
                            <a
                              href={item.url}
                              target='_blank'
                              rel='noreferrer'
                              className={classNames('link words chars splitting', styles.IconLinks)}
                              data-splitting
                            >
                              {item.title}
                            </a>
                          </Split>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='row'>
                  {techData.slice(8, 12).map(item => (
                    <div
                      key={item.id}
                      className={`${
                        item.id == 9
                          ? 'col-md-3 col-6 brands sm-mb30'
                          : item.id == 10
                          ? 'col-md-3 col-6 brands sm-mb30'
                          : item.id == 11
                          ? 'col-md-3 col-6 brands'
                          : item.id == 12
                          ? 'col-md-3 col-6 brands'
                          : ''
                      }`}
                    >
                      <div
                        className='item wow fadeIn'
                        data-wow-delay={`${item.id == 1 ? '.4' : item.id == 2 ? '.7' : item.id == 3 ? '.5' : item.id == 4 ? '.3' : ''}s`}
                      >
                        <div className='img'>
                          {item.icon}
                          <Split>
                            <a
                              href={item.url}
                              target='_blank'
                              rel='noreferrer'
                              className={classNames('link words chars splitting', styles.IconLinks)}
                              data-splitting
                            >
                              {item.title}
                            </a>
                          </Split>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default ShowcaseMini;
