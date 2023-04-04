import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: teal;
    display: flex;
    justify-content: center;
    color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shiping on Order more than $50
    </Container>
  )
}

export default Announcement