import styled from 'styled-components';

import { transparentize, shade } from 'polished';
import {
  secondaryBackground,
  primaryColor,
  secondaryColor,
  featuredColor,
  titleColor,
} from '../../styles/paletsColores';

export const Main = styled.main`
  background: #fff;
  padding: 12px 72px;
  border-radius: 0 0 24px 24px;
  margin-bottom: 100px;

  /* border: 1px solid red; */
`;

export const Content = styled.section`
  /* border: 1px solid red; */

  display: flex;
`;

export const HeadTitle = styled.div`
  max-width: 924px; 
  height: auto;
  margin: 0 24px 4px;
  /* margin-top: 32px; */
  margin-left: 0px;

  display:flex;
  flex-direction: column;

  .info{
    /* border: 1px solid red; */

    height: 100px;
    width: calc(100% - 110px);
    border-radius: 16px;

    margin-top: 64px;
    margin-left: 140px;
    padding:16px;
    padding-left: 84px;
    

    background: ${featuredColor};

    h1{
      /* transform: translateX(4px); */
      color: #f0f0f0;
    }

     -webkit-box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
  }

  .imgBorde {
    
    /* background: white; */
    /* border: 4px solid ${featuredColor}; */
    border: 4px solid ${featuredColor};
    margin-top: -150px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    /* transform: rotate(45deg); */
    /* padding: 6px; */
    transition: 0.2s all;

    &:hover {

      transform: translateX(24px);
      
    }

    div {
      /* border: 1px solid red; */
      border-radius: 50%;
      padding: 8px;
      height: 100%;

      

      -webkit-box-shadow: inset 0px 0px 71px -23px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: inset 0px 0px 71px -23px rgba(0, 0, 0, 0.2);
      box-shadow: inset 0px 0px 71px -23px rgba(0, 0, 0, 0.2);
    }

    img {
      /* transform: rotate(-45deg); */
      height: 176px;
      width: 176px;
      border-radius: 50%;
    }
  }
`;

export const SectionText = styled.section`
  /* border: 1px solid purple; */

  display: flex;
  flex-direction: column;

  max-width: 960px;
  width: 100%;
  padding: 12px;
  .column {
    /* margin-top: -256px; */
    /* border: 1px solid yellow; */

    flex-direction: column;

    position: relative;

    /* top: -280px; * tem q arrrumar */
  }

  /* display: block; */
`;

export const SectionColunm = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: -172px;
`;

export const HeaderSection = styled.header`
    display:flex;
    flex-direction: column;

    margin: 24px 0 16px 16px;
    /* border-bottom: 1px solid ${titleColor}; */

    font-size: 32px;
    color: ${titleColor};

    &::after{
      content: "";
      width: 224px;
      height: 2px;
      background-image: -webkit-linear-gradient(180deg, ${primaryColor} 15%, ${secondaryColor} 85%);

      position: relative;
    }

`;

export const Aside = styled.aside`
  background: ${featuredColor};

  max-width: 220px;
  width: 100%;
  max-height: 400px;

  padding: 8px;
  margin: 16px;

  -webkit-box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.24);

  h1 {
    font-size: 24px;
    color: #f0f0f0;
  }

  div {
    margin: 4px;
    span {
      display: flex;
      /* flex-direction: row; */
      margin-top: 4px;

      font-size: 16px;
      color: ${transparentize(0.2, '#f0f0f0')};

      svg {
        margin-right: 4px;
        color: ${transparentize(0.2, '#f0f0f0')};
      }
    }
    a {
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #f0f0f0;

        margin: 2px;
        transition: 0.4s;
      }
      &:hover {
        img {
          filter: none;
          transform: translateY(8px);

          -webkit-box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.56);
          -moz-box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.56);
          box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.56);
        }
      }
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-grow: 1;

    list-style: none;

    li {
      display: flex;
      /* flex-direction: column; */
      flex-shrink: 0;
      /* align-items: center; */

      margin-top: 4px;
      margin-left: 4px;

      img {
        width: 80px;
        height: 80px;
        border-radius: 16px;

        margin: 4px;
        transition: 0.4s;
      }
      &:hover {
        img {
          filter: none;
          transform: translateY(8px);

          webkit-box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.56);
          -moz-box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.56);
          box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.56);
        }
      }
    }
  }

  border-radius: 16px;

  /* a.box {
    cursor: pointer;
  } */
  font-family: dosis;

  section {
    display: flex;
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      flex: 1 0;
      height: 72px;
      width: 96px;

      /* padding: 2px; */
      /* margin: 2px; */
      /* margin-left: 8px; */

      -webkit-border-radius: 16px;
      -moz-border-radius: 16px;
      border-radius: 16px;

      background: ${shade(0.01, secondaryBackground)};

      /* font-weight: bold; */
      font-size: 64px;
      text-decoration: none;

      svg {
        margin: 0;
        padding: 0;
        margin-top: 4px;
        color: ${titleColor};

        /* size: 64px; */
      }

      p {
        margin-right: 16px;
        font-size: 16px;
        /* font-family: dosis; */
        color: ${titleColor};
        /* text-align: center; */
      }
    }
  }
`;

export const ShelfGallery = styled.div`
  max-width: 1200px;
  margin: 12px auto;
`;