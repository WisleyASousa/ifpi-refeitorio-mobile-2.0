import { Switch } from "react-native";
import { ContainerMenu, HeaderBoxMenu, HeaderContainerMenu, TextMenu, TextMenuDay, TextMenuItems, TextMenuVagas, TimerBoxMenu, TimerContainerMenu, TimerMenu, TimerMenuNumber } from "./styles";
import { useState } from "react";

interface MenuProps {
  day: string;
  date: string;
  time: string;
  vacancies: number;
  items: string;
  active: boolean
}

export function Menu({ day, date, time, vacancies, items, active }: MenuProps) {
  const [confirm, setConfirm] = useState(true)

  return (
    <ContainerMenu style={{ backgroundColor: `${confirm ? '#f03434b7' : '#00875F'}` }}>
      
      <TimerContainerMenu>
        <TimerBoxMenu>
          <TimerMenu>Tempo restante: <TimerMenuNumber style={{ color: `${active ? '#F03434' : '#F2D600'}` }}>{time}</TimerMenuNumber></TimerMenu>
        </TimerBoxMenu>
      </TimerContainerMenu>

      <HeaderContainerMenu>
        <TextMenuDay>{day}</TextMenuDay>
        <HeaderBoxMenu>
          <TextMenu>{date}</TextMenu>
          <TextMenuVagas>{vacancies} vagas Restantes</TextMenuVagas>
        </HeaderBoxMenu>
        <Switch
          style={{ alignItems: 'center', justifyContent: 'center', marginRight: 8 }}
          disabled={active}
          value={confirm}
          onValueChange={setConfirm}
          trackColor={{ false: '#EB5757', true: '#406854' }}
          thumbColor={!confirm ? '#1EC072' : '#EB5757'}
          ios_backgroundColor={!confirm ? '#1ec0727f' : '#eb68617d'}
        />
      </HeaderContainerMenu>
      <TextMenuItems>{items}</TextMenuItems>
    </ContainerMenu>
  )
}