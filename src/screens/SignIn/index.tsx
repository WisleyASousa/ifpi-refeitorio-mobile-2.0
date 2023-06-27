import { Container, Title } from "./styles";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import { ANDROID_CLIENTE_ID, IOS_CLIENTE_ID } from '@env'

import backgroundImage from "../../assets/background.png";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Realm, useApp } from '@realm/react';


WebBrowser.maybeCompleteAuthSession();

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const app = useApp();

  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENTE_ID,
    iosClientId: IOS_CLIENTE_ID,
    scopes: ['profile', 'email']
  });

  function handleGoogleSignIn() {
    setIsAuthenticating(true);
    googleSignIn().then((response) => {
      if(response.type !== 'success') {
        setIsAuthenticating(false);
      }
    })
  }

  useEffect(() => {
    if(response?.type === 'success') {
      if(response.authentication?.idToken) {
        
        const credentials = Realm.Credentials.jwt(response.authentication.idToken);
        app.logIn(credentials)
          .catch((error) => {
            console.log(error);
            Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta Google');
          setIsAuthenticating(false);
        })

      } else {
        Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta Google');
        setIsAuthenticating(false);
      }
    }
  }, [response]);

  return (
    <Container source={backgroundImage}>
      <Title>Restaurante</Title>
      <Button 
        onPress={handleGoogleSignIn} 
        title="Entrar com Suap" 
        isLoading={isAuthenticating}
        
      />
    </Container>
  );
}



