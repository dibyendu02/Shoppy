import React from 'react'
import styled from 'styled-components';

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
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;



const Login = () => {
  return (
    
        <Container>
        <Wrapper>
            <Title>LOG IN</Title>
            <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>SIGN IN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
        </Container>
    
  )
}

export default Login