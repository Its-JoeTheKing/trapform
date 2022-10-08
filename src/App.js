import './App.css';
import {Form,Input,FormGroup,Label,InputGroup, Button} from 'reactstrap';
import {useState,useEffect} from 'react';

function App() {
  const [user,setUser] = useState('')
  const [email,setEmail] = useState('')
  const [border1,setBorder1] = useState('rgb(194, 194, 194)')
  const [password1,setPassword1] = useState('')
  const [border2,setBorder2] = useState('rgb(194, 194, 194)')
  const [password2,setPassword2] = useState('')
  const [trap,setTrap] = useState('40px')
  const [text,setText] = useState('')

  const check = () => {
    if (email.includes('@') === false) {
      setBorder1('red')
      if (trap === '40px') setTrap('100px')
      else setTrap('40px'); setText('Fix The Erros hhhhhhh')
    }
    else {
      setBorder1('rgb(194, 194, 194)')
    }
    if (password1.length < 8 || password1 !== password2) {
      setBorder2('red')
      if (trap === '40px') setTrap('100px')
      else setTrap('40px')
    } else {
      setBorder2('rgb(194, 194, 194)')
    }
  }
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
      <link href="https://fonts.googleapis.com/css2?family=Acme&family=Bangers&family=Bree+Serif&family=Josefin+Sans&family=Montserrat:wght@500&family=Poppins:wght@500&family=Roboto:wght@500&family=Secular+One&family=Signika+Negative&family=Staatliches&family=Teko&display=swap" rel="stylesheet"/> 
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      <div className='form'>
        <div className='c1'>
          <h1 className='titlee'>- There's A Trap -</h1>
          <h1 className='titlee' style={{marginTop: '10px'}}>{text}</h1>

        </div>
        <div className='c2'>
        <Form className='in-form' >
          <h2 className='title'>Trap Form</h2>
          <FormGroup className='ingrp'>
            <Label className='lab'>Username: </Label><br/>
            <Input className='inpt' type='text' onChange={(e)=>{setUser(e.target.value)}} value={user} placeholder='JohnDoe' />
          </FormGroup>
          <FormGroup className='ingrp'>
            <Label className='lab'>Email: </Label><br/>
            <Input className='inpt' type='email' style={{borderColor: border1}} onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='example@email.com' />
          </FormGroup>
          <FormGroup className='ingrp'>
            <Label className='lab'>Password: </Label><br/>
            <Input className='inpt' type='password' style={{borderColor: border2}} onChange={(e)=>{setPassword1(e.target.value)}} value={password1} placeholder='********' />
          </FormGroup>
          <FormGroup className='ingrp'>
            <Label className='lab'>Confirm Password: </Label><br/>
            <Input className='inpt' type='password' style={{borderColor: border2}} onChange={(e)=>{setPassword2(e.target.value)}} value={password2} placeholder='********' />
          </FormGroup>
          <Button className='sup' style={{marginTop: trap}} onClick={()=>{setText('Congratulations hhhhh')}} onMouseOver={()=>{check()}} >Sign Up</Button>
        </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
