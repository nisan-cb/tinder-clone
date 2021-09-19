import './App.css';
import FunctionButtons from './components/FunctionButtons';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
function App() {
  return (
     <div className="App">
      {/* Header */}
      <Header>
      </Header>
      {/* Cards */}
      <TinderCards />
      {/* Buttons */}
      <FunctionButtons />
    </div>
  );
}

export default App;
