import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const Wrapper = styled.div`
    display: flex;
    
    ${mobile({   
        flexDirection: "column"
    })}
`
const Title = styled.h1`
    font-weight: 200;
    font-size: 40px;
`
const ImgContainer = styled.div`
    flex: 1;
    margin: 50px;
    ${mobile({   
        margin: "20px"
    })}
`
const Image = styled.img`
    height: 90vh;
    width: 100%;
    object-fit: cover;
    ${mobile({   
        height: "400px"
    })}
`
const InfoContainer = styled.div`
    flex: 1;
    width: 20%;
    margin: 50px 0;
    padding-right: 100px;
    ${mobile({   
        padding: "30px",
        width: "80%",
        margin: 0
    })}
`
const Desc = styled.p`
    margin: 20px 0;

`
const Price = styled.h3`
    font-weight: 400;
    font-size: 20px;
`
const FilterContainer = styled.div`
  display: flex;
`

const Filter = styled.div`
  display: flex;
  margin-right: 20px;
  margin-block: 30px;
`
const FilterText = styled.p`
  padding-right: 10px;
  font-weight: 600;
`
const FilterColor = styled.div`
    background-color: ${props => props.color};
    height: 15px;
    width: 15px;
    margin: 2px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid black;
`
const Select = styled.select`
  margin-right: 10px;
`
const Option = styled.option`
    padding: 5px;
`

const CartContainer = styled.div`display: flex;`
const Counter = styled.div`
    display: flex;
    margin-right: 50px;
`

const Amount = styled.p`
    font-size: 20px;
    border: 1px solid teal;
    padding: 2px 20px;
    margin: 0 10px;

`

const Button = styled.button`
    background-color: white;
    padding: 5px 20px;
    border: 1px solid teal;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: aliceblue;
    }
`

const Product = () => {
    useEffect(() => {
        window. scrollTo(0, 0);
    },[])

    const location = useLocation();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState([]);
    const id =  location.pathname.split("/")[2];
    console.log(id)
    useEffect(() => {
        const getProduct = async () =>{
            try{
                const res = await axios.get(`http://localhost:5000/api/products/find/`+id);
                setProduct(res.data);
                console.log(product)
            }catch(err){}
        };
        getProduct();
    }, [id]);
    const handleQuantity = (type) => {
        if(type === "dec"){
            if(quantity>1) setQuantity(quantity-1);
        }
        else{
            setQuantity(quantity+1);
        }
    }
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>
                    {product.desc}
                </Desc>
                <Price>₹ {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterText>Color</FilterText>
                        
                        {/* {product.color?.map((c) => (
                                <FilterColor color={c} key={c}/>
                        ))} */}
                        <FilterColor color={product.color}/>
                        
                        
                    </Filter>
                    <Filter>
                        <FilterText>Size</FilterText>
                        <Select>
                            {product.size?.map((s) => (
                                <Option key={s}>{s}</Option>
                                
                            ))}
                            
                            
                        </Select>
                    </Filter>
                </FilterContainer>
                <CartContainer>
                <Counter>
                    <Remove onClick={()=>handleQuantity("dec")} />
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity("inc")} />
                </Counter>
                <Button>ADD TO CART</Button>
            </CartContainer>
            </InfoContainer>
            
        </Wrapper>
        
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Product