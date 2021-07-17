import React, { useState } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import Text from 'components/base/Text';
import getStyles from './TextInput.style';
import { TextInputProps } from './TextInput.props';
import { COLORS } from 'theme';

const TextInput = (props: TextInputProps) => {
  const {
    containerStyle = {},
    style = {},
    label,
    value,
    onChangeText,
    theme,
  } = props;
  const styles = getStyles(theme);
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
        placeholderTextColor={COLORS[theme || 'Light'].PLACE_HOLDER}
      />
    </View>
  );
};

export default TextInput;
