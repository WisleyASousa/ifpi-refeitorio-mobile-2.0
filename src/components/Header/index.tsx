import { Container, Greeting, IconsBox, IconsContainer, Message, Name, Picture, Timer, TimerBox, TimerContainer, TimerTitle, UserBox } from "./styles";
import { Question, Bell, X } from 'phosphor-react-native';

import headerImage from "../../assets/top.png";
import { TouchableOpacity, View } from "react-native";
import theme from "../../theme";
import { useUser } from "@realm/react";
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { useState } from "react";

export function Header() {
  const randomHeight= useSharedValue(350);
  const user = useUser();
  const insets = useSafeAreaInsets();
  const [show, setShow] = useState(true);

  const config = {
    duration: 300,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(randomHeight.value, config),
    };
  });

  function handleShow() {
    if (show) {
      randomHeight.value = (0 + 950);
      setShow(!show);
    } else {
      randomHeight.value = (950 - 600);
      setShow(!show);
    }
  }
  
  

  const paddingTop = insets.top + 82;

  return (
    <>
    <Animated.View 
      style={[{ position: 'absolute', width: '100%', height: show ? 950 : 350 }, style]}
    >
      <Container 
        source={headerImage}
        style={{ paddingTop, height:'100%' }}
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

          <TouchableOpacity
            onPress={() => handleShow()}
          >
            <IconsBox>
              {show ? <Bell size={32} color={theme.COLORS.BRAND_LIGHT}/> :  <X size={32} color={theme.COLORS.BRAND_LIGHT} />}
            </IconsBox>
          </TouchableOpacity>
        </IconsContainer>

      </Container>
      </Animated.View>
      {show ? <TimerContainer>
        <TimerBox>
          <TimerTitle>Semana Atual</TimerTitle>
          <Timer>05/06/2023 a 09/06/2023</Timer>
        </TimerBox>
      </TimerContainer> : <></>}
    </>
    )
}