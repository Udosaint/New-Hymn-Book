import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
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
            style={{ flex: 1, justifyContent: "center" }}
            className="bg-neutral-300"
        >

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#bbdefb",
                    padding: 20,
                }}
            >
                <View style={{ flex: 1 }}>
                    <TextInput
                        style={{ flex: 1, fontWeight: "800" }}
                        placeholder="Enter Hymn Number"
                        cursorColor={"#000"}
                        keyboardType="numeric"
                        onChangeText={setHymn}
                        value={hymn}
                    />
                </View>

                <View style={{ alignContent: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#3f4eee', padding: 10, borderRadius: 5 }}
                        className="bg-blue-600 p-3.5 rounded px-6 ml-3"
                        onPress={getHymnBook}
                    >
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}