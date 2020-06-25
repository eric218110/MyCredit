import styled from 'styled-components/native';
import { Subtitle } from '../../components/Text';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 5;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Content = styled.KeyboardAvoidingView`
  height: 100%;
  justify-content: center;
`;

export const ContentText = styled.View`
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const ContentInput = styled.View`
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const Actions = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
  width: 100%;
  align-self: center;
`;

export const ActionText = styled(Subtitle)`
  color: ${(props) => props.theme.current.text.shade02};
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 14px;
`;
