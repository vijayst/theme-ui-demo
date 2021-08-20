/** @jsxImportSource theme-ui */

function App() {
  return (
    <div>
      <header
        sx={{
          position: 'fixed',
          width: '100%',
          backgroundColor: 'navbar',
          height: 64,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
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
              backgroundColor: 'rgba(5, 82, 186, .2)',
              width: '100%',
              height: '100%',
            }}
          ></div>
          <div sx={{ textAlign: 'center' }}>
            <h1 sx={{ variant: 'styles.h1', color: 'secondary' }}>
              Be one with nature
            </h1>
            <button sx={{ variant: 'styles.button' }}>Join us</button>
          </div>
        </div>
        <div
          sx={{
            px: 7,
            py: 5,
            backgroundColor: 'secondary',
          }}
        >
          <h2 sx={{ variant: 'styles.h2', px: 3 }}>Upcoming tours</h2>
          <div sx={{ display: 'flex' }}>
            <div sx={{ variant: 'styles.card', position: 'relative' }}>
              <h3 sx={{ variant: 'styles.h3' }}>Tour 1</h3>
              <p sx={{ variant: 'styles.p' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
                dapibus ultrices in iaculis nunc.
              </p>
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
            <div sx={{ variant: 'styles.card', position: 'relative' }}>
              <h3 sx={{ variant: 'styles.h3' }}>Tour 2</h3>
              <p sx={{ variant: 'styles.p' }}>
                Eu mi bibendum neque egestas congue quisque. Aenean vel elit
                scelerisque mauris pellentesque. Sodales ut etiam sit amet nisl.
                At quis risus sed vulputate.
              </p>
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
            <div sx={{ variant: 'styles.card', position: 'relative' }}>
              <h3 sx={{ variant: 'styles.h3' }}>Tour 3</h3>
              <p sx={{ variant: 'styles.p' }}>
                Nec ullamcorper sit amet risus nullam eget. Gravida quis blandit
                turpis cursus in hac habitasse platea dictumst. Elementum nisi
                quis eleifend quam. Odio ut sem nulla pharetra diam sit amet.
              </p>
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
