import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const TextProfile = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  justify-content: center;
  align-items: center;
`
export const TitleProfile = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  justify-content: center;
  align-items: center;
`

export const ContainerProfile = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600 };
  border-radius: 10px;
  padding: 10px;
  margin: 16px 0px;
  gap: 12px;
`

export const ListInfo = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 0 0 8px 0;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BRAND_LIGHT };
`
export const PictureProfile = styled(Image)`
  margin: 20px;
  width: 100px;
  height: 100px;
  border-radius: 9999px;
`

export const ContainerNotice= styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600 };
  border-radius: 10px;
  padding: 10px;
  margin: 4px 0px;
  gap: 12px;
`

export const ListInfoNotice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 0 0 8px 0;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BRAND_LIGHT };
`

export const BoxExit = styled.View`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.COLORS.RED };
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  margin: 22px 0 0 0;
  left: 75%;

`