import { Header } from "../../components/Header";
import { BoxAlert, Container, ContainerNonAtt, ListNonAtt, TextNonAtt, TitleNonAtt } from "./styles";
import backgroundImage from "../../assets/background.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import { WarningCircle } from "phosphor-react-native";


export function NonAttendance() {

  const [absenceCount, setabsenceCount] = useState(1);


  const { bottom, top } = useSafeAreaInsets()

  return (
    <Container source={backgroundImage}>
      <ScrollView 
        contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }} 
        style={{ paddingTop:160, paddingHorizontal:12 }}
      >
        <View style={{ paddingBottom:12, alignItems:'center' }}>
          <ContainerNonAtt>
            <ListNonAtt>
              < TitleNonAtt>Data</ TitleNonAtt>
              < TitleNonAtt style={{ color:`${absenceCount >= 3 ? `#F03434` : `#1EC072` }` }}>{`${absenceCount >= 3 ? `Aluno Bloqueado` : `Aluno Liberado` }`}</ TitleNonAtt>
              < TitleNonAtt style={{ color:`${absenceCount >= 3 ? `#F03434` : `#1EC072` }` }}>{absenceCount+`/3`}</ TitleNonAtt>
            </ListNonAtt>
            <ListNonAtt>
              <TextNonAtt>01 de maio de 2023 </ TextNonAtt>
            </ListNonAtt>
          </ContainerNonAtt>
          <BoxAlert>
            <WarningCircle size={32} color='#F03434'/>
            <TextNonAtt style={{ textAlign: 'center', paddingVertical:4 }}>{absenceCount ? `Compareça na Nutricionista para remover as ausências vigentes!` : `Você não possui ausência!`}</TextNonAtt>
          </BoxAlert>  
        </View>

        
        <View style={{ height:250 }} />  
      </ScrollView>
      <Header />
    </Container> 
    )
}