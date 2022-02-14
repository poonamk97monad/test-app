import styled from "styled-components";

export const MainProductSection = styled.div`
  
  .leftSidebar{
    width: 250px;
    flex-shrink: 0;
    flex: 0 0 auto;

    .leftSidebarContent{
      background-color: #1F2A33;
      left: 0;
      right: auto;
      flex: 1 0 auto;
      height: 100%;
      display: flex;
      outline: 0;
      z-index: 1200;
      position: fixed;
      overflow-y: auto;
      flex-direction: column;
      -webkit-overflow-scrolling: touch;
      color: #fff;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

      .asideSection{
        flex: 1 1 auto;
        display: flex;
        position: static;
        flex-flow: row nowrap;
        overflow-x: auto;
        transition: padding-top 250ms;
        padding-top: 0;
        width: 250px;
        height: 100%;

        .leftMainNav{
          flex: 1 1 auto;
          height: 100%;
          overflow: auto;

          .navSectionHeading{
            color: #757575;
            margin-top: 32px;
            font-size: 12px;
            line-height: 1;
            padding-left: 62px;
            letter-spacing: 0.08333rem;
            text-transform: uppercase;
          }

          .leftMenuList{
            margin: 0;
            padding: 0;
            position: relative;
            list-style: none;
      
            li{
              :before{
                content: "" !important;
              }
            }
      
            .leftMenuListItem{
              width: 100%;
              position: relative;
              box-sizing: border-box;
              text-align: left;
              align-items: center;
              padding-top: 8px;
              padding-bottom: 8px;
              justify-content: flex-start;
              text-decoration: none;
              transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
              padding: 0;
              overflow: hidden;
        
              :hover{
                text-decoration: none;
                background-color: rgba(255,255,255, 0.15);
              }
        
              a:hover{
                background-color: rgba(255,255,255, 0.15);
              }
        
              a{
                text-decoration: none;
                color: #fff !important;
                font-weight: 400;
        
                span{
                  width: 100%;
                  height: 48px;
                  display: flex;
                  align-items: center;
                  padding-left: 24px;
                  justify-content: initial;
                }
              }
            }
          }
        }
      }
    }
  }
  
  .rightSectionContent{
    flex: 1 1 auto;
    flex-flow: column nowrap;
    justify-content: flex-start;
    display: flex;
    height: 100vh;
    margin: 0;
    background-color: #f2f3f4;
    overflow: auto;

    .rightContentHeaderContainer{
      width: 100%;
      display: flex;
      background: #fff;
      min-height: 80px;
      align-items: center;
      justify-content: flex-start;
  
      .rightContentHeader{
        width: 100%;
        padding: 16px 24px;
        max-width: 1622px;
  
        .rightContentHeaderData{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          align-items: center;
          justify-content: space-between;
          flex-grow: 0;
          max-width: 100%;
          flex-basis: 100%;

          .leftSectionData{
            h2{
              color: rgba(0, 0, 0, 0.87);
              font-size: 1.6875rem;
              font-weight: 600;
              line-height: 2.1rem;
              letter-spacing: -0.021rem;
              margin-bottom: 0;
            }
          }
        }
      }
    }

    .rightInnerContent{
      margin: 15px 24px;
      max-width: 1622px;

      table{
        background: #fff;
      }
    }
  }
  
  
`;

