import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage}
                               source={require('./assets/user.png')}/>
                    </View>
                    <Text style={styles.cardName}>
                        John Doe
                    </Text>
                    <Text style={styles.cardOccupation}>
                        React Native Developer
                    </Text>
                    <Text style={styles.cardDescription}>
                        John is a highly proficient developer with 5 years experience building React Native applications for iOS and Android.
                    </Text>

                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        padding: 20,
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        padding: 15,
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
        color: 'black',
        marginTop: 30,
        fontSize: 24,
    },
    cardOccupation: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 14,
        textDecorationLine: 'underline',
        marginTop: 5,

    },
    cardDescription: {
        color: 'black',
        textAlign: 'center',
    }
});
