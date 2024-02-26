import React, {ReactNode, memo} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

interface Props {
  components: ReactNode[];
}

function Component({components}: Props) {
  return (
    <View>
      <ScrollView style={styles.container} horizontal={true}>
        {components}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});

const HorizontalScrolleable = memo(Component);

export {HorizontalScrolleable};
