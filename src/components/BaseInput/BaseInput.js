import React from 'react';
import styled from 'styled-components/native';

export default function BaseInput(props) {
  return (
    <InputWrapper style={{ ...props.style }}>
      <InputLabel>{props.label}</InputLabel>
      <InputField
        placeholder={props.placeholder}
        value={props.value}
        {...props.textInputProps}
        onChange={(e) => props.handleInputChange(e.nativeEvent.text)}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: #f3f3f3;
`;

const InputLabel = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: #a0a2a4;
  padding-top: 10px; ;
`;

const InputField = styled.TextInput.attrs({
  placeholderTextColor: '#303030',
})`
  font-size: 18px;
  padding: 10px 0px;
  color: #303030;
`;
