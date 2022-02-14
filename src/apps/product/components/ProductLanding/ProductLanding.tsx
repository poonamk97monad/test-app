import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Card, Tab, Nav } from "react-bootstrap";
import { Layout } from "@shared/components";
import "react-multi-carousel/lib/styles.css";
import FileTree from "react-file-treeview";

import {
  StyledCarousel,
  SliderImage,
  MiniSliderImage,
  MiniSliderImageWrapper,
  MiniSliderImageOverlay,
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
  StyledTabs,
  StyledTab,
  PackageSize,
  PackageDevider,
  PakcagePreviewCol,
  FilePreview,
  FilePreviewTitle,
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

const slidesToSlide = 8;

const responsiveMini = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: slidesToSlide,
    slidesToSlide: slidesToSlide, // optional, default to 1.
  },
};

const images: string[] = [
  process.env.PUBLIC_URL + "/slider.webp",
  process.env.PUBLIC_URL + "/slider1.webp",
  process.env.PUBLIC_URL + "/slider2.webp",
  process.env.PUBLIC_URL + "/slider.webp",
  process.env.PUBLIC_URL + "/slider1.webp",
  process.env.PUBLIC_URL + "/slider2.webp",
  process.env.PUBLIC_URL + "/slider.webp",
  process.env.PUBLIC_URL + "/slider1.webp",
  process.env.PUBLIC_URL + "/slider2.webp",
  process.env.PUBLIC_URL + "/slider.webp",
  process.env.PUBLIC_URL + "/slider1.webp",
  process.env.PUBLIC_URL + "/slider2.webp",
  process.env.PUBLIC_URL + "/slider.webp",
  process.env.PUBLIC_URL + "/slider1.webp",
  process.env.PUBLIC_URL + "/slider2.webp",
  process.env.PUBLIC_URL + "/slider.webp",
  process.env.PUBLIC_URL + "/slider1.webp",
  process.env.PUBLIC_URL + "/slider2.webp",
  process.env.PUBLIC_URL + "/slider.webp",
  process.env.PUBLIC_URL + "/slider1.webp",
  process.env.PUBLIC_URL + "/slider2.webp",
  process.env.PUBLIC_URL + "/slider.webp",
  process.env.PUBLIC_URL + "/slider1.webp",
  process.env.PUBLIC_URL + "/slider2.webp",
];

interface ProductLandingProps {
  match: {
    params: {
      id: number;
    };
  };
}

