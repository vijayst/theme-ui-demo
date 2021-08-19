/** @jsxImportSource theme-ui */

function App() {
  return (
    <div>
      <header
        sx={{
          backgroundColor: 'highlight',
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
            color: 'accent',
            pl: 4,
          }}
        >
          Exotic Expeditions
        </div>
      </header>
    </div>
  );
}

export default App;
