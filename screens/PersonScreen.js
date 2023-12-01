import { View, Text, Image, TouchableOpacity, Platform, Dimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles } from '../theme'


const verticalMargin = ' my-3'
var {width, height} = Dimensions.get('window')

export default function PersonScreen() {
    const navigation = useNavigation()
    const [isFavourite, toggleFavourite] = useState(false)
    return (
        <ScrollView className="flex-1 bg-neutral-900"  contentContainerStyle={{paddingBottom: 20}}>
            <SafeAreaView className={"flex-row justify-between items-center mx-4 z-10 " + verticalMargin}>
                <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={()=> navigation.goBack()}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
                    <HeartIcon size="35" color={isFavourite? 'red': 'white'} />
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    )
}