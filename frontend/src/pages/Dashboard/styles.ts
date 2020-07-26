import styled from 'styled-components';

import { transparentize, shade } from 'polished';
import {
  secondaryBackground,
  primaryColor,
  secondaryColor,
  titleColor,
} from '../../styles/paletsColorers';

export const Container = styled.div`
  display: flex;

  background: ${secondaryBackground};

  .bar {
    margin: 16px 0;
    width: 224px;
    height: 2px;
    background-image: -webkit-linear-gradient(
      180deg,
      ${primaryColor} 15%,
      ${secondaryColor} 85%
    );
  }
`;

export const HeaderSection = styled.header`

    margin: 4px 0 8px 0;
    /* border-bottom: 1px solid ${titleColor}; */

    font-size: 32px;
    color: ${titleColor};

    &::after{
      content: "";

      width: 224px;
      height: 2px;
      background-image: -webkit-linear-gradient(180deg, ${primaryColor} 15%, ${secondaryColor} 85%);

      position: absolute;
    }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  /* align-items: center; */
  padding: 16px;

  width: 100%;
  height: 100vh;

  textarea {
    background: #fff;
    border-radius: 8px;
    border: 2px solid ${shade(0.025, '#fff')};
    padding: 16px;
    width: 100%;
    height: 120px;

    display: flex;
    align-items: center;
    transition: 0.4s;

    font-size: 20px;
    font-family: 'Source Sans Pro';
    font-weight: bold;

    &:focus {
      border-color: ${primaryColor};
    }

    /* width */
    &::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${transparentize(0.3, secondaryColor)};
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${transparentize(0.1, secondaryColor)};
    }
  }

  form {
    margin: 12px 0;
    padding: 0 12px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    section {
      display: flex;
      align-items: center;
      width: 100%;

      margin: 16px;

      .img {
        margin-right: 32px;
        position: relative;
        img {
          border-radius: 50%;
          width: 186px;
          height: 186px;
        }

        label {
          position: absolute;
          width: 48px;
          height: 48px;
          background: ${primaryColor};
          border-radius: 50%;
          right: 0;
          bottom: 0;
          border: 6px solid ${secondaryBackground};
          cursor: pointer;
          transition: all 0.2s;

          display: flex;
          align-items: center;
          justify-content: center;

          input {
            display: none;
          }

          svg {
            width: 20px;
            height: 20px;
            color: #fff;
          }
        }
      }
      .form {
        width: 100%;
        > div {
          margin: 16px 0;
        }
      }
    }

    > div {
      margin: 10px 0;
    }

    .form-group {
      display: flex;

      p {
        width: -webkit-fill-available;
        font-size: 24px;
        font-family: 'Source Sans Pro';
      }

      & + .form-group {
        /* margin: 8px 0; */
      }
    }

    .password {
      margin-top: 40px;
      width: 100%;
    }
  }
`;