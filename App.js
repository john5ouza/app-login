import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, 
KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" translucent={false} />

    <Image 
      source={require('./src/assets/logo.png')}
      style={styles.logo}
      />

      <TextInput
        placeholder='username our e-mail'
        style={styles.input}
      />

      <TextInput
        placeholder='password'
        style={styles.input}
      />

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>i forgot my password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}> log in </Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{marginHorizontal: '3%'}}>our</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>new here?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpButton}>sign up</Text>
        </TouchableOpacity>
      </View>

      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'    
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '12%' : '16%',
    marginBottom: Platform.OS === 'android' ? '12%' : '16%',
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#F4F3F3',
    marginBottom: 20,
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#E63020'
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#E63020',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  loginText: {
    color: '#FFF',
    fontSize: 18,
  },
  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divisorLine: {
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 6
  },

  signUpContainer: {
    flexDirection: 'row',
    marginTop: '12%',
  },

  signUpText: {
    color: '#C4C4C4',
  },

  signUpButton: {
    color: '#E63020',
    fontWeight: 'bold',
  }
});
