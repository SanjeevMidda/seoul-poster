import "./index.css";

function App() {
  return (
    <div className="App">
      {/* main container holding all elements */}
      <div className="mainContainer">
        {/* header elements */}
        <header>
          <h1>SEOUL</h1>
          <h4>11st August 2024</h4>
        </header>

        {/* main section with circle */}
        <section>
          <div className="mainCircle"></div>
          <svg
            viewBox="0 0 1180 2951"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="line"
          >
            <path
              d="M1179.5 0.5C-765.7 635.7 127.333 2231.83 817 2950.5"
              stroke="black"
            />
          </svg>
        </section>

        {/* footer elements */}
        <footer>
          <div className="address">
            <h3>240 Olympic-ro,</h3>
            <h3>Songpa District,</h3>
            <h3>Seoul,</h3>
            <h3>South Korea</h3>
          </div>

          <div className="date">
            <h2>20</h2>
            <h2>24</h2>
          </div>
        </footer>

        <div className="cover"></div>
      </div>
    </div>
  );
}

export default App;
