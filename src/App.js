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
            backgroundImage: 'url("/travel-light.jpg")',
            width: '100vw',
            height: '70vh',
            filter: 'blur(2px)',
          }}
        ></div>
      </main>
    </div>
  );
}

export default App;
