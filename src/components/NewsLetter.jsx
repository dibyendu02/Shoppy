import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  color: gray;
`
const Desc = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
`
const InputContainer = styled.div`
  width: 40vw;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
`
const Message = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
  font-size: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products.</Desc>
        <InputContainer>
          <Message placeholder='your email'/>
          <Button><Send/></Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter