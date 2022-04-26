import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

//https://www.youtube.com/watch?v=9pq9yR9nEqo

const UselessTextInput = () => {
  const [email, onChangeEmail] = React.useState("");
  const [pass, onChangePass] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);





  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      console.log('Signed in!')
      const user = userCredential.user;
      console.log(user)
    
    })
    .catch(error => {
      console.log(error)
    })
  }
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      console.log('Account created!')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const func = () => {
    console.log(email + ' ' + pass)
    onChangeEmail("")
    onChangePass("")
    handleSignIn()
  }

  const handleReset = ()=>{
    sendPasswordResetEmail(auth,"vandatpro2000@gmail.com")
    .then((respone) => {
      
      console.log(respone)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
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
        
        onPress={func}
      />
      <Button
        title="Create Account"
        onPress={handleCreateAccount}
      />
      <Button
        title="Reset password"
        onPress={handleReset}
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