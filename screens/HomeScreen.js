import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { styles } from '../theme'

import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'

const HomeScreen = () => {
    const [trending, setTrending] = useState([1,2,3])
    const [upcoming, setUpcoming] = useState([1,2,3])
    const [topRated, setTopRated] = useState([1,2,3])

    const navigation = useNavigation()

    return (
        <View className="flex-1 bg-neutral-800">
            {/* searchbar and logo */}
            <SafeAreaView className="mb-2">
                <StatusBar style='light' />
                <View className="flex-row justify-between items-center mt-1 mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
                {/* Trending movies carousel*/}
                <TrendingMovies data={trending} />


                {/* upcoming movies */}
                <MovieList title="Upcoming" data={upcoming} />

                {/* top rated movies */}
                <MovieList title="Top Rated" data={topRated} />
                
            </ScrollView>
        </View>
        
    )
}

export default HomeScreen