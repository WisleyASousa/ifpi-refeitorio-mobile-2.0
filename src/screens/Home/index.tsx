import { Container, ContainerMenu, HeaderBoxMenu, HeaderContainerMenu, SubTitle, TextMenu, TextMenuDay, TextMenuItems, TextMenuVagas, TimerBoxMenu, TimerContainerMenu, TimerMenu } from "./styles";

import backgroundImage from "../../assets/background.png";
import { Header } from "../../components/Header";
import { ScrollView, Switch, View } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Menu } from "../../components/Menu";

const data = [
  {
    id: 1,
    day: 'Segunda-feira',
    date: '05/06/2023',
    time: 'ENCERRADO',
    vacancies: 199,
    items: 'Testando area do items do cardapio, laksakmskamskamsakmskamskamsk',
    active: true
  },
  {
    id: 2,
    day: 'Terça-feira',
    date: '06/06/2023',
    time: 'ENCERRADO',
    vacancies: 199,
    items: 'Testando area do items do cardapio, laksakmskamskamsakmskamskamsk',
    active: true
  },
  {
    id: 1,
    day: 'Quarta-feira',
    date: '07/06/2023',
    time: '00 dias 04:40:22',
    vacancies: 199,
    items: 'Testando area do items do cardapio, laksakmskamskamsakmskamskamsk',
    active: false
  },
  {
    id: 1,
    day: 'Quinta-feira',
    date: '08/06/2023',
    time: '00 dias 04:40:22',
    vacancies: 199,
    items: 'Testando area do items do cardapio, laksakmskamskamsakmskamskamsk',
    active: false
  },
  {
    id: 1,
    day: 'Sexta-feira',
    date: '09/06/2023',
    time: '00 dias 04:40:22',
    vacancies: 199,
    items: 'Testando area do items do cardapio, laksakmskamskamsakmskamskamsk',
    active: false
  },
]

export function Home() {
  const [confirm, setConfirm] = useState(false)
  const { bottom, top } = useSafeAreaInsets()


  return (
    <Container source={backgroundImage}>
      <ScrollView 
        contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }} 
        style={{ paddingTop:160, paddingHorizontal:12 }}
      >
        <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingBottom:12 }}>
          <SubTitle style={{ fontSize:18 }}>Cardápio Semanal</SubTitle>
          <TextMenu style={{ color:'#1EC072', fontSize:14 }}>Ver Tudo</TextMenu>
        </View>
        <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:12, paddingBottom:20  }}>
          <View style={{ flexDirection: 'row', gap: 32 }}>
            <TextMenu>Dia</TextMenu>
            <TextMenu>Data</TextMenu>
          </View>
          <TextMenu>Agendar</TextMenu>
        </View>

        {data.map((item, index) => (
          <Menu 
            key={index} 
            date={item.date}
            day={item.day}
            time={item.time}
            vacancies={item.vacancies}
            items={item.items}
            active={item.active}
          />
        ))}
       
        {/* <ContainerMenu>
          <TimerContainerMenu>
            <TimerBoxMenu>
              <TimerMenu>Tempo restante: 00 dias 04:40:22</TimerMenu>
            </TimerBoxMenu>
          </TimerContainerMenu>

            <HeaderContainerMenu>
              <TextMenuDay>Terça-feira</TextMenuDay>
              <HeaderBoxMenu>
                <TextMenu>05/06/2023</TextMenu>
                <TextMenuVagas>199 vagas Restantes</TextMenuVagas>
              </HeaderBoxMenu>
              <Switch
                style={{ alignItems: 'center', justifyContent: 'center', marginRight:8 }}
                // disabled
                value={confirm}
                onValueChange={setConfirm}
                trackColor={{ false: '#EB6961', true: '#406854' }}
                thumbColor={!confirm ? '#1EC072' : '#EB6961'}
                ios_backgroundColor={!confirm ? '#1ec0727f' : '#eb68617d'}
              />
            </HeaderContainerMenu>
            <TextMenuItems>Testando area do items do cardapio, laksakmskamskamsakmskamskamsk</TextMenuItems>
          </ContainerMenu>
          <ContainerMenu>
          <TimerContainerMenu>
            <TimerBoxMenu>
              <TimerMenu>Tempo restante: 00 dias 04:40:22</TimerMenu>
            </TimerBoxMenu>
          </TimerContainerMenu>

            <HeaderContainerMenu>
              <TextMenuDay>Quarta-feira</TextMenuDay>
              <HeaderBoxMenu>
                <TextMenu>05/06/2023</TextMenu>
                <TextMenuVagas>199 vagas Restantes</TextMenuVagas>
              </HeaderBoxMenu>
              <Switch
                style={{ alignItems: 'center', justifyContent: 'center', marginRight:8 }}
                // disabled
                value={confirm}
                onValueChange={setConfirm}
                trackColor={{ false: '#EB6961', true: '#406854' }}
                thumbColor={!confirm ? '#1EC072' : '#EB6961'}
                ios_backgroundColor={!confirm ? '#1ec0727f' : '#eb68617d'}
              />
            </HeaderContainerMenu>
            <TextMenuItems>Testando area do items do cardapio, laksakmskamskamsakmskamskamsk</TextMenuItems>
          </ContainerMenu>
          <ContainerMenu>
          <TimerContainerMenu>
            <TimerBoxMenu>
              <TimerMenu>Tempo restante: 00 dias 04:40:22</TimerMenu>
            </TimerBoxMenu>
          </TimerContainerMenu>

            <HeaderContainerMenu>
              <TextMenuDay>Quinta-feira</TextMenuDay>
              <HeaderBoxMenu>
                <TextMenu>05/06/2023</TextMenu>
                <TextMenuVagas>199 vagas Restantes</TextMenuVagas>
              </HeaderBoxMenu>
              <Switch
                style={{ alignItems: 'center', justifyContent: 'center', marginRight:8 }}
                // disabled
                value={confirm}
                onValueChange={setConfirm}
                trackColor={{ false: '#EB6961', true: '#406854' }}
                thumbColor={!confirm ? '#1EC072' : '#EB6961'}
                ios_backgroundColor={!confirm ? '#1ec0727f' : '#eb68617d'}
              />
            </HeaderContainerMenu>
            <TextMenuItems>Testando area do items do cardapio, laksakmskamskamsakmskamskamsk</TextMenuItems>
          </ContainerMenu>
          <ContainerMenu>
          <TimerContainerMenu>
            <TimerBoxMenu>
              <TimerMenu>Tempo restante: 00 dias 04:40:22</TimerMenu>
            </TimerBoxMenu>
          </TimerContainerMenu>

            <HeaderContainerMenu>
              <TextMenuDay>Sexta-feira</TextMenuDay>
              <HeaderBoxMenu>
                <TextMenu>05/06/2023</TextMenu>
                <TextMenuVagas>199 vagas Restantes</TextMenuVagas>
              </HeaderBoxMenu>
              <Switch
                style={{ alignItems: 'center', justifyContent: 'center', marginRight:8 }}
                // disabled
                value={confirm}
                onValueChange={setConfirm}
                trackColor={{ false: '#EB6961', true: '#406854' }}
                thumbColor={!confirm ? '#1EC072' : '#EB6961'}
                ios_backgroundColor={!confirm ? '#1ec0727f' : '#eb68617d'}
              />
            </HeaderContainerMenu>
            <TextMenuItems>Testando area do items do cardapio, laksakmskamskamsakmskamskamsk</TextMenuItems>
          </ContainerMenu> */}

          <View style={{ height:250 }} />
      </ScrollView>

      <Header />
    </Container>
  );
}