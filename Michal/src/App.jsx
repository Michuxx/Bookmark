import "./App.css";
import Content from "./components/content/Content";
import Manager from "./components/content/manager";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Content>
        <Manager />
      </Content>
    </div>
  );
}

export default App;
