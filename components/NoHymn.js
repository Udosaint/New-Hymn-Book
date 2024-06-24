import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router'

export default function NoHymn({ hymn }) {

    const [hymnNumber, setHymnNumber] = useState(hymn);
    const [newhymn, setNewHymn] = useState("");
    const getHymn = () => {
        if (newhymn.length > 0) {
            setHymnNumber(newhymn);
            router.replace({ pathname: './hymn', params: { hymn: newhymn } });
        } else {
            Alert.alert("Hymn Number", "Please enter hymn number");
        }
    };
    return (
        <View
            style={{ flex: 1 }}
            className="flex-1  bg-blue-50">
            <Stack.Screen
                options={{ title: "HYMN " + hymnNumber, headerTitleAlign: "center" }}
            />

            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    padding: 10
                }}
            >
                <Text
                    style={{
                        alignItems: "center",
                        textTransform: "uppercase",
                        marginBottom: 10,
                        textAlign: "center",
                        fontSize: 22
                    }}
                    className="text-dark uppercase font-extrabold mb-3">
                    Hymn {hymnNumber} is not available yet
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        paddingHorizontal: 10,
                        backgroundColor: "#0669c6",
                        paddingVertical: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <View
                        style={{ flex: 1 }}
                        className="w-[75%]">
                        <TextInput
                            style={{ fontWeight: "600" }}
                            placeholder="Enter Hymn Number"

                            cursorColor={"#000"}
                            keyboardType="numeric"
                            onChangeText={setNewHymn}
                            value={newhymn}
                        />
                    </View>

                    <View
                        style={{
                            alignContent: "center",
                            justifyContent: "center"
                        }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#3f4eee', padding: 10, borderRadius: 5 }}
                            onPress={getHymn}
                        >
                            <Text
                                style={{ fontSize: 15, fontWeight: "bold", textTransform: "uppercase", color: "white" }}
                            >
                                Send
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}