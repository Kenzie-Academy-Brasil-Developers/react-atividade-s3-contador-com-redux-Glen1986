import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import {actions} from './store/modules/counter';
import {useDispatch} from 'react';
import {useState} from 'react';

function App() {

  const dispatch = useDispatch();
  const [num, setNum] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Button
          children={"Add"}
          onClick={() => console.log("mas")}
        />
        <Button
          children={"Les"}
          onClick={() => console.log("menos")}
        />
      </header>
    </div>
  );
}

export default App;
