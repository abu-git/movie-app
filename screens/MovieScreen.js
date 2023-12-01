import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme, styles } from '../theme'
import { ArrowLeftIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

import Cast from '../components/Cast'
import MovieList from '../components/MovieList'

var {width, height} = Dimensions.get('window')

export default function MovieScreen() {
    const { params: item } = useRoute()
    const navigation = useNavigation()
    const [isFavourite, toggleFavourite] = useState(false)
    const [cast, setCast] = useState([1,2,3,4,5])
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5])

    let movieName = "Ant-Man and the Wasp: Quantumania"

    useEffect(() => {
        //call api

    }, [item])

    return (
       <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900"
       >
            {/* back button and movie poster */}
            <View className="w-full">
                <View>
                    <Image source={require('../assets/images/moviePoster2.png')} 
                        style={{width, height: height*0.55}} 
                    />
                    <LinearGradient 
                        colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']} 
                        style={{width, height: height*0.40}}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                    />
                </View>
                <SafeAreaView className="absolute top-1 w-full flex-row justify-between items-center px-4">
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1" >
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size="35" color={isFavourite? theme.background: 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>

            {/* movie details */}
            <View style={{marginTop: -(height*0.09)}} className="space-y-3">
                {/* title */}
                <Text className="text-white text-center text-3xl font-bold tracking-widest">
                    {
                        movieName
                    }
                </Text>

                {/* status, release, runtime */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released • 2020 • 170 min
                </Text>

                {/* genres */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Action •  
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Thriller •  
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Comedy 
                    </Text>
                </View>

                {/* description */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.
                </Text>
            </View>

            {/* cast */}
            <Cast navigation={navigation} cast={cast} />

            {/* similar movies */}
            <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
       </ScrollView>
    )
}