import './App.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [age, setAge] = useState(0);
    const [upperRate, setUpperRate] = useState(0);
    const [lowerRate, setLowerRate] = useState(0);

    function calculate() {
      setUpperRate((220 - age)*0.85);
      setLowerRate((220 - age)*0.65);
    }

    return (

    <form class="form"> 
    <h2><strong>Heart rate limits calculator</strong></h2>
  <div class="form-group">
    <Form.Label>Age</Form.Label>
    <input class="form-control" type="number" value={age} onChange={e => setAge(e.target.value)}></input>
  </div>
  <div class="form-group">
    <Form.Label>Heart rate limits</Form.Label>
    <input class="form-control" type="numer" value={lowerRate+ " - "+upperRate}></input>
  </div>
  <div>
    <p></p>
  </div>
  <Button type="button" onClick={calculate}>calculate</Button>
</form>

    );

}

export default App;
