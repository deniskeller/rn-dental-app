import React from 'react';
import styled from 'styled-components/native';

const BaseInput = ({ ...props }) => {
  const [isLabel, setisLabel] = React.useState(null);

  const computedPlaceholder = () => {
    if (isLabel) {
      return '';
    } else {
      return props.placeholder;
    }
  };

  return (
    <InputWrapper style={{ ...props.style }}>
      {isLabel || props.value ? <InputLabel>{props.label}</InputLabel> : null}

      <InputField
        keyboardType={props.keyboardType}
        value={props.value}
        placeholder={computedPlaceholder()}
        textInputProps={props.textInputProps}
        onChange={props.onChange}
        onFocus={() => setisLabel(true)}
        onBlur={() => setisLabel(false)}
      />
    </InputWrapper>
  );
};

export default BaseInput;

const InputWrapper = styled.View``;

const InputLabel = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: #a0a2a4;
`;

const InputField = styled.TextInput.attrs({
  placeholderTextColor: '#A0A2A4',
})`
  font-size: 18px;
  padding: 10px 0px;
  color: #303030;
  border-bottom-width: 2px;
  border-bottom-color: #f3f3f3;
`;
