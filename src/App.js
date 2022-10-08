import './App.css';
import {Form,Input,FormGroup,Label,InputGroup, Button} from 'reactstrap';
import FirstIll from './assets/svgs/1044.jpg'

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
      <link href="https://fonts.googleapis.com/css2?family=Acme&family=Bangers&family=Bree+Serif&family=Josefin+Sans&family=Montserrat:wght@500&family=Poppins:wght@500&family=Roboto:wght@500&family=Secular+One&family=Signika+Negative&family=Staatliches&family=Teko&display=swap" rel="stylesheet"/> 
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      <div className='form'>
        <div className='c1'>
        </div>
        <div className='c2'>
        <Form className='in-form'  method='post' action=''>
          <h2 className='title'>Trap Form</h2>
          <FormGroup className='ingrp'>
            <Label>Username: </Label><br/>
            <Input className='inpt' type='text' />
          </FormGroup>
          <FormGroup className='ingrp'>
            <Label>Email: </Label><br/>
            <Input className='inpt' type='email' />
          </FormGroup>
          <FormGroup className='ingrp'>
            <Label>Password: </Label><br/>
            <Input className='inpt' type='password' />
          </FormGroup>
          <FormGroup className='ingrp'>
            <Label>Confirm Password: </Label><br/>
            <Input className='inpt' type='password' />
          </FormGroup>
          <Button className='sup' >Sign Up</Button>
        </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
