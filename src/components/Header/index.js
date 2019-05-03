import React from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Top,
  Logo,
  Title,
} from './styles';

import logo from '~/assets/Nubank_Logo.png';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default function Main({ translateY }) {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Augusto</Title>
      </Top>
      <AnimatedIcon
        style={{
          opacity: translateY.interpolate({
            inputRange: [0, 190, 380],
            outputRange: [1, 0, 1],
          }),
          transform: [{
            rotateX: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: ['0deg', '180deg'],
              extrapolate: 'clamp',
            }),
          }],
        }}
        name="keyboard-arrow-down"
        size={20}
        color="#FFF"
      />
    </Container>
  );
}
