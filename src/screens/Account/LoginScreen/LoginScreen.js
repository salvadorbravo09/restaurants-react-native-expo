import { View, ScrollView } from "react-native";
import { styles } from "./LoginScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { Text, Image } from "@rneui/themed";
import { screen } from "../../../utils";

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };

  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/images/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text>Estamos en el login</Text>

        <Text onPress={goToRegister}>Registrarse</Text>
      </View>
    </ScrollView>
  );
}
