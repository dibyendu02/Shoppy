import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { Navigate, useNavigate } from "react-router-dom";

const Container = styled.div`
    /* height: 40px; */
    /* background-color: black;
    color: white; */
    padding: 10px;
    align-items: center;
    display: flex;
    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    ${mobile({paddingLeft: 0})}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    padding: 2px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 2px;
    
    ${mobile({
        marginLeft: 0,
        
    })}
`
const Input = styled.input`
    border: none;
    
    
    ${mobile({width: "60px"})}
`

const Mid = styled.div`
    flex: 1;
    text-align: center;
    cursor: pointer;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "22px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
`
const MenuItem = styled.button`
    font-size: 14px;
    cursor: pointer;
    margin-left: 10px;
    background-color: white;
    border: none;
    ${mobile({fontSize: "10px"})}
`
const Navbar = () => {

    const navigate = useNavigate();
    const handlingIconButton = () => {
        navigate("/");
    }
    const handlingRegisterButton = () => {
        navigate("/register");
    }
    const handlingLoginButton = () => {
        navigate("/login");
    }
    const handlingCartButton = () => {
        navigate("/cart");
    }
    return (
        <Container>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <SearchIcon style={{color: "gray", fontSize: "16px"}}/>
                </SearchContainer>
            </Left>
            <Mid onClick={handlingIconButton}><Logo>SHOPPY.</Logo></Mid>
            <Right>
                <MenuItem onClick={handlingRegisterButton}>REGISTER</MenuItem>
                <MenuItem onClick={handlingLoginButton}>SIGN IN</MenuItem>
                <MenuItem onClick={handlingCartButton}>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </MenuItem>
            </Right>
        </Container>
    )
}

export default Navbar