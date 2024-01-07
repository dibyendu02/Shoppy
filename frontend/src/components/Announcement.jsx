import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    position: fixed;
    top: 0;
    margin-bottom: 40px;
    width: 100vw;
    background-color: teal;
    display: flex;
    justify-content: center;
    color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    ${mobile({fontSize: "14px"})}
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shiping on Order more than ₹500
    </Container>
  )
}

export default Announcement