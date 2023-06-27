import styled from "styled-components/native";
import { Image } from "expo-image";


export const Container = styled.ImageBackground`
  width: 100%;
  /* height: 220px; */
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: -40px;
  flex-direction: row;
`
export const Greeting = styled.View`
  /* flex: 1; */
  /* width: 100%; */
  top: -30px;
  /* margin-left: 102px; */
  justify-content: center;
  /* position: absolute; */
`

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100 };
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  top: -30px;

`

export const IconsBox = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100 };
  padding: 4px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.WHITE };
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
`

export const TimerContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 8px;
  position: absolute;
  top: 130px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.COLORS.YELLOW };
`
export const TimerBox = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800 };
  /* border-bottom: 4px solid ${({ theme }) => theme.COLORS.YELLOW }; */
  padding: 8px 4px;
  gap: 4px;
  border-radius: 30px;
  width: 250px;
`
export const TimerTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.YELLOW };
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
export const Timer = styled.Text`
  
  color: ${({ theme }) => theme.COLORS.YELLOW };
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Picture = styled(Image)`
  top: -30px;
  width: 54px;
  height: 54px;
  border-radius: 9999px;
`

export const UserBox = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`