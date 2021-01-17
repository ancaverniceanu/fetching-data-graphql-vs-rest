import ComponentWithGraphqlData from './components/ComponentWithGraphqlData';
import ComponentWithRestData from './components/ComponentWithRestData';
import './App.css';

function App() {
  return (
    <div className="App">
      <ComponentWithGraphqlData />
      <ComponentWithRestData />
    </div>
  );
}

export default App;
