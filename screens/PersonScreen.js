import { View, Text, Image, TouchableOpacity, Platform, Dimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles } from '../theme'

import { Shadow } from 'react-native-shadow-2'
import MovieList from '../components/MovieList'


const verticalMargin = ' my-3'
var {width, height} = Dimensions.get('window')

export default function PersonScreen() {
    const navigation = useNavigation()
    const [isFavourite, toggleFavourite] = useState(false)
    const [personMovies, setPersonMovies] = useState([1,2,3,4])

    return (
        <ScrollView className="flex-1 bg-neutral-900"  contentContainerStyle={{paddingBottom: 20}}>
            {/* back button and toggle favourite */}
            <SafeAreaView className={"flex-row justify-between items-center mx-4 z-10 " + verticalMargin}>
                <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={()=> navigation.goBack()}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
                    <HeartIcon size="35" color={isFavourite? 'red': 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* person details */}
            <View>
                <View className="flex-row justify-center">
                    <View className="h-80">
                        <Shadow distance={40} startColor={'#2c2e2d'} endColor={'#171717'} offset={[0, 0]}>
                            <View style={{ borderRadius: 199 }} className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2">
                                    <Image 
                                        source={require('../assets/images/castImage2.png')} 
                                        //source={{uri: image342(person?.profile_path) || fallbackPersonImage}}
                                        style={{height: height*0.43, width: width*0.74}}
                                    />
                            </View>
                        </Shadow>
                    </View>
                </View>

                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">
                        Keanu Reeves
                    </Text>

                    <Text className="text-neutral-500 text-base text-center">
                        London, United Kingdom
                    </Text>
                </View>

                <View className="mx-3 p-3 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full ">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold ">Gender</Text>
                        <Text className="text-neutral-300 text-sm">
                            Male
                        </Text>
                    </View>

                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold ">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">
                            1964-09-02
                        </Text>
                    </View>

                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold ">known for</Text>
                        <Text className="text-neutral-300 text-sm">
                            Acting
                        </Text>
                    </View>

                    <View className="px-2 items-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">
                            84.23 % 
                        </Text>
                    </View>
                </View>
                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">
                    Keanu Charles Reeves, a Canadian-American actor, is best known for his portrayal as Neo in the action film series The Matrix, Ted Logan in Bill & Ted's Excellent Adventure and Bill & Ted's Bogus Journey, and Officer Jack Traven in Speed. Other notable roles include those of Siddhartha Gautama in Little Buddha, Scott Favor opposite River Phoenix in the drama My Own Private Idaho, Johnny Mnemonic opposite Dolph Lundgren in a science fiction film, Kevin Lomax's complete reverse Al Pacino in the psychological drama The Devil's Advocate, the chevalier Danceny in Dangerous Liaisons, as well as the lead roles in Chain Reaction, Constantine, and the epic surf drama Point Break.
                    </Text>
                </View>


                {/* person movies */}
                <MovieList title="Movies" hideSeeAll={true} data={personMovies} />
            </View>
        </ScrollView>
    )
}