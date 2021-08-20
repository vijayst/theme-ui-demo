/** @jsxImportSource theme-ui */

function App() {
  return (
    <div>
      <header
        sx={{
          backgroundColor: 'primary',
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
          <div sx={{ textAlign: 'center' }}>
            <h1 sx={{ variant: 'styles.h1', color: 'accent' }}>
              Be one with nature
            </h1>
            <button sx={{ variant: 'styles.button' }}>Join us</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
