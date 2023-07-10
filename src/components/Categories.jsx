import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import { mobile } from '../responsive'
import { Link, useNavigate } from 'react-router-dom'


const Container = styled.div`
    height: 70vh;
    display: flex;
    justify-content: space-around;
    margin: 100px 100px;
    display: flex;
    ${mobile({ 
        flexDirection: "column",
        margin: 0,
        height: "auto",
        width: "94vw"
        
    })}
    
`
const CategoryCard = styled.div`
    position: relative;
    margin: 40px;
    ${mobile({ 
        
        marginLeft: 0,
        paddingRight: "2px",
        height: "260px",
        marginBlock: 0
        
        
    })}
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
    text-align: center;
    padding-left: 5%;
`
const Button = styled.button`
    padding: 5px;
    cursor: pointer;
`
const Categories = () => {
    const navigate = useNavigate();
    
  return (
    <Container>
        {categories.map((item) => (
            <CategoryCard>
            <Link to={`products/${item.cat}`}>
                <CategoryImg src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
            </CategoryCard>
        ))}
    </Container>
  )
}

export default Categories