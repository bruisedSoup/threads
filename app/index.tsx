import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
const { useFonts, Unna_400Regular, Unna_700Bold } = require('@expo-google-fonts/unna');
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const SignInPage = () => {

  const [activeTab, setActiveTab] = useState("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts({
    Unna_400Regular,
    Unna_700Bold,
  });

  if(!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  const router = useRouter();

  const handleLogin = () => {
    router.replace("/tabs/home"); 
  }

  const handleSwitchToSignIn = () => {
    setActiveTab("signIn");
    setEmail("");
    setPassword("");
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.headerText, styles.unnaFontBold]}>THREADS</Text>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, activeTab === "signIn" && styles.activeTab]} 
          onPress={() => { setActiveTab("signIn"); setEmail(""); setPassword(""); }}>
            <Text style={[styles.tabText, activeTab === "signIn" && styles.activeTabText]}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.tab, activeTab === "register" && styles.activeTab]} 
          onPress={() => { setActiveTab("register"); setEmail(""); setPassword(""); }}>
            <Text style={[styles.tabText, activeTab === "register" && styles.activeTabText]}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          {activeTab === "signIn" ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#787676"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#787676"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="#787676"
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#787676"
              />
              <TextInput
                style={styles.input}
                placeholder="Create Username"
                placeholderTextColor="#787676"
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#787676"
              />
              <TextInput
                style={styles.input}
                placeholder="Create Password"
                placeholderTextColor="#787676"
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#787676"
                secureTextEntry
              />
            </>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>{activeTab === "signIn" ? "Sign In" : "Sign Up"}</Text>
          </TouchableOpacity>

          {activeTab === "register" && (
            <View style={styles.accountTextContainer}>
              <Text style={styles.accountText}>
                Already have an account?{' '}
                <Text style={styles.signInLink} onPress={handleSwitchToSignIn}>
                  Sign In
                </Text>
              </Text>
            </View>
          )}

          <Text style={styles.orText}>
            {activeTab === "signIn" ? "or join with" : null}
          </Text>

          {activeTab === "signIn" && (
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/images/google.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/images/facebook.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/images/instagram.png')} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>
          )}

        </View>

      </View>
    </SafeAreaView>
  );
}

export default SignInPage

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    backgroundColor: "white",
    flex: 1
  },

  header: {
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  headerText: {
    color: "black",
    fontSize: 32,
  },

  unnaFontBold: {
    fontFamily: "Unna_700Bold",
  },

  unnaFontRegular:{
    fontFamily: "Unna_400Regular",
  },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },

  tab:{
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },

  tabText: {
    color: "#999",
    fontSize: 25,
    padding: 8,
    fontFamily: "Unna_400Regular",
    alignItems: "center",
    letterSpacing: 0.5,
  },

  activeTab: {
    
  },

  activeTabText: {
    color: "black",
    borderBottomWidth: 3,
    borderBottomColor: "black",
    fontFamily: "Unna_700Bold",
  },

  formContainer: {
    paddingHorizontal: 30,
    marginTop: 15,
  },

  input:{
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    fontFamily: "Unna_400Regular",
    fontSize: 20,
    letterSpacing: 0.5,
    paddingVertical: 12,
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 80,
    margin: 10,
    letterSpacing: 0.5,
    borderRadius: 5,
  },

  buttonText: {
    color: "white",
    fontSize: 25,
    fontFamily: "Unna_700Bold",
    textAlign: 'center',
  },

  accountTextContainer: {
    marginTop: 10,
    marginBottom: 10,
  },

  accountText: {
    color: "#999",
    fontSize: 18,
    fontFamily: "Unna_400Regular",
    letterSpacing: 0.5,
  },

  signInLink: {
    color: "black",
    textDecorationLine: 'underline',
    fontFamily: "Unna_700Bold",
  },

  orText: {
    color: "#999",
    fontSize: 18,
    fontFamily: "Unna_400Regular",
    margin: 10,
    letterSpacing: 0.5,
  },

  socialButtonsContainer: {
    flexDirection: "row",
    margin: 10,
  },

  socialButton: {
    padding: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    marginHorizontal: 8,
  },

  socialIcon: {
    width: 30,
    height: 30,
  },
})
