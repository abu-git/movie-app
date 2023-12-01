import { View, Text, Image, TouchableOpacity, Platform, Dimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles } from '../theme'

import { Shadow } from 'react-native-shadow-2'


const verticalMargin = ' my-3'
var {width, height} = Dimensions.get('window')

export default function PersonScreen() {
    const navigation = useNavigation()
    const [isFavourite, toggleFavourite] = useState(false)

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
            </View>
        </ScrollView>
    )
}