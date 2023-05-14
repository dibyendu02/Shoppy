import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Title = styled.h3`
  font-size: 30px;
  padding-left: 30px;
  padding-block: 20px;
  
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 30px;
`
const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`
const FilterText = styled.p`
  padding-right: 10px;
  font-weight: 600;
  ${mobile({   
        marginBottom: "10px"
    })}
`
const Select = styled.select`
  margin-right: 10px;
`
const Option = styled.option``

const ProductList = () => {
  useEffect(() => {
    window. scrollTo(0, 0);
    console.log("sdf");
  },[])
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
            <Option>Red</Option>
            <Option>Pink</Option>
            <Option>Sky Blue</Option>

          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option disabled selected>Sort By</Option>
            <Option>Latest</Option>
            <Option>Popular</Option>
            <Option>Price High to Low</Option>
            <Option>Price Low to High</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default ProductList