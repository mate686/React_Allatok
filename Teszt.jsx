import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView,StatusBar } from 'react-native-web';

function Teszt() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Reszponzív ScrollView példa</Text>

        {/* Tartalom */}
        <View style={styles.box}><Text style={styles.text}>1. Elem</Text></View>
        <View style={styles.box}><Text style={styles.text}>2. Elem</Text></View>
        <View style={styles.box}><Text style={styles.text}>3. Elem</Text></View>
        <View style={styles.box}><Text style={styles.text}>4. Elem</Text></View>
        <View style={styles.box}><Text style={styles.text}>5. Elem</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,                     // ✅ SafeAreaView kitölti a képernyőt
    backgroundColor: '#0f172a',  // háttérszín
  },
  scrollView: {
    flex: 1,                     // ✅ ScrollView is kitölti a SafeAreaView-t
  },
  scrollContent: {
    flexGrow: 1,                 // ✅ tartalom is nyúlik a képernyőhöz, ha kevés elem van
    padding: 16,
    alignItems: 'center',        // vízszintes középre
    justifyContent: 'center',    // függőleges középre, ha kevés tartalom van
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 24,
  },
  box: {
    width: '90%',                // ✅ reszponzív szélesség — kijelző méretéhez igazodik
    height: 150,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#0f172a',
    fontSize: 18,
  },
});

export default Teszt
