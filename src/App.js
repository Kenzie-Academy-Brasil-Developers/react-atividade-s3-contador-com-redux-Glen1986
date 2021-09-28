import './App.css';
import Display from './components/Display';
import Button from './components/Button';
//import {actions} from './store/modules/counter/actions';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {addNumber} from './store/modules/counter/actions';
import {lesNumber} from './store/modules/counter/actions';

function App() {

  const [num, setNum] = useState(0);

  const dispatch = useDispatch();
  const handleClickMas = () => {

    dispatch(addNumber(setNum()));
  };
  const handleClickMenos = () => {

    dispatch(lesNumber(setNum()));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Display
          num={num}
          setNum={setNum}
        />
        <Button
          // dispatch={dispatch}
          children={"Add"}
          onClick={() => handleClickMas()}
        />
        <Button
          children={"Les"}
          onClick={() => handleClickMenos()}
        />
      </header>
    </div>
  );
}

export default App;
