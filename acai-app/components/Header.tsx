import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
    return(
        <View style={styles.header}>
            <View>
                <Text style={styles.headerTitle}>Açaí Prime</Text>
                <Text style={styles.headerSubtitle}>O sabor puro da amazônia</Text>
            </View>

            <View>
                <Image source={require('../assets/avatar.png')}
                style={styles.avatar}
                ></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        paddingTop: 60,
        paddingHorizontal: 24,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerTitle:{
        color: '#2C1B30',
        fontSize: 24,
        fontWeight: '800',
    },

    headerSubtitle:{
        color:'#644D6A',
        fontSize: 13,
        marginTop: 2
    },

    avatar:{
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#7B1FA2',
        borderWidth: 2
    }
})