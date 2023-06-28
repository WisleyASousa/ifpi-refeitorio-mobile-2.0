import { Header } from "../../components/Header";
import { BoxExit, Container, ContainerNotice, ContainerProfile, ListInfo, ListInfoNotice, PictureProfile, TextProfile, TitleProfile } from "./styles";
import backgroundImage from "../../assets/background.png";
import { ScrollView, Switch, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useApp, useUser } from "@realm/react";
import { useState } from "react";



export function Profile() {
  const [confirm, setConfirm] = useState(true)

  const { bottom, top } = useSafeAreaInsets()
  const user = useUser();
  const app = useApp();

  function handleLogout() {
    app.currentUser?.logOut();
  }

  return (
    <Container source={backgroundImage}>
      <ScrollView 
        contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }} 
        style={{ paddingTop:160, paddingHorizontal:12 }}
      >
        <View style={{ paddingBottom:12, alignItems:'center' }}>
          <TextProfile>
            Imagem de Perfil
          </TextProfile>
          <PictureProfile
            source={{  uri: user?.profile.pictureUrl }}
            placeholder="L184i9offQof00ayfQay~qj[fQj["
          />
        </View>
        <ContainerProfile>
          <ListInfo>
            <TitleProfile>Nome:</TitleProfile>
            <TextProfile>{user?.profile.name}</TextProfile>
          </ListInfo>
          <ListInfo>
            <TitleProfile>Matrícula:</TitleProfile>
            <TextProfile>20191TADS0270</TextProfile>
          </ListInfo>
          <ListInfo>
            <TitleProfile>Curso:</TitleProfile>
            <TextProfile>Análise e Desenvolvimento de Sistema</TextProfile>
          </ListInfo>
          <ListInfo style={{ borderBottomWidth:0, paddingBottom: 0 }}>
            <TitleProfile>Email:</TitleProfile>
            <TextProfile>{user?.profile.email}</TextProfile>
          </ListInfo>
        </ContainerProfile>
        <ContainerNotice>
          <ListInfoNotice style={{ borderBottomWidth:0, paddingBottom: 12 }}>
            <TitleProfile>Notificações:</TitleProfile> 
          </ListInfoNotice>
          <ListInfoNotice>
            <TextProfile>Aplicativo</TextProfile>
            <Switch
              style={{ alignItems: 'center', justifyContent: 'center' }}
              value={confirm}
              onValueChange={setConfirm}
              trackColor={{ false: '#EB5757', true: '#406854' }}
              thumbColor={confirm ? '#1EC072' : '#EB5757'}
              ios_backgroundColor={!confirm ? '#1ec0727f' : '#eb68617d'}
            />
          </ListInfoNotice>
          <ListInfoNotice>
            <TextProfile>SMS</TextProfile>
            <Switch
              style={{ alignItems: 'center', justifyContent: 'center' }}
              value={confirm}
              onValueChange={setConfirm}
              trackColor={{ false: '#EB5757', true: '#406854' }}
              thumbColor={confirm ? '#1EC072' : '#EB5757'}
              ios_backgroundColor={!confirm ? '#1ec0727f' : '#eb68617d'}
            />
          </ListInfoNotice>
          <ListInfoNotice style={{ borderBottomWidth:0, paddingBottom: 0 }}>
            <TextProfile>E-mail</TextProfile>
            <Switch
              style={{ alignItems: 'center', justifyContent: 'center' }}
              value={confirm}
              onValueChange={setConfirm}
              trackColor={{ false: '#EB5757', true: '#406854' }}
              thumbColor={confirm ? '#1EC072' : '#EB5757'}
              ios_backgroundColor={!confirm ? '#1ec0727f' : '#eb68617d'}
            />
          </ListInfoNotice>
        </ContainerNotice>

        <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
          <BoxExit>
            <TextProfile>Sair</TextProfile>
          </BoxExit>
        </TouchableOpacity>
        
        <View style={{ height:250 }} />
      </ScrollView>
      
        {/* <Header /> */}
    </Container> 
    )
}