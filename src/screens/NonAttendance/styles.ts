import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
`;
export const TextNonAtt = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  justify-content: center;
  align-items: center;
`
export const TitleNonAtt = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  justify-content: center;
  align-items: center;
`

export const ContainerNonAtt  = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600 };
  border-radius: 10px;
  padding: 10px;
  margin: 16px 0px;
  gap: 12px;
`

export const ListNonAtt = styled.View`
  flex-direction: row;
  gap: 8px;
  justify-content: space-around;
  align-items: center;
  padding: 0 0 8px 0;
  border-bottom-width: 1;
  border-color: ${({ theme }) => theme.COLORS.BRAND_MID };
`

export const BoxAlert = styled.View`
  
  border-color: ${({ theme }) => theme.COLORS.RED };
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 250px;
  margin-top: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
`