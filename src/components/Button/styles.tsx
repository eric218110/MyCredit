import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import { ButtonProps } from 'react-native';

interface IProps {
  propsButton?: ButtonProps;
  backgroundColorBanner?: string;
  backgroundColor?: string;
}

export const Container = styled(Ripple).attrs((props) => ({
  rippleColor: props.theme.current.text.shade04,
  rippleDuration: 700,
  rippleFades: true,
}))<IProps>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 3px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.backgroundColor !== undefined
      ? props.backgroundColor
      : props.theme.current.pallete.primary.shade03};
  height: 55px;
  elevation: 5;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-color: #d3d3d3;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const ContentText = styled.View`
  align-items: center;
  flex: 1;
`;

export const ContentRight = styled.View<IProps>`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

export const ContentLeft = styled.View`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding-right: 40%;
  justify-content: space-between;
  align-items: center;
`;

export const ContentRightIcon = styled.View<IProps>`
  background-color: ${(props) =>
    props.backgroundColorBanner !== undefined
      ? props.backgroundColorBanner
      : props.theme.current.pallete.primary.shade04};
  height: 100%;
  width: 64px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentLeftIcon = styled.View<IProps>`
  background-color: ${(props) =>
    props.backgroundColorBanner !== undefined
      ? props.backgroundColorBanner
      : props.theme.current.pallete.primary.shade04};
  height: 100%;
  width: 64px;
  left: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.current.pallete.primary.shade01,
  size: 'large',
  animating: true,
}))`
  flex: 1;
`;
