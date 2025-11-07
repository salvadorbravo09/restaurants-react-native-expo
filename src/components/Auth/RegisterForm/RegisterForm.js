import { View, Text } from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { styles } from "./RegisterForm.styles";
import { initialValues, validationSchema } from "./RegisterForm.data";

export function RegisterForm() {
  const formik = useFormik({
    initialValues: initialValues, // Valores iniciales del formulario
    validationSchema: validationSchema(), // Obtiene las validacion de Yup
    validateOnChange: false, // Muestra el mensaje de error cuando se da click al boton
    onSubmit: (formValue) => {
      console.log("formulario enviado");
      console.log(formValue);
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email} // Muestra el mensaje de error
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.icon}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.input}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.icon}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
      />
    </View>
  );
}
