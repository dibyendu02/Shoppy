import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Navigate, useNavigate } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
    background-color: white;
    width: 500px;
    padding: 20px;
    border-radius: 2%;
    ${mobile({   
        width: "80%",
        textAlign: "center"
    })}
`
const Title = styled.h1`
    font-weight: 400;
    font-size: 20px;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    ${mobile({   
        justifyContent: "center"
    })}
    
`
const Input = styled.input`
    width: 40%;
    margin-right: 10px;
    margin-block: 10px;
    padding: 10px;
    ${mobile({   
        width: "80%",
        
    })}
    
`
const Agreement = styled.div`
    padding: 10px 5px;
    font-size: 12px;
`
const Warning = styled.span`
    color: red;
    font-size: 12px;
`
const Button = styled.button`
    background-color: teal;
    color: white;
    padding: 10px 40px;
    margin: 10px 0;
    border: 1px solid teal;
    cursor: pointer;
`


const Register = ({user}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const {error,isFetching}  = useSelector((state) => state.register );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch,{username,email,password})
        .then(() =>{
            if(!error){
                navigate("/login");
            }
        });
    }
    
    
  return (

        <Container>
        {user && <Navigate to="/" />}
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
            {/* <Input placeholder="name" />
            <Input placeholder="last name" /> */}
            <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="password" type='password' onChange={(e) => setPassword(e.target.value)}/>
            <Input placeholder="confirm password" type='password' onChange={(e) => setConPassword(e.target.value)}/>
            {(password !== conPassword) && <Warning> password and confirm password isn't same </Warning>}
            <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={handleClick}>CREATE</Button>
            </Form>
        </Wrapper>
        </Container>
    
  )
}

export default Register