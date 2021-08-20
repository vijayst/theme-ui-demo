/** @jsxImportSource theme-ui */

function App() {
  return (
    <div>
      <header
        sx={{
          position: 'fixed',
          width: '100%',
          backgroundColor: 'primary',
          opacity: 0.7,
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
          <h2 sx={{ variant: 'styles.h2' }}>Upcoming tours</h2>
          <div sx={{ display: 'flex' }}>
            <div sx={{ variant: 'styles.card' }}>Tour 1</div>
            <div sx={{ variant: 'styles.card' }}>Tour 2</div>
            <div sx={{ variant: 'styles.card' }}>Tour 3</div>
            <div sx={{ variant: 'styles.card' }}>Tour 4</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
