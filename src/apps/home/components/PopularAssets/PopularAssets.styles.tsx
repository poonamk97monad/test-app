import styled from "styled-components";
import { Stack, Col } from "react-bootstrap";

export const Header = styled.div`
  color: #212121;
  font-weight: 700;
  font-size: 24px;
`;

export const StyledStack = styled(Stack)`
  margin-bottom: 24px;
`;

export const StyledCol = styled(Col)`
  margin-bottom: 10px;
`;

export const SeeMoreLink = styled.a`
  text-decoration: none;
  color: #2196f3;
  font-weight: 400;

  :hover{
    color: #2196f3;
  }
`;

export const StyledContainer = styled.div`
  margin-top: 80px;
`;

export const PopularSection = styled.div`
  padding-top: 32px;
  margin-top: -2px;
  border-top: solid 2px #eceff1;
`;

export const PopularItem = styled.div``;

export const PopularAsset = styled.div``;

export const LikeButton = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: rgba(0,0,0,.5);
  position: absolute;
  z-index: 1;
  right: 5px;
  top: 5px;
  border-radius: 3px;
`;

export const PopularDiv = styled.div`
  flex-direction: column;
  position: relative;
  border-radius: 4px;
  background-color: transparent;

  .popularInfo .popularTitle{
    color: #9e9e9e !important;
  }
  .popularInfo .popularTitle:hover{
    color: #2196f3 !important;
  }
  .assetLink{
    text-decoration: none !important;
  }
`;

export const PopularInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding-top: 15px;

  .popularTitle{
    text-decoration: none !important;
    font-size: 12px;
    line-height: 15px;
    color: #9e9e9e;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const ItemLink = styled.a``;

export const PopularImg = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 4px;
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  :hover .overlaySection{
    opacity: 1;
  }
`;

export const ImgOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35px;
  padding: 2px 7px;
  background-color: #212121;
  color: #ececec;
  font-size: 14px;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 4px;
  opacity: 0;
`;
export const ItemName = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #212121;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  margin-bottom: 0;
`;

export const ItemRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .ratingStars{
    margin-right: 3px;
    font-size: 10px;
  }
`;

export const ItemStar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    color: #212121;
    font-size: 12px;
  }
`;

export const ItemLike = styled.div`
  position: relative;
  display: flex;
  flex: none;
`;

export const LikeCount = styled.div`
  border-left: 1px solid #c2c2c2;
  margin-left: 7px;
  padding-left: 8px;
  font-size: 12px;
  color: #757575;

  svg{
    margin-right: 3px;
  }
`;

export const ItemPrice = styled.div`
  display: flex;
`;

export const ItemAmount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 18px;
  font-size: 14px;
  color: #212121;
  flex-direction: row;
  align-content: center;

  p {
    line-height: 18px;
    font-size: 14px;
    min-height: 18px;
    color: #212121;
    padding: 0;
    margin-bottom: 0;
    font-weight: 400;
  }
`;

export const ItemAddCart = styled.div`
  z-index: 1;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  justify-content: end;

  svg{
    margin-top: 3px;
    font-size: 10px;
    margin-right: 5px;
    color: #9e9e9e;
  }
`;

export const ItemButton = styled.button`
  display: flex;
  transition: opacity .2s ease;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: normal;
  color: #2196f3 !important;
  height: 22px;
  background: none !important;
  border: none !important;
`;
