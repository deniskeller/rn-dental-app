import React from 'react';
import styled from 'styled-components/native';

export default function BaseInput({ ...props }) {
  return (
    <InputWrapper style={{ ...props.style }}>
      <InputLabel>{props.label}</InputLabel>
      <InputField
        keyboardType={props.keyboardType}
        value={props.value}
        placeholder={props.placeholder}
        textInputProps={props.textInputProps}
        onChange={props.onChange}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.View``;

const InputLabel = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: #a0a2a4;
`;

const InputField = styled.TextInput.attrs({
  placeholderTextColor: '#303030',
})`
  font-size: 18px;
  padding: 10px 0px;
  color: #303030;
  border-bottom-width: 2px;
  border-bottom-color: #f3f3f3;
`;
