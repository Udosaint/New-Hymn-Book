import { View, Text, Alert, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

import { Colors } from '../constants/Colors.ts';

import hymnDataFrom1To200 from "../assets/hymns/hymn-1-200.json";
import hymnDataFrom201To400 from "../assets/hymns/hymn-201-400.json";
import hymnDataFrom401To200 from "../assets/hymns/hymn-401-600.json";
import hymnDataFrom601To865 from "../assets/hymns/hymn-601-865.json";
import NoHymn from '../components/NoHymn.js';

export default function Hymn() {

    const params = useLocalSearchParams();


    const [hymnNumber, setHymnNumber] = useState(params.hymn);


    const [myhymn, setMyhymn] = useState([]);

    useEffect(() => {
        loadHymn();
    }, [loadHymn]);



    const loadHymn = () => {

        if (hymnNumber <= 200) {
            const isHymn = hymnDataFrom1To200.filter((item) => item.id == hymnNumber);
            setMyhymn(isHymn);
        } else if (hymnNumber <= 400) {
            const isHymn = hymnDataFrom201To400.filter((item) => item.id == hymnNumber);
            setMyhymn(isHymn);
        } else {
            return <NoHymn hymn={hymnNumber} />
        }

        // else if (hymnNumber <= 600) {
        //     const isHymn = hymnDataFrom401To200.filter((item) => item.id == hymnNumber);
        //     setMyhymn(isHymn);
        // } else {
        //     const isHymn = hymnDataFrom601To865.filter((item) => item.id == hymnNumber);
        //     setMyhymn(isHymn);
        // }

    }




    if (myhymn.length === 0) {
        return <NoHymn hymn={hymnNumber} />
    }


    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen
                options={{ title: "HYMN " + hymnNumber, headerTitleAlign: "center" }}
            />
            <ScrollView style={{ padding: 10 }}>
                <View>
                    {myhymn.map((item) => (
                        <View key={item.id} style={{ marginBottom: 5 }}>

                            {/* Hymn Title */}
                            <View style={{ alignItems: "center", marginBottom: 10 }}>

                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: "800",
                                        color: "blue",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.title}
                                </Text>
                            </View>

                            {/* Hymn Contents */}
                            {item.contents.map((verse, index) => (
                                <View key={index}
                                    style={{
                                        paddingLeft: 20,
                                        paddingBottom: 15
                                    }}
                                >
                                    {/* Verse or Chourus */}

                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: "800",
                                            textTransform: "capitalize",
                                            marginBottom: 3,
                                            fontStyle: verse.number.includes("chorus") ? "italic" : ""
                                        }}
                                    >
                                        {verse.number}
                                    </Text>

                                    {verse.data.map((line, index) => (
                                        <View key={index} style={{ marginBottom: 3 }}>
                                            <Text style={{
                                                fontSize: 17,
                                                textAlign: "left",
                                                fontStyle: verse.number.includes("chorus") ? "italic" : ""
                                            }}>
                                                {line}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )

}