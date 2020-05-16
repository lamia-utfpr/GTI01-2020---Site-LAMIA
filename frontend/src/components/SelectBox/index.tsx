import React from 'react';
import ReactDOM from 'react-dom';

import { Theme } from 'react-select';
import makeAnimated from 'react-select/animated';
import { transparentize } from 'polished';
import { primaryColor, secondaryColor } from '../../styles/paletsColores';
import { Container, Label } from './style';

interface SelectItem {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: SelectItem[];
  placeholder?: string;
  label: string;
  isMulti?: boolean;
  width?: number;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  placeholder = 'Selecione...',
  label,
  isMulti = false,
  width = 150,
}) => {
  const animatedComponents = makeAnimated();

  function customTheme(theme: Theme): Theme {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: transparentize(0.9, primaryColor),
        primary50: transparentize(0.5, primaryColor),
        primary: primaryColor,
        neutral30: transparentize(0.3, secondaryColor),
        neutral10: transparentize(0.5, primaryColor),
      },
      // borderRadius: 12,
      spacing: {
        baseUnit: 4,
        controlHeight: 26,
        menuGutter: 8,
      },
    };
  }

  return (
    <>
      <Label>{label}</Label>
      <Container
        components={animatedComponents}
        closeMenuOnSelect={!isMulti}
        theme={customTheme}
        options={options}
        placeholder={placeholder}
        isSearchable
        defaultValue={options[0]}
        isMulti={isMulti}
        width={width}
      />
    </>
  );
};

export default SelectBox;
