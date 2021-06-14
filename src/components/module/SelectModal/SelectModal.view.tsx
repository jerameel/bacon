import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import Text from 'components/base/Text';
import styles from './SelectModal.style';
import { SelectModalProps } from './SelectModal.props';

const SelectModal = (props: SelectModalProps) => {
  const {
    containerStyle = {},
    visible,
    onSelect,
    selectedValue,
    options,
    title,
  } = props;
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={[styles.container, containerStyle]}>
        <View style={styles.titleContainer}>
          <Text variant="title" style={styles.title}>
            {title}
          </Text>
        </View>
        {options.map(({ label, value }) => (
          <TouchableOpacity
            key={label}
            activeOpacity={0.85}
            onPress={() => (onSelect ? onSelect(value) : null)}>
            <View style={styles.itemContainer}>
              <Text
                style={
                  value === selectedValue
                    ? styles.itemLabelActive
                    : styles.itemLabel
                }>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

export default SelectModal;
