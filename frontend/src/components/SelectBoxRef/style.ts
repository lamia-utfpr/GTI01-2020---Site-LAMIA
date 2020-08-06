import styled, { css } from 'styled-components';

import Select from 'react-select';

import { shade } from 'polished';
import { secondaryColor, primaryColor } from '../../styles/paletsColorers';

interface ContentProps {
  width?: number;
}

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: #fff;

  border-radius: 8px;
  border: 2.1px solid white;
  transition: 0.2s all ease-in-out;
  padding: 2px 16px;

  svg {
    margin-right: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: ${primaryColor};
      border-color: ${primaryColor};
    `}

  input {
    font-size: 24px;
    font-family: 'Source Sans Pro';
    font-weight: bold;

    &::placeholder {
      color: ${shade(0.2, '#E5E5E5')};
    }
  }
`;

export const Content = styled(Select)<ContentProps>`
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;

  width: 100%;
  ${(props) =>
    css`
      max-width: ${props.width}px;
    `}
  min-width:150px;
  margin-top: 0px;

  > div {
    padding: 4px;

    div {
      border-radius: 8px;
    }
  }

  > div:first-child {
    border-radius: 8px;
    border-color: #fff;
    transition: 0.2s all;
  }

  .react-select__placeholder {
    font-size: 24px;
    font-family: 'Source Sans Pro';
    font-weight: bold;

    color: ${shade(0.2, '#E5E5E5')};
  }
`;
