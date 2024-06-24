import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Alert, ImageBackground, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';
import { Colors } from '../constants/Colors';

export default function Home() {

    const [hymn, setHymn] = useState("");

    const getHymnBook = () => {
        if (hymn.length > 0) {
            router.push({ pathname: './hymn', params: { hymn: hymn } });
            setHymn("");
        } else {
            Alert.alert("Hymn Number", "Please enter hymn number");
        }
    };
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Image
                className=""
                source={require('../assets/images/icon.png')}
                style={{
                    flex: 1,
                    width: ' 100%',
                    height: '80%',
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0.3,
                    position: "absolute",
                    marginLeft: 50
                }}


            />

            <View
                style={style.hymnNumberHolder}
            >
                <View style={{ flex: 2 }}>
                    <TextInput
                        //className=" border-b-2"
                        style={{ flex: 1, fontWeight: "800" }}
                        placeholder="Enter Hymn Number"
                        cursorColor={"#000"}
                        keyboardType="numeric"
                        onChangeText={setHymn}
                        value={hymn}
                    />
                </View>

                <View style={{ flex: 0.5, alignContent: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={{ backgroundColor: 'rgb(30 64 175)', padding: 10, borderRadius: 5 }}
                        onPress={getHymnBook}
                    >
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "white", textTransform: "uppercase" }}>
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )

}


const style = StyleSheet.create({

    hymnNumberHolder: {

        flexDirection: "row",
        paddingHorizontal: 10,
        backgroundColor: "#0669c6",
        paddingVertical: 10,
        marginHorizontal: 6,
        alignContent: "center",
        justifyContent: "center"
    }

});