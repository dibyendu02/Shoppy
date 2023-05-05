import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: yellow; */
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props => props.direction === "left" && "20px")};
    right: ${(props => props.direction === "right" && "20px")};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`
const Slide = styled.div`
    width: 90vw;
    display: flex;
    align-items: center;
    padding: 0 100px;
    background-color: #${(props) => props.bg};

`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -105}vw);
    

`
const ImageContainer = styled.div`
    flex: 1;
    
`
const Image = styled.img`
    height: 80vh;
`
const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    font-size: 30px;
    margin: 30px 0;
    font-weight: 500;
    letter-spacing: 5px;
`
const Button = styled.button`
    font-size: 20px;
    padding: 10px;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex >0 ? slideIndex-1 : 2);
        }else{
            setSlideIndex(slideIndex <2 ? slideIndex+1 : 0);
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftTwoToneIcon/>
        </Arrow>
        
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((items) => (
                <Slide bg={items.bg}>
                <ImageContainer>
                    <Image src={items.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{items.title}</Title>
                    <Description>{items.desc}</Description>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        

        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightTwoToneIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider