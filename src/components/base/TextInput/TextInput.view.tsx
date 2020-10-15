import React, { useState } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import Text from 'components/base/Text';
import styles from './TextInput.style';
import { TextInputProps } from './TextInput.props';

const TextInput = (props: TextInputProps) => {
  const { containerStyle = {}, style = {}, label, value, onChangeText } = props;
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View
      style={[
        styles.container,
        isSelected ? styles.containerActive : {},
        containerStyle,
      ]}>
      <Text variant="label" style={styles.label}>
        {isSelected || value.length > 0 ? label : ''}
      </Text>

      <RNTextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => {
          setIsSelected(true);
        }}
        onBlur={() => {
          setIsSelected(false);
        }}
        placeholder={isSelected ? '' : label.toUpperCase()}
        placeholderTextColor="#595959"
      />
    </View>
  );
};

export default TextInput;
