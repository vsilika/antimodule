import React, { useState } from 'react';
import Button from '../components/Button';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';


export default function Settings({ navigation }) {



    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.Text}

                >
                    DODAJ NOVU REGISTRACIJU
                </Text>
                <TextInput />
            </View>
            <View>
                <Button
                    mode="outlined"
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Dashboard' }],
                        })
                    }
                >
                    spremi
                </Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 20,
    },
    Text: {
        fontSize: 20,
    }

});
