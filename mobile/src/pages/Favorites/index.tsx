import React, {useState} from "react";
import {ScrollView, View} from "react-native";
import {useFocusEffect} from '@react-navigation/native';

import styles from "./styles";
import PageHeader from "../../compnents/PageHeader";
import TeacherItem, {Teacher} from "../../compnents/TeacherItem";
import AsyncStorage from "@react-native-community/async-storage";

function Favorites() {
    const [favorites, setFavorites] = useState([]);


    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"/>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited // React aceita como true caso não passemos valor boolean
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;