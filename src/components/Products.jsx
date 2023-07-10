import { FavoriteOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

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

const Products = ({cat,filters,sort}) => {
    const[products,setProducts] = useState([]);
    const[filteredProducts,setFilteredProducts] = useState([]);
    console.log(cat,filters,sort)
    const navigate = useNavigate();
    useEffect(() => {
        const getProducts = async () =>{
            try{
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`
                : "http://localhost:5000/api/products");
                setProducts(res.data);
                console.log(products)
            }catch(err){}
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat && 
        setFilteredProducts(
            products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            )
            )
        );
    },[products,cat,filters])
    useEffect(() =>{
        if( sort === "newest"){
            setFilteredProducts((prev) => 
            [...prev].sort((a,b) => a.createdAt - b.createdAt)
            );
        } else if( sort === "asc"){
            setFilteredProducts((prev) => 
            [...prev].sort((a,b) => a.price - b.price)
            );
        } else{
            setFilteredProducts((prev) => 
            [...prev].sort((a,b) => b.price - a.price)
            );
        }
    },[sort])

    return (
    <Container>
        {cat ? filteredProducts.map((item) => (
            <ProductCard>
                <Img src={item.img} />
                <Info>
                    <Icon><ShoppingCartOutlined/></Icon>
                    <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined/>
                    </Link>
                    </Icon>
                    <Icon><FavoriteOutlined/></Icon>                
                </Info>
            </ProductCard>
        ))
        : products.slice(0,4).map((item) => (
            
            <ProductCard>
                <Img src={item.img} />
                <Info>
                    <Icon><ShoppingCartOutlined/></Icon>
                    <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined/>
                    </Link>
                    </Icon>
                    <Icon><FavoriteOutlined/></Icon>                
                </Info>
            </ProductCard>
            
        ))
        }
    </Container>
  )
}

export default Products