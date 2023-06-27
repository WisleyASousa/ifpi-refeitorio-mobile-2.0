import { Container, Greeting, IconsBox, IconsContainer, Message, Name, Picture, Timer, TimerBox, TimerContainer, TimerTitle, UserBox } from "./styles";
import { Question, Bell } from 'phosphor-react-native';

import headerImage from "../../assets/top.png";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";
import { useUser } from "@realm/react";
import { useSafeAreaInsets } from 'react-native-safe-area-context'



export function Header() {
  const user = useUser();
  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 42;

  return (
    <>
      <Container 
        source={headerImage}
        style={{ paddingTop, height:220 }}
      >
        <UserBox>
        <Picture 
          source={{  uri: user?.profile.pictureUrl }}
          placeholder="L184i9offQof00ayfQay~qj[fQj["
        />
        <Greeting>
          <Message>
            Olá,
          </Message>
          <Name>
            {user?.profile.name}
          </Name>
        </Greeting>
        </UserBox>
        <IconsContainer>
          <TouchableOpacity>
            <IconsBox>
              <Question size={32} color={theme.COLORS.BRAND_LIGHT}/>
            </IconsBox>
          </TouchableOpacity>

          <TouchableOpacity>
            <IconsBox>
              <Bell size={32} color={theme.COLORS.BRAND_LIGHT}/>
            </IconsBox>
          </TouchableOpacity>
        </IconsContainer>

      </Container>
      <TimerContainer>
        <TimerBox>
          <TimerTitle>Semana Atual</TimerTitle>
          <Timer>05/06/2023 a 09/06/2023</Timer>
        </TimerBox>
      </TimerContainer>
    </>
    )
}