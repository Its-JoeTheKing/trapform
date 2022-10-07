import './App.css';
import {Form,Input,FormGroup,Label,InputGroup} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Form className='form' method='post' action=''>
        <div className='c1'>

        </div>
        <div className='c2'>
          <h2 className='title'>Trap Form</h2>
          <FormGroup>
            <Label>Username: </Label>
            <Input className='inpt' type='text' />
          </FormGroup>
          <FormGroup>
            <Label>Email: </Label>
            <Input className='inpt' type='email' />
          </FormGroup>
        </div>
      </Form>
    </div>
  );
}

export default App;
