import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Layout } from "@shared/components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  StyledCarousel,
  SliderImage,
  MiniSliderImage,
  ShowCount,
  Title,
  Price,
  Avatar,
  UserName,
  UserLink,
  UserRow,
  VatText,
  RelatedKeywords,
  KewordLink,
  KeywordCol,
  ProductDetails,
  StyledStack,
  StackTitle,
} from "./ProductLanding.styles";

const keywords = [
  {
    id: 1,
    title: "Master",
  },
  {
    id: 2,
    title: "Character",
  },
  {
    id: 3,
    title: "Mystical",
  },
  {
    id: 4,
    title: "Cute",
  },
  {
    id: 5,
    title: "dragon",
  },
  {
    id: 6,
    title: "Animated",
  },
  {
    id: 7,
    title: "Ancient",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const responsiveMini = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 8, // optional, default to 1.
  }
};

interface ProductLandingProps {
  match: {
    params: {
      id: number;
    };
  };
}

export const ProductLanding: React.FC<ProductLandingProps> = (props) => {
  const { id } = props.match.params;
  return (
    <Layout title={"Home | Assets Store"}>
      <Container>
        <Row>
          <Col xs lg={8}>
            <StyledCarousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              autoPlay={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="carousel-item-padding-40-px"
            >
              <SliderImage src={process.env.PUBLIC_URL + "/slider.webp"} />
              <SliderImage src={process.env.PUBLIC_URL + "/slider1.webp"} />
              <SliderImage src={process.env.PUBLIC_URL + "/slider2.webp"} />
            </StyledCarousel>
            <ShowCount>14/16</ShowCount>
            <StyledCarousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsiveMini}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              autoPlay={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <MiniSliderImage src={process.env.PUBLIC_URL + "/slider.webp"} />
              <MiniSliderImage src={process.env.PUBLIC_URL + "/slider1.webp"} />
              <MiniSliderImage src={process.env.PUBLIC_URL + "/slider2.webp"} />
              <MiniSliderImage src={process.env.PUBLIC_URL + "/slider.webp"} />
              <MiniSliderImage src={process.env.PUBLIC_URL + "/slider1.webp"} />
              <MiniSliderImage src={process.env.PUBLIC_URL + "/slider2.webp"} />
              <MiniSliderImage src={process.env.PUBLIC_URL + "/slider.webp"} />
              <MiniSliderImage src={process.env.PUBLIC_URL + "/slider1.webp"} />
              <MiniSliderImage src={process.env.PUBLIC_URL + "/slider2.webp"} />
            </StyledCarousel>
          </Col>
          <Col xs lg={4}>
            <Title>Wyrms</Title>
            <UserLink href="/">
              <UserRow>
                <Col xs lg={1}>
                  <Avatar
                    roundedCircle={true}
                    src={process.env.PUBLIC_URL + "/asset_item.jpg"}
                  />
                </Col>
                <Col xs lg={11}>
                  <UserName>Dmitriy Dryzhak</UserName>
                </Col>
              </UserRow>
            </UserLink>
            <Price>$25</Price>
            <VatText>Taxes/VAT calculated at checkout</VatText>
            <ProductDetails>
              <StyledStack direction="horizontal" gap={3}>
                <StackTitle>File size</StackTitle>
                <StackTitle className="ms-auto">1.3GB</StackTitle>
              </StyledStack>
              <StyledStack direction="horizontal" gap={3}>
                <StackTitle>Latest version</StackTitle>
                <StackTitle className="ms-auto">1.0</StackTitle>
              </StyledStack>
              <StyledStack direction="horizontal" gap={3}>
                <StackTitle>Latest release date</StackTitle>
                <StackTitle className="ms-auto">Jan 16, 2022</StackTitle>
              </StyledStack>
            </ProductDetails>
            <RelatedKeywords>Related Keywords</RelatedKeywords>
            <Row>
              {keywords.map((keyword) => {
                return (
                  <KeywordCol xs lg={"auto"}>
                    <KewordLink href="/">{keyword.title}</KewordLink>
                  </KeywordCol>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
