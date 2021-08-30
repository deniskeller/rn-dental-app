import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { snapPoint } from 'react-native-redash';

const snapPoints = [-160, 0, -0];

const SwipeableRow = ({ children }) => {
  const translateX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = ctx.x + translationX;
    },
    onEnd: ({ velocityX }) => {
      translateX.value = withSpring(
        snapPoint(translateX.value, velocityX, snapPoints),
        { overshootClamping: true }
      );
    },
  });

  const style = useAnimatedStyle(() => ({
    backgroundColor: 'white',
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFill,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            backgroundColor: '#F85A5A',
            width: 80,
            height: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>D</Text>
        </View>
        <View
          style={{
            backgroundColor: '#B4C1CB',
            width: 80,
            height: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>R</Text>
        </View>
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipeableRow;
