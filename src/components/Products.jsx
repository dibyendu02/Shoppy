import { FavoriteOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 30px;
    align-items: center;
    justify-content: center;

`
const Info = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.1);
    opacity: 0;
    transition: all 0.5s ease;
`
const ProductCard = styled.div`
    position: relative;
    background-color: #fcf1ed;
    margin: 10px;
    &:hover ${Info}{
        opacity: 1;
    }
    
`

const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`
const Img = styled.img`
    width: 300px;
    height: 300px;
    
    object-fit: cover;
    
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <ProductCard>
                <Img src={item.img} />
                <Info>
                    <Icon><ShoppingCartOutlined/></Icon>
                    <Icon><SearchOutlined/></Icon>
                    <Icon><FavoriteOutlined/></Icon>                
                </Info>
            </ProductCard>
        ))}
    </Container>
  )
}

export default Products