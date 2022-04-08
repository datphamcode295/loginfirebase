import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const UselessTextInput = () => {
  const [email, onChangeEmail] = React.useState(null);
  const [pass, onChangePass] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder="Password"
      />
      <Button
        title="Login"
        
        onPress={() => console.log(email + ' ' + pass)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;