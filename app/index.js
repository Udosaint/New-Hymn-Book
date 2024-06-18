import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Alert, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';

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
            className=" bg-blue-50"
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
                className="flex-row items-center 
                justify-between gap-2 bg-sky-300
                 dark:bg-slate-300 px-4 py-4"
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
                        className=" bg-blue-800 p-10 rounded justify-center"
                        onPress={getHymnBook}
                    >
                        <Text className="text-center uppercase" style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}