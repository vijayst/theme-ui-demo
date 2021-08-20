/** @jsxImportSource theme-ui */
import { Global } from '@emotion/react';
import { useColorMode } from 'theme-ui';
import Brighten from './Brighten';
import Darken from './Darken';

const tours = [
  {
    title: 'Tour 1',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
    dapibus ultrices in iaculis nunc.`,
  },
  {
    title: 'Tour 2',
    content: `Eu mi bibendum neque egestas congue quisque. Aenean vel elit
    scelerisque mauris pellentesque. Sodales ut etiam sit amet nisl.
    At quis risus sed vulputate.`,
  },
  {
    title: 'Tour 3',
    content: `Nec ullamcorper sit amet risus nullam eget. Gravida quis blandit
    turpis cursus in hac habitasse platea dictumst. Elementum nisi
    quis eleifend quam. Odio ut sem nulla pharetra diam sit amet.`,
  },
];

function App() {
  const [colorMode, setColorMode] = useColorMode();

  function handleModeChange() {
    setColorMode(colorMode === 'default' ? 'dark' : 'default');
  }

  return (
    <div>
      <Global
        styles={() => ({
          '*': {
            boxSizing: 'border-box',
            transition: 'all 200ms',
          },
        })}
      />
      <header
        sx={{
          position: 'fixed',
          width: '100%',
          backgroundColor: 'navbar',
          height: 64,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <div
          sx={{
            fontFamily: 'heading',
            fontSize: 3,
            color: 'white',
            pl: 4,
          }}
        >
          Exotic Expeditions
        </div>
        <div sx={{ height: 24 }} onClick={handleModeChange}>
          {colorMode === 'default' ? <Darken /> : <Brighten />}
        </div>
      </header>
      <main>
        <div
          sx={{
            width: '100vw',
            height: '70vh',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            sx={{
              position: 'absolute',
              zIndex: -1,
              backgroundImage: 'url("/travel-light.jpg")',
              filter: 'blur(2px)',
              width: '100%',
              height: '100%',
            }}
          ></div>
          <div
            sx={{
              position: 'absolute',
              zIndex: -1,
              backgroundColor: 'imageOverlay',
              width: '100%',
              height: '100%',
            }}
          ></div>
          <div sx={{ textAlign: 'center' }}>
            <h1 sx={{ variant: 'styles.h1', color: 'hero' }}>
              Be one with nature
            </h1>
            <button sx={{ variant: 'styles.button' }}>Join us</button>
          </div>
        </div>
        <div
          sx={{
            pl: [5, 5, 5, 6, 7],
            pr: [4, 4, 4, '96px', '224px'],
            py: 5,
            backgroundColor: 'secondary',
            '@media screen and (max-width: 480px)': {
              textAlign: 'center',
            },
          }}
        >
          <h2
            sx={{
              variant: 'styles.h2',
              pl: 3,
              pr: '48px',
            }}
          >
            Upcoming tours
          </h2>
          <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {tours.map((t) => (
              <div
                key={t.title}
                sx={{
                  variant: 'styles.card',
                  position: 'relative',
                  width: [
                    'calc(100% - 32px)',
                    'calc(50% - 32px)',
                    'calc(33.33% - 32px)',
                    'calc(33.33% - 32px)',
                    'calc(33.33% - 32px)',
                  ],
                }}
              >
                <h3 sx={{ variant: 'styles.h3' }}>{t.title}</h3>
                <p sx={{ variant: 'styles.p' }}>{t.content}</p>
                <button
                  sx={{
                    variant: 'styles.button',
                    py: 2,
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                  }}
                >
                  Join us
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
