import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <Search />
        <h1>Hello from React </h1>

        {/* <Weather city="Paris" />; */}
      </header>
    </div>
  );
}

export default App;
