import React from 'react';
import { ScrollView, View, ImageBackground, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView,StatusBar } from 'react-native-web';

function Card(prop){
    return(
    <View style={styles.card}>
        <View style={styles.imageWrap}>
        <Image source={{uri: prop.image}} style={styles.image} />
        </View>
    <Text style={styles.name}>{prop.name}</Text>
    <Text style={styles.description}>{prop.description}</Text>
    </View>
    )
}


function Kartya(){
    return(
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
            <ScrollView style={styles.bg} contentContainerStyle={styles.scrollContent}>
              <ImageBackground 
                      source={require('./kepek/panda.webp')} 
                      imageStyle={styles.bgImage}
                      style={{ flex: 1,width:"100%",height:"100%" }}      
                      resizeMode="cover">
                <Text style={styles.title}>Állatkertünk lakói </Text>
                 <View style={styles.grid}>
                      <Card
                        name = "Alpaka"
                        description = "Az alpaka Dél-Amerikában élő háziasított teveféle, amelyet főként puha gyapjáért tenyésztenek."
                        image = "https://perlagro.hu/wp-content/uploads/2024/03/alpakka.jpg"
                      />
                      <Card
                        name = "Tigris"
                        description = "A tigris a legnagyobb termetű macskaféle, erőteljes ragadozó, amely Ázsiában él."
                        image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Adult_male_Royal_Bengal_tiger.jpg/1280px-Adult_male_Royal_Bengal_tiger.jpg"
                      />
                      <Card
                        name = "Krokodil"
                        description = "A krokodil nagy testű hüllő, amely főként folyókban és mocsarakban él, és kiváló vadász."
                        image = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Crocodylus_acutus_mexico_02-edit1.jpg/1200px-Crocodylus_acutus_mexico_02-edit1.jpg"
                      />
                      <Card
                        name = "Víziló"
                        description = "A víziló félig vízi életmódot folytató emlős, amely Afrika nagy folyóiban és tavainak partvidékén él."
                        image = "https://pecszoo.hu/wp-content/uploads/2023/06/Balint-6-scaled.webp"
                      />
                    </View> 
                    </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a', // egységes a StatusBar színével
  },
  bg: {
    flex: 1,
    resizeMode: 'cover'
  },
  bgImage: {
    opacity: 0.25,
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },

  // Rács beállítások
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12, // RN 0.71+
    justifyContent: 'space-between',
  },

  // Kártya: 2 oszlop → kb. fél szélesség
  card: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    width: '48%', // két oszlophoz: ~ (100% - gap) / 2 → egyszerűsítve 48%
  
  },
  image: {
    width: '100%',
    marginBottom: 8,
    height: '100%',
    resizeMode:"cover"
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#334155',
    textAlign: 'center',
    marginTop: 4,
  },
  imageWrap: {
  width: '100%',
  aspectRatio: 1,       // négyzetes keret
  borderRadius: 10,
  overflow: 'hidden',   // Androidon így lesz valóban kerek a kép széle
  backgroundColor: '#eee', // opcionális: szép helykitöltő
},
});

export default Kartya
