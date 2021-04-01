import React from 'react';
import { View, StatusBar, ScrollView, FlatList } from 'react-native';
import Text from 'components/base/Text';
import Button from 'components/base/Button';
import ControlItem from 'components/module/ControlItem';
import styles from './ControlList.style';
import { ControlListProps } from './ControlList.props';
import { Control } from 'store/controls';

const ControlListView = (props: ControlListProps) => {
  const { controllers, addController, navigation } = props;

  const renderControllerItem = ({ item }: { item: Control }) => {
    return (
      <ControlItem
        containerStyle={styles.itemContainer}
        label={item.label}
        onPress={() => {
          navigation.navigate('CONTROL_EDIT', { id: item.id });
        }}
      />
    );
  };
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle} variant="title">
            Manage Controllers
          </Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={controllers}
            renderItem={renderControllerItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View style={styles.spacer} />}
          />
        </View>
        <View style={styles.action}>
          <Button
            label="Add New Controller"
            onPress={() => {
              navigation.navigate('CONTROL_EDIT', {});
            }}
          />
        </View>
      </View>
    </>
  );
};

export default ControlListView;
