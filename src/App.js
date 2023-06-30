import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <Search />
      <Weather />
    </div>
  );
}

export default App;
