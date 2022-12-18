import "./App.css";
import Grid from "./components/Grid";
import TopBar from "./components/Topbar";
import SearchContextProvider from "./context/searchContextProvider";

function App() {
  return (
    <SearchContextProvider>
      <div>
        <TopBar />
        <div
          style={{
            width: "100%",
            padding: 2,
            borderBottom: 1,
            borderColor: "black",
          }}
        />
        <Grid />
      </div>
    </SearchContextProvider>
  );
}

export default App;
