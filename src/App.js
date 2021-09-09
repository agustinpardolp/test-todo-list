import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import TodoList from './views/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList/>

      </header>
    </div>
  );
}

export default App;
