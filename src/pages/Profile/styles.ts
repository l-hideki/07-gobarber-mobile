import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 180 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 2px 0 24px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;
export const UserAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;

  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 170px;
`;
