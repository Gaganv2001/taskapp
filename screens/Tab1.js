import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Globe, Phone, Mail } from "react-native-feather";

const Tab1 = () => {
  const openURL = (url) => {
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  };

  const openWebpage = () => {
    openURL('https://www.example.com');
  };

  const makePhoneCall = () => {
    openURL('tel:+1234567890');
  };

  const sendEmail = () => {
    openURL('mailto:contact@example.com');
  };

  const openWhatsApp = () => {
    openURL('https://api.whatsapp.com/send?phone=9108588701');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tab 1</Text>
      <TouchableOpacity style={styles.button} onPress={openWebpage}>
        <Globe stroke="blue" width={30} height={30} />
        <Text style={styles.buttonText}>Open Webpage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={makePhoneCall}>
        <Phone stroke="blue" width={30} height={30} />
        <Text style={styles.buttonText}>Make Phone Call</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={sendEmail}>
        <Mail stroke="blue" width={30} height={30} />
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
        <Text style={[styles.buttonText, { color: 'green' }]}>Open WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Tab1;
