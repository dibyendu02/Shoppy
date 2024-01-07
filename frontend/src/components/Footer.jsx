import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  /* padding: 20px; */
  ${mobile({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Heading = styled.h1``;
const Description = styled.p`
  padding-block: 20px;
`;
const Socials = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  background-color: #${(props) => props.color};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-inline: ${(props) => props.margin}px;
`;

const Center = styled.div`
  flex: 1;
  /* padding-left: 2%; */
  padding: 20px;
`;
const Title = styled.h3`
  font-size: 20px;
  margin-block: 15px;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  cursor: pointer;
  margin-block: 2px;
`;
const Right = styled.div`
  flex: 1;
  ${mobile({
    backgroundColor: "#fff8f8",
    padding: "20px",
  })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  const navigate = useNavigate();
  const handlingHomeButton = () => {
    navigate("/");
  };
  const handlingProductButton = () => {
    navigate("/productlist");
  };
  const handlingCartButton = () => {
    navigate("/cart");
  };

  return (
    <Container>
      <Left>
        <Heading>SHOPPY.</Heading>
        <Description>
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release
        </Description>
        <Socials>
          <SocialIcon color="F7D0C8">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="F7D0C8" margin="10">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="F7D0C8">
            <Twitter />
          </SocialIcon>
        </Socials>
      </Left>
      <Center>
        <Title>Quick Links</Title>
        <List>
          <ListItem onClick={handlingHomeButton}>Home</ListItem>
          <ListItem onClick={handlingCartButton}>Cart</ListItem>
          <ListItem onClick={handlingProductButton}>Man Fashion</ListItem>
          <ListItem onClick={handlingProductButton}>Woman Fashion</ListItem>
          <ListItem onClick={handlingProductButton}>Categories</ListItem>
          <ListItem onClick={handlingProductButton}>Accessories</ListItem>
          <ListItem onClick={handlingCartButton}>My Account</ListItem>
          <ListItem onClick={handlingCartButton}>Order Tracking</ListItem>
          <ListItem onClick={handlingProductButton}>Wish List</ListItem>
          <ListItem onClick={handlingCartButton}>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 62 Kolkata Bidhan Sarani
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 1234567890
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} /> contact@shoppy.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