export const ProductLanding: React.FC<ProductLandingProps> = (props) => {
  const carouselRef = useRef();
  const carouselMiniRef = useRef();
  const { id } = props.match.params;
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMiniSlide, setActiveMiniSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const data = {
    name: "treeview",
    id: 1,
    toggled: true,
    child: [
      {
        name: "folder1",
        id: 2,
        child: [
          {
            name: "folder2",
            id: 5,
            child: [
              { name: "file3.py", id: 6, child: [] },
              { name: "file4.cpp", id: 7, child: [] },
            ],
          },
          { name: "file1.js", id: 3, child: [] },
          { name: "file2.ts", id: 4, child: [] },
        ],
      },
    ],
  };
  //create Collapse button data
  const [collapseAll, setCollapseAll] = useState(false);
  const handleCollapseAll = (value) => setCollapseAll(value);

  //Create file action data*
  const handleFileOnClick = (file) => {
    console.log(file);
  };

  const action = {
    fileOnClick: handleFileOnClick,
  };

  //Create Decoration data*
  const treeDecorator = {
    showIcon: true,
    iconSize: 18,
    textSize: 15,
    showCollapseAll: true,
  };

  useEffect(() => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current?.goToSlide(activeSlide);
    }
    if (
      carouselRef &&
      carouselRef.current &&
      carouselMiniRef &&
      carouselMiniRef.current
    ) {
      if (activeSlide == slidesToSlide + activeMiniSlide) {
        carouselMiniRef.current?.goToSlide(slidesToSlide + activeMiniSlide);
        setActiveMiniSlide(slidesToSlide + activeMiniSlide);
      }
      if (activeSlide < activeMiniSlide) {
        carouselMiniRef.current?.goToSlide(activeMiniSlide - slidesToSlide);
        setActiveMiniSlide(activeMiniSlide - slidesToSlide);
      }
    }
  }, [carouselRef, carouselMiniRef, activeSlide]);

  return (
    <Layout title={"Home | Assets Store"}>
      <Container className="mb-5">
        <Row>
          <Col xs lg={8}>
            <StyledCarousel
              ref={carouselRef}
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
              beforeChange={(nextSlide, { currentSlide }) => {
                setActiveSlide(nextSlide);
              }}
            >
              {images.map((image, index) => {
                return <SliderImage key={image} src={image} />;
              })}
            </StyledCarousel>
            <ShowCount>14/16</ShowCount>
            <StyledCarousel
              ref={carouselMiniRef}
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
              beforeChange={(nextSlide, { currentSlide }) => {
                setActiveMiniSlide(nextSlide);
              }}
            >
              {images.map((image, index) => {
                return (
                  <MiniSliderImageWrapper
                    key={image}
                    onClick={() => setActiveSlide(index)}
                  >
                    <MiniSliderImage src={image} />
                    <MiniSliderImageOverlay isActive={activeSlide === index} />
                  </MiniSliderImageWrapper>
                );
              })}
            </StyledCarousel>
            <StyledTabs
              id="product-details"
              activeKey={activeTab}
              onSelect={(tab) => setActiveTab(tab)}
              className="mt-5 mb-5"
            >
              <StyledTab eventKey="overview" title="Overview">
                <Card>
                  <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Text>
                      Full set of animations ranging from locomotion to boating,
                      swimming, and varied interactions. Whether you’re making a
                      sandbox game, tactical espionage sim, or exploring
                      uncharted ruins, the starter Third-person Character
                      Controller will get you rolling faster than ever!
                    </Card.Text>
                    <Card.Title>Summary</Card.Title>
                    <Card.Text>
                      Full set of animations ranging from locomotion to boating,
                      swimming, and varied interactions. Whether you’re making a
                      sandbox game, tactical espionage sim, or exploring
                      uncharted ruins, the starter Third-person Character
                      Controller will get you rolling faster than ever!
                    </Card.Text>
                    <Card.Title>Technical details</Card.Title>
                    <Card.Text>
                      Full set of animations ranging from locomotion to boating,
                      swimming, and varied interactions. Whether you’re making a
                      sandbox game, tactical espionage sim, or exploring
                      uncharted ruins, the starter Third-person Character
                      Controller will get you rolling faster than ever!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </StyledTab>
              <StyledTab eventKey="package" title="Package Content">
                <Row>
                  <PakcagePreviewCol sm={12}>
                    <PackageSize>Total file size: 1.3 GB</PackageSize>
                    <PackageDevider>|</PackageDevider>
                    <PackageSize>Number of files: 223</PackageSize>
                  </PakcagePreviewCol>
                  <Col sm={6}>
                    <FilePreview></FilePreview>
                    <FilePreviewTitle>Select File To Preview</FilePreviewTitle>
                  </Col>
                  <Col sm={6}>
                    <FileTree
                      data={data}
                      action={action} //optional
                      collapseAll={{ collapseAll, handleCollapseAll }} //Optional
                      decorator={treeDecorator} //Optional
                    />
                  </Col>
                </Row>
              </StyledTab>
              <StyledTab eventKey="releases" title="Releases">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">1.0(current)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">original</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Card>
                            <Card.Body>
                              <Card.Title>Version 1.0（current)</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                Released: Jan 16, 2022
                              </Card.Subtitle>
                              <Card.Text>First release</Card.Text>
                            </Card.Body>
                          </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Card>
                            <Card.Body>
                              <Card.Title>Original</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                Released: Jan 16, 2022
                              </Card.Subtitle>
                            </Card.Body>
                          </Card>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </StyledTab>
            </StyledTabs>
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
              {keywords.map((keyword, index) => {
                return (
                  <KeywordCol xs lg={"auto"} key={index}>
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
