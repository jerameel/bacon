import React from 'react';
import { View, StatusBar, ScrollView, FlatList } from 'react-native';
import Text from 'components/base/Text';
import Button from 'components/base/Button';
import ControlItem from 'components/module/ControlItem';
import styles from './ControlList.style';
import { ControlListProps } from './ControlList.props';
import { Control } from 'store/controls';
import { Control as ControlIcon } from 'components/base/SVG';

const ControlListView = (props: ControlListProps) => {
  const { controllers, navigation } = props;

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
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle} variant="title">
            Manage Controllers
          </Text>
        </View>
        {controllers.length > 0 ? (
          <View style={styles.content}>
            <FlatList
              data={controllers}
              renderItem={renderControllerItem}
              keyExtractor={(item) => item.id}
              ListFooterComponent={<View style={styles.spacer} />}
            />
          </View>
        ) : (
          <View style={styles.emptyContent}>
            <ControlIcon width={56} height={56} fill="#bfbfbf" />
            <Text style={styles.emptyTitle} variant="caption">
              No Available Controllers
            </Text>
          </View>
        )}
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
