import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import styled from 'styled-components';
import { login } from '../redux/apiCalls';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
    background-color: white;
    width: 280px;
    padding: 20px;
    border-radius: 2%;
`
const Title = styled.h1`
    font-weight: 400;
    font-size: 20px;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    
    
`
const Input = styled.input`
    width: 270px;
    margin-right: 10px;
    margin-block: 10px;
    padding: 10px;
    
`
const Agreement = styled.div`
    padding: 10px 5px;
    font-size: 16px;
`
const Button = styled.button`
    background-color: teal;
    color: white;
    padding: 10px 40px;
    margin: 10px 0;
    border: 1px solid teal;
    cursor: pointer;
    &:disabled{
      color: green;
      cursor: not-allowed;
    }
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
  font-size: 14px;
`



const Login = ({user}) => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const {error,isFetching} = useSelector((state) => state.user );
  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch,{username,password});
  }
  return (
    
        <Container>
        {user && <Navigate to="/" />}
        <Wrapper>
            <Title>LOG IN</Title>
            <Form>
            <Input placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/>
            <Input placeholder="password" type='password' onChange={(e) => {setPassword(e.target.value)}}/>
            <Button onClick={handleSubmit} disabled={isFetching}>SIGN IN</Button>
            {error && <Error>Something went wrong.....</Error>}
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
        </Container>
    
  )
}

export default Login