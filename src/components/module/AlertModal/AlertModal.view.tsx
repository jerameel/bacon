import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import Text from 'components/base/Text';
import getStyles from './AlertModal.style';
import { AlertModalProps } from './AlertModal.props';

const AlertModal = (props: AlertModalProps) => {
  const {
    containerStyle = {},
    visible,
    title,
    description,
    actions,
    theme,
  } = props;
  const styles = getStyles(theme);
  const hasValidProperty =
    title !== undefined &&
    description !== undefined &&
    Array.isArray(actions) &&
    actions.length > 0;
  return (
    <Modal
      visible={visible && hasValidProperty}
      transparent
      animationType="none">
      <View style={[styles.container, containerStyle]}>
        <View style={styles.contentArea}>
          <Text variant="title" style={styles.title}>
            {title || ''}
          </Text>

          <Text
            variant="body"
            containerStyle={styles.descriptionContainer}
            style={styles.description}>
            {description || ''}
          </Text>

          <View style={styles.actionContainer}>
            {(actions || []).map((action) => (
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => action.onPress()}>
                <View style={styles.actionButton}>
                  <Text style={styles.actionLabel}>{action.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
