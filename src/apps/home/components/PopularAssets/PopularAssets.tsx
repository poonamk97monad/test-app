import React from "react";
import { Row, Col, Card, Stack } from "react-bootstrap";
import {
  Header,
  StyledCol,
  SeeMoreLink,
  StyledStack,
  GlobalStyle, StyledContainer, PopularSection, PopularItem, PopularAsset, PopularDiv, PopularInfo, ItemName, ItemLink, ItemRating, 
  ItemStar, ItemLike, LikeCount, ItemPrice, ItemAmount, ItemAddCart, ItemButton, PopularImg, ImgOverlay, LikeButton
} from "./PopularAssets.styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const productList = [
  {
    id: 1,
    title: "DreamOS - Complete OS UI",
    image: "asset_item.jpg",
    profile: {
      id: 1,
      name: "MICHSKY",
    },
  },
  {
    id: 1,
    title: "DreamOS - Complete OS UI",
    image: "asset_item.jpg",
    profile: {
      id: 1,
      name: "MICHSKY",
    },
  },
  {
    id: 1,
    title: "DreamOS - Complete OS UI",
    image: "asset_item.jpg",
    profile: {
      id: 1,
      name: "MICHSKY",
    },
  },
  {
    id: 1,
    title: "DreamOS - Complete OS UI",
    image: "asset_item.jpg",
    profile: {
      id: 1,
      name: "MICHSKY",
    },
  },
  {
    id: 1,
    title: "DreamOS - Complete OS UI",
    image: "asset_item.jpg",
    profile: {
      id: 1,
      name: "MICHSKY",
    },
  },
  {
    id: 1,
    title: "DreamOS - Complete OS UI",
    image: "asset_item.jpg",
    profile: {
      id: 1,
      name: "MICHSKY",
    },
  },
];

const ratingStars = <FontAwesomeIcon icon={faStar} />

interface HomeProps {}

export const PopularAssets: React.FC<HomeProps> = () => {
  return (
    <>
      <StyledStack direction="horizontal" gap={3}>
        <Header>Popular assets</Header>
        <SeeMoreLink href="/" className="ms-auto">
          See More
        </SeeMoreLink>
      </StyledStack>
      <Row>
        <Col md={{ offset: 11 }}></Col>
      </Row>
      
      <PopularSection>
          <Row>
            {productList.map((item) => {
            return (

              <Col md={2} xs={12}>

                <PopularAsset>
                    <PopularDiv>
                      <LikeButton>
                        
                      </LikeButton>
                      <ItemLink href={"/products/" + item.id} className="assetLink">

                        <PopularImg>
                          <img src={process.env.PUBLIC_URL + "/asset_item.jpg"} />
                          <ImgOverlay className="overlaySection">Quick Look</ImgOverlay>
                        </PopularImg>

                        <PopularInfo className="popularInfo">

                          <a className="popularTitle">{item.profile.name}</a>

                          <ItemName>{item.title}</ItemName>

                          <ItemRating>
                            <ItemStar>
                              <span className="ratingStars">{ ratingStars } { ratingStars } { ratingStars } { ratingStars } { ratingStars }</span>
                              <span>(217)</span>
                            </ItemStar>
                            <ItemLike>
                              <LikeCount className="likeCount"><FontAwesomeIcon icon={ faHeart } />(5964)</LikeCount>
                            </ItemLike>
                          </ItemRating>

                          <ItemPrice>
                            <ItemAmount>
                              <p>$20</p>
                            </ItemAmount>
                            <ItemAddCart>
                              <ItemButton title="Add to Cart"><FontAwesomeIcon icon={faShoppingBag} />Add to Cart</ItemButton>
                            </ItemAddCart>
                          </ItemPrice>

                        </PopularInfo>

                      </ItemLink>
                    </PopularDiv>
                </PopularAsset>
              </Col>
                  
                );
              })}
          </Row>
      </PopularSection>
    </>
  );
};
