import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View ,TextInput} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import CustomButton from './components/CustomButton';

 
export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === '') {
      
      setMessage('Por favor, informe seu nome')
    } else {
      setMessage(`Olá, ${name}! Pedido iniciado com sucesso.`)
    }
  }
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
              <Image source={require('./assets/acai-tradicional.png')}></Image>
              <Text style={styles.titleMenu}>Açaí Tradicional</Text>
              <Text style={styles.descriptionMenu}>Açaí cremoso com banana e granola tradicional</Text>
              <View style={styles.rowMenu}>
              <Text style={styles.priceMenu}>R$14,00</Text>
              <View style={styles.buttonAdd}>
                <Image style={styles.imgbutton}  source={require('./assets/icon-container.png')}></Image>
                </View>
              </View>
            </View>
 
            <View style={styles.cardMenu}>
              <Image source={require('./assets/copo-acai.png')}></Image>
              <Text style={styles.titleMenu}>Copo Tropical</Text>
              <Text style={styles.descriptionMenu}>Camadas de açaí, morango, kiwi e leite em pó</Text>
              <View style={styles.rowMenu}>
              <Text style={styles.priceMenu}>R$18,50</Text>
              <View style={styles.buttonAdd}>
                <Image style={styles.imgbutton}  source={require('./assets/icon-container.png')}></Image>
              </View>
              </View>
            </View>
 
            <View style={styles.cardMenu}>
              <Image source={require('./assets/vitamina-acai.png')}></Image>
              <Text style={styles.titleMenu}>Vitamina de Açaí</Text>
              <Text style={styles.descriptionMenu}>Bebida energética batida com guaraná e aveia</Text>
              <View style={styles.rowMenu}>
              <Text style={styles.priceMenu}>R$12,00</Text>
              <View style={styles.buttonAdd}>
                <Image style={styles.imgbutton} source={require('./assets/icon-container.png')}></Image>
              </View>
              </View>
            </View>
 
            <View style={styles.cardMenu}>
              <Image source={require('./assets/tigela-acai.png')}></Image>
              <Text style={styles.titleMenu}>Açaí Fit Zero</Text>
              <Text style={styles.descriptionMenu}>Zero adição de açúcar, com chia </Text>
              <View style={styles.rowMenu}>
              <Text style={styles.priceMenu}>R$16,90</Text>
              <View style={styles.buttonAdd}>
                <Image style={styles.imgbutton}  source={require('./assets/icon-container.png')}></Image>
              </View>
              </View>
            </View>
 
          </View>

          <View style={styles.orderSection}>
            <Text style={styles.question}>Qual é o seu nome?</Text>
            <TextInput 
            style={styles.input}
            placeholder='Digite seu nome'
            value={name}
            onChangeText={setName}
            ></TextInput>
            <CustomButton title="Fazer meu pedido" onPress={handleOrder}/>
            {message !== '' && <Text style={styles.messageText}>{message}</Text>}
          </View>
        </View>
        {/* Conteúdo */}
 
        {/* Footer */}
        <Footer/>
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
    paddingHorizontal: 22
  },
 
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    shadowColor: '#2C1B300F',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    elevation: 3,
    marginTop: 16,
    padding: 16
  },
 
  insidecard: {
    margin: 8,
  },
 
  image: {
    borderRadius: 16,
    width: '100%'
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
    gap:5,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 6,
    borderRadius: 20,
    width: 109,
    height: 31,
    
  },
 
  featuredImage: {
    width: 14,
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
    elevation: 2
  },
 
  titleMenu: {
    fontSize: 15,
    fontWeight: '800',
    color: '#2C1B30',
    marginBottom: 4,
    marginTop: 10
  },
 
  descriptionMenu: {
    fontSize: 11,
    color: '#644D6A',
    marginBottom: 16,
  },
 
  priceMenu: {
    fontSize: 14,
    fontWeight: '800',
    color: '#7B1FA2',
  },
 
  buttonAdd: {
    backgroundColor: '#7B1FA2',
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,

  },

  imgbutton:{
    width: 15
  },

  rowMenu:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:  'space-between',
    alignItems: 'center'
  },

  orderSection: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    padding: 16,
    marginTop: 25
  },

  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },

  input:{
    backgroundColor: "#F1EDF4",
    color: '#644D6A',
    borderRadius: 16,
    width: "100%",
    height: 56,
    paddingHorizontal: 20,
    fontSize: 16,
    flexDirection: 'row'
  },

  messageText:{
    fontSize: 16,
    fontWeight: "800",
    textAlign:'center',
    marginTop: 15,
    borderRadius:12,
    padding:12,
    backgroundColor: '#E8F5E9',
    color: '#2E7D32'
  },

  messageimg:{


  }
 
});