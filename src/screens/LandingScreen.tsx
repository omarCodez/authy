import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../context/AuthProvider';
import {authorize} from 'react-native-app-auth';
import {config} from '../../App';

const LandingScreen = ({navigation}: any) => {
  const {isAuthenticated} = useContext(AuthContext);

  const handleLogin = async () => {
    const result = await authorize(config);
    console.log(result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome, user</Text>
        {isAuthenticated ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.buttonText}>Go to Profile Page</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 40,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#BD1E1E80',
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LandingScreen;
