import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'

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
  const location = useLocation();
  const [filters, setFilter] = useState({});
  const [sort,setSort] = useState("newest");
  const cat =  location.pathname.split("/")[2];
  const handleFilters = (event) => {
    setFilter({
      ...filters,
      [event.target.name] : event.target.value,
    })
  }
  // console.log(cat,filters,sort);
  // useEffect(() => {
  //   window. scrollTo(0, 0);
  // },[])
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name='color'  onChange={handleFilters}>
            <Option disabled selected>Color</Option>
            <Option>blue</Option>
            <Option>gray</Option>
            <Option>yellow</Option>
            <Option>red</Option>
            <Option>pink</Option>
            <Option>brown</Option>

          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled  selected>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={(ev) => {setSort(ev.target.value)}}>
            <Option disabled  selected>Sort By</Option>
            <Option value="newest">Latest</Option>
            <Option value="asc">Price Low to High</Option>
            <Option value="desc">Price High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default ProductList