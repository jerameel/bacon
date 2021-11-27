import React from 'react';
import { View, StatusBar, ScrollView, FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Text from 'components/base/Text';
import Button from 'components/base/Button';
import ControlItem from 'components/module/ControlItem';
import useStyles from './ControlList.style';
import { ControlListProps } from './ControlList.props';
import { Control } from 'store/controls';
import { Control as ControlIcon } from 'components/base/SVG';
import { COLORS } from 'theme';

const ControlListView = (props: ControlListProps) => {
  const { controllers, navigation } = props;

  const { styles, selectedTheme } = useStyles();

  const renderControllerItem = ({ item }: { item: Control }) => {
    return (
      <ControlItem
        containerStyle={styles.itemContainer}
        label={item.label}
        onPress={() => {
          navigation.navigate('CONTROL_EDIT', { id: item.id });
        }}
        theme={selectedTheme}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS[selectedTheme].BACKGROUND}
        barStyle={selectedTheme === 'Dark' ? 'light-content' : 'dark-content'}
      />
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
            <ControlIcon
              width={56}
              height={56}
              fill={COLORS[selectedTheme].PLACE_HOLDER}
            />
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
            theme={selectedTheme}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ControlListView;
