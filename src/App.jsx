import { useEffect, useMemo, useState } from 'react';
import siteLogo from './assets/site-logo.svg';
import iconLinkedin from './assets/icon-linkedin.svg';
import iconGithub from './assets/icon-github.svg';
import iconEmail from './assets/icon-email.svg';

const initialState = {
  code: '',
  key: '',
  keyCode: 0,
};

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [key, setKey] = useState(initialState);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { code, key, keyCode } = e;
      setKey({
        code,
        key,
        keyCode,
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='flex flex-col h-screen px-6 sm:px-14 max-w-7xl mx-auto'>
      <nav className='h-14 sm:h-24 flex items-center'>
        <a href='https://adamsisk.info'>
          <img
            src={siteLogo}
            className='sm:h-14'
            height='56'
            alt='A S site logo'
          />
        </a>
      </nav>
      <div className='flex flex-1 flex-col items-center justify-center'>
        <div className='text-2xl font-bold'>Key Down</div>
        <div className='text-xl font-bold'>code: {key.code}</div>
        <div className='text-xl font-bold'>key: {key.key}</div>
        <div className='text-xl font-bold'>keyCode: {key.keyCode}</div>
      </div>
      <footer className='h-24 sm:h-36 lg:h-52 flex justify-end'>
        <div className='flex flex-col justify-center items-end h-full sm:gap-2 lg:gap-4'>
          <p className='block uppercase'>© Adam Sisk {year}</p>
          <div className='flex gap-4'>
            <a
              href='https://www.linkedin.com/in/adamsisk/'
              aria-label='linkedin'
              title='visit me on linkedin'
            >
              <img
                width='24'
                height='24'
                src={iconLinkedin}
                className='icon linkedin'
                alt='linkedin'
              />
            </a>
            <a
              href='https://github.com/calamityadam'
              aria-label='github'
              title='visit me on github'
            >
              <img
                width='24'
                height='24'
                src={iconGithub}
                className='icon github'
                alt='github'
              />
            </a>
            <a
              href='mailto:sisk@hey.com?subject=Hi%20Adam!'
              aria-label='email'
              title='send me an email'
            >
              <img
                width='24'
                height='24'
                src={iconEmail}
                className='icon email'
                alt='email'
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
