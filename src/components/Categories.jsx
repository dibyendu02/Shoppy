import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'

const Container = styled.div`
    height: 70vh;
    display: flex;
    justify-content: space-around;
    margin: 100px 100px;
    
`
const CategoryCard = styled.div`
    position: relative;
    margin: 40px;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
const CategoryImg = styled.img`
    width: 120%;
    height: 100%;
    object-fit: cover;
    
`
const Title = styled.h1`
    font-size: 30px;
    color: aliceblue;
    margin-bottom: 20px;
`
const Button = styled.button`
    padding: 5px;
    cursor: pointer;
`
const Categories = () => {
  return (
    <Container>
        {categories.map((item) => (
            <CategoryCard>
                <CategoryImg src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </CategoryCard>
        ))}
    </Container>
  )
}

export default Categories