import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
 
export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}
    >
      <ScrollView>
 
        {/* Header */}
        <Header />
        {/* Header */}
 
        {/* Conteúdo */}
        <View style={styles.content}>
          <Text style={styles.startTitle}>Refresque seu dia!</Text>
          <Text style={styles.startSubtitle}>Escolha seu açaí favorito de hoje</Text>
 
          <View style={styles.card}>
            <Image source={require('./assets/acai-img.png')} style={styles.image}></Image>
 
            <View style={styles.insidecard}>
              <View style={styles.cardTop}>
                <Text style={styles.featuredTitle}>Açaí Turbinado 500ml</Text>
                <View style={styles.tagDiv}><Text style={styles.featuredTag}>MAIS PEDIDO</Text></View>
              </View>
              <Text style={styles.featuredDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
            </View>
 
            <View style={styles.cardBottom}>
              <Text style={styles.featuredPrice}>R$22,90</Text>
              <View style={styles.featuredButton}>
                <Image source={require('./assets/bag.png')} style={styles.featuredImage}></Image>
                <Text style={styles.buttonText}>Adicionar</Text>
              </View>
            </View>
          </View>
 
 
          <Text style={styles.viewTitle}>Nossos Copos & Tigelas</Text>
          <View style={styles.containerMenu}>
 
            <View style={styles.cardMenu}>
              <Text style={styles.titleMenu}>Açaí Tradicional</Text>
              <Text style={styles.descriptionMenu}>Açaí cremoso com banana e granola tradicional</Text>
              <Text style={styles.priceMenu}>R$14,00</Text>
              <View style={styles.buttonAdd}>
                <Image style={styles.imgbutton}  source={require('./assets/icon-container.png')}></Image>
              </View>
            </View>
 
            <View style={styles.cardMenu}>
              <Text style={styles.titleMenu}>Copo Tropical</Text>
              <Text style={styles.descriptionMenu}>Camadas de açaí, morango, kiwi e leite em pó</Text>
              <Text style={styles.priceMenu}>R$18,50</Text>
              <View style={styles.buttonAdd}>
                <Image style={styles.imgbutton}  source={require('./assets/icon-container.png')}></Image>
              </View>
            </View>
 
            <View style={styles.cardMenu}>
              <Text style={styles.titleMenu}>Vitamina de Açaí</Text>
              <Text style={styles.descriptionMenu}>Bebida energética batida com guaraná e aveia</Text>
              <Text style={styles.priceMenu}>R$12,00</Text>
              <View style={styles.buttonAdd}>
                <Image style={styles.imgbutton} source={require('./assets/icon-container.png')}></Image>
              </View>
            </View>
 
            <View style={styles.cardMenu}>
              <Text style={styles.titleMenu}>Açaí Fit Zero</Text>
              <Text style={styles.descriptionMenu}>Zero adição de açúcar, com chia </Text>
              <Text style={styles.priceMenu}>R$16,90</Text>
              <View style={styles.buttonAdd}>
                <Image style={styles.imgbutton}  source={require('./assets/icon-container.png')}></Image>
              </View>
            </View>
 
          </View>
 
        </View>
        {/* Conteúdo */}
 
        {/* Footer */}
 
        {/* Footer */}
 
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF9FC',
  },
  content: {
    paddingHorizontal: 24
  },
 
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 16,
    shadowColor: '#2C1B300F',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    elevation: 3,
    margin: 16
  },
 
  insidecard: {
    margin: 8
  },
 
  image: {
    width: 318,
    height: 160,
    borderRadius: 16,
 
  },
 
  startTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#2C1B30'
  },
  startSubtitle: {
    fontSize: 15,
    color: '#644D6A'
  },
 
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
 
  featuredTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: "#2C1B30",
    marginBottom: 8
  },
 
  featuredTag: {
    color: "#7B1FA2",
    fontWeight: '800',
    fontSize: 12,
    marginTop: 2,
    marginLeft: 2,
    marginRight: 2
  },
 
  tagDiv: {
    backgroundColor: "#F3E5F5",
    borderRadius: 6,
    width: 90,
    height: 21,
    marginLeft: 16,
    marginTop: 3,
    alignItems: 'center',
  },
 
  featuredDescription: {
    fontSize: 13,
    color: '#644D6A',
    marginBottom: 8
  },
 
  featuredPrice: {
    color: "#7B1FA2",
    fontWeight: '800',
    fontSize: 20,
    paddingHorizontal: 10,
  },
 
  featuredButton: {
    backgroundColor: '#7B1FA2',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 6,
    borderRadius: 20,
    width: 109,
    height: 31
  },
 
  featuredImage: {
    width: 14,
    marginRight: 6,
    marginBottom: 2
  },
 
  buttonText: {
    color: '#ffff',
    fontWeight: '700',
    fontSize: 12,
    display: 'flex',
  },
 
  cardBottom: {
    marginTop: 4,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
 
  containerMenu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
 
  viewTitle: {
    color: '#2C1B30',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 10
  },
 
  cardMenu: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 14,
    width: '48%',
    marginTop: 16,
    elevation: 2,
  },
 
  titleMenu: {
    fontSize: 15,
    fontWeight: '800',
    color: '#2C1B30',
    marginBottom: 4,
  },
 
  descriptionMenu: {
    fontSize: 12,
    color: '#644D6A',
    marginBottom: 12,
  },
 
  priceMenu: {
    fontSize: 16,
    fontWeight: '800',
    color: '#7B1FA2',
  },
 
  buttonAdd: {
    backgroundColor: '#7B1FA2',
    borderRadius: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 40,
    height: 40,
    alignSelf: 'flex-end'

  },

  imgbutton:{
    width: 18
  }
 
});