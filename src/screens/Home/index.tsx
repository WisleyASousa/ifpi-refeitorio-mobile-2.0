import { Container, ContainerMenu, HeaderBoxMenu, HeaderContainerMenu, SubTitle, TextMenu, TextMenuDay, TextMenuItems, TextMenuVagas, TimerBoxMenu, TimerContainerMenu, TimerMenu } from "./styles";

import backgroundImage from "../../assets/background.png";
import { Header } from "../../components/Header";
import { ScrollView, Switch, View } from "react-native";
import { useEffect, useState } from "react";
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
  const [menuData, setMenuData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/menu')
  //       if (!response.ok) {
  //         throw new Error('Erro ao obter os menus')
  //       }
  //       const data = await response.json()
  //       setMenuData(data)
  //     } catch (error) {
  //       console.error(error)
  //     }

        
  //   }
  //   fetchData()
  // }, [])
  // console.log(menuData)
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
          <View style={{ height:250 }} 
          />
      </ScrollView>

      {/* <Header /> */}
    </Container>
  );
}