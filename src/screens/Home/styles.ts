import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
`;
export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  justify-content: center;
  align-items: center;
`
export const TextMenu = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  justify-content: center;
  align-items: center;
`
export const TextMenuDay = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  justify-content: center;
  align-items: center;
  width: 70px;
`
export const TextMenuVagas = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  justify-content: center;
  align-items: center;
`
export const TextMenuItems = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  justify-content: center;
  align-items: center;
`

export const ContainerMenu = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BRAND_MID };
  border-radius: 10px;
  padding: 10px;
  margin: 16px 0px;
  box-shadow: 0px 0px 3px ${({ theme }) => theme.COLORS.BRAND_MID };
`
export const HeaderContainerMenu = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  margin: 0 0 8px 0;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BRAND_LIGHT };
`
export const HeaderBoxMenu = styled.View`
  padding: 8px;
  margin: 0 8px;
  width: 190px;
  /* quero o colocar uma bordar no view */
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BRAND_LIGHT };

`
export const TimerContainerMenu = styled.View`
  width: 100%;
  align-items: center;
  /* margin-top: 8px; */
  position: absolute;
  top: -20px;
  box-shadow: 0px 0px 3px ${({ theme }) => theme.COLORS.YELLOW };
  
`

export const TimerBoxMenu = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800 };
  /* border-bottom: 4px solid ${({ theme }) => theme.COLORS.YELLOW }; */
  padding: 8px 12px;
  gap: 4px;
  border-radius: 30px;
  width: auto;
`

export const TimerMenu = styled.Text`
  
  color: ${({ theme }) => theme.COLORS.YELLOW };
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`