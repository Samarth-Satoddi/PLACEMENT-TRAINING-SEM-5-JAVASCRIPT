import "./App.css";
import Hero from "./assets/component/hero";

function App() {
  const trainername = "SAMARTH SATODDI";
  const trainingday = 10;

  return (
    <main className="App">
      <Hero />
      <section className="App-header">
        <p className="daylabel">React day</p>
        <br />
        <h2 className="title">College course explore</h2>
        <p>Trainer: {trainername}</p>
        <p>Training Day: {trainingday}</p>
        <p>used PYTHON, REACT, LANGCHAIN</p>
      </section>
    </main>
  );
}

export default App;
