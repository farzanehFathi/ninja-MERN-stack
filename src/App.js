import "./App.css";
import Weather from "./Weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <h1>Hello from React </h1>

        {/* <Weather city="Paris" />; */}
      </header>
    </div>
  );
}

export default App;
