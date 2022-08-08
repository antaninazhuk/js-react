import './App.css';
import AddList from './components/AddList';
import AllTask from './components/AllTask';

function App() {
    return (
        <div className='App'>
            <h1>TO DO LIST</h1>,
            <AddList />
            <AllTask />
        </div>
      );
}

export default App;