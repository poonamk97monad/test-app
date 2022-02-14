import styled from "styled-components";
import { Stack, Row, Col, Image, Tabs, Tab } from "react-bootstrap";
import Carousel from "react-multi-carousel";

export const StyledCarousel = styled(Carousel)`
  .custom-dot-list-style {
    margin-top: 50px;
  }
  li::before {
    display: none;
  }
`;

export const SliderImage = styled.img`
  width: 814px;
  height: 543px;
`;

export const MiniSliderImageWrapper = styled.div`
  width: 96px;
  height: 64px;
  margin: 0 10px 0 0;
  cursor: pointer;
  position: relative;
`;

export const MiniSliderImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const MiniSliderImageOverlay = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 0 : 0.6)};
  background: #000;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ShowCount = styled.p`
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  padding: 0 7px;
  font-size: 12px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  width: max-content;
  text-align: center;
  margin: 5px auto 20px auto;
`;

export const Title = styled.h1`
  color: #212121;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
`;

export const UserRow = styled(Row)`
  margin-bottom: 10px;
`;

export const Avatar = styled(Image)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 8px;
`;

export const UserName = styled.div`
  font-size: 14px;
  max-width: 170px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: 3px;
  color: #212121;
`;

export const UserLink = styled.a`
  text-decoration: none;
  margin-bottom: 10px;
`;

export const Price = styled(Title)`
  font-size: 28px;
`;

export const VatText = styled.div`
  font-size: 14px;
  color: #757575;
  margin-top: 8px;
`;

export const ProductDetails = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
`;

export const StyledStack = styled(Stack)`
  margin: 10px 0;
`;

export const StackTitle = styled.div`
  color: #212121;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.5;
`;

export const RelatedKeywords = styled.h2`
  color: #212121;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
`;

export const KewordLink = styled.a`
  color: #212121;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid #c2c2c2;
  font-size: 14px;
  font-weight: 500;
  padding: 0 8px;
  display: block;
  line-height: 28px;
  text-overflow: ellipsis;
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 10px;

  :hover {
    color: #212121;
    border: 1px solid #2196f3;
  }
`;

export const KeywordCol = styled(Col)`
  padding-right: 0px;
`;

export const StyledTabs = styled(Tabs)``;

export const StyledTab = styled(Tab)``;

export const PackageSize = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #212121;
`;

export const PackageDevider = styled.span`
  color: #e4e4e4;
  margin: 0 10px;
  font-size: 20px;
`;

export const FilePreview = styled.div`
  width: 390px;
  height: 390px;
  background: #c2c2c2;
`;

export const FilePreviewTitle = styled.div`
  padding: 10px 0;
  color: #212121;
`;

export const PakcagePreviewCol = styled(Col)`
  margin-bottom: 30px;
`;
