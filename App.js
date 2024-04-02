import React, { useState } from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Linking, Pressable } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo, AntDesign } from '@expo/vector-icons';

function HomeScreen({ navigation, route }) {
  const userId = 1;
  const profile = { name: 'Iqbal', Position: 'top' }
  const [showMore, setShowMore] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);



  let [fontsLoaded] = useFonts({
    "Inter_Regular": Inter_400Regular,
    "Inter_Bold": Inter_700Bold,
  });
  // // font is asynchronous thats way we use a loader
  if (!fontsLoaded) {
    return <ActivityIndicator />

  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const RowView = ({ label, value }) => {
    return (
      <View style={[styles.rowView, isDarkMode && styles.darkRowView]}>
        <Text style={[styles.label, isDarkMode && styles.darkLabel]}>
          {label}
        </Text>
        <Text style={[styles.value, isDarkMode && styles.darkValue]}>
          {value}
        </Text>
      </View>
    )
  }

  return (
    <ImageBackground
      source={isDarkMode ? require('./assets/dark-bg.png') : require('./assets/light-bg.png')}
      style={{ flex: 1 }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId, profile: profile })}>
        <Text style={[styles.profileButton, isDarkMode && styles.darkProfileButton]}>Profile</Text>
      </TouchableOpacity>
      <View style={[styles.mainContainer, isDarkMode && styles.darkMainContainer]}>
        {/* Upper section */}
        {!showMore && <View style={styles.upperSection}>
          <View style={styles.upperTextContainer}>
            <Text style={[styles.upperText, isDarkMode && styles.darkUpperText]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illum maiores voluptatibus, laudantium recusandae.laudantium recusandae.laudantium recusandae. </Text>
            <Text style={[styles.upperText, isDarkMode && styles.darkUpperText]}> -Ada Labless</Text>
          </View>
          <View>
            <Image
              source={require('./assets/refresh.png')}
            />
          </View>
        </View>}

        {/* Bottom section */}
        <View style={styles.bottomSection}>
          <View style={styles.greetingsContainer}>
            <Image source={require('./assets/sun.png')} />
            <Text style={[styles.greetingsText, isDarkMode && styles.darkGreetingsText]}>GOOD MORNING</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={[styles.time, isDarkMode && styles.darkTime]}>11:30</Text>
            <Text style={[styles.timeZone, isDarkMode && styles.darkTimeZone]}>BST</Text>
          </View>
          <View style={styles.locationContainer}>
            <Text style={[styles.location, isDarkMode && styles.darkLocation]}>LONDON,UK</Text>
          </View>
          <TouchableOpacity onPress={() => { setShowMore(!showMore) }} style={[styles.button, isDarkMode && styles.darkButton]}>
            <Text style={styles.buttonText}>{showMore ? "LESS" : "MORE"}</Text>
            <Image source={showMore ? require('./assets/arrow-up.png') : require('./assets/arrow-down.png')} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Expand Area */}
      {showMore &&
        <View style={[styles.expandArea, isDarkMode && styles.darkExpandArea]}>
          <RowView label={'current Timezone'} value={'Europe/London'} />
          <RowView label={'Day of the year'} value={'295'} />
          <RowView label={'Day of the week'} value={'5'} />
          <RowView label={'Week Number'} value={'42'} />
        </View>
      }

      <Pressable style={styles.darkModeButton} onPress={toggleDarkMode}>
        <Text style={styles.darkModeButtonText}>{isDarkMode ? "Light Mode" : "Dark Mode"}</Text>
      </Pressable>

    </ImageBackground>
  )
}

function ProfileScreen({ navigation, route }) {
  const { userId, profile } = route.params
  const handlePress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={[styles.container, { marginTop: 0 }]}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('./assets/icon.png')}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.profileDetailsContainer}>
          <Text style={styles.profileHeading}>The Octocate</Text>
          <Text style={[styles.profileText, { color: 'blue' }]}>octocate</Text>
          <Text style={styles.profileText}>Join 25 Jan 2011</Text>
        </View>
      </View>
      <View><Text>{userId}</Text></View>
      <View><Text>{profile.name}</Text></View>
      <View><Text>{profile.Position}</Text></View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          voluptas soluta dolorem nesciunt velit incidunt sapiente ipsa
          assumenda reiciendis sint!
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statText}>RePost</Text>
          <Text style={styles.statText}>8</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statText}>Follower</Text>
          <Text style={styles.statText}>3938</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statText}>Following</Text>
          <Text style={styles.statText}>9</Text>
        </View>
      </View>
      <View style={styles.linksContainer}>
        <View style={styles.link}>
          <Entypo name="location-pin" size={24} color="black" />
          <Text style={styles.linkText}>san francisco</Text>
        </View>
        <View style={styles.link}>
          <AntDesign name="link" size={24} color="black" />
          <Text
            style={[styles.linkText, { color: 'blue' }]}
            onPress={() => handlePress('https://nanodevlab.com/')}>
            https://nanodevlab.com/
          </Text>
        </View>
        <View style={styles.link}>
          <AntDesign name="twitter" size={24} color="black" />
          <Text
            style={[styles.linkText, { color: 'blue' }]}
            onPress={() => handlePress('https://twitter.com/iqbalshuvod')}>
            https://twitter.com/iqbalshuvod
          </Text>
        </View>
        <View style={styles.link}>
          <AntDesign name="github" size={24} color="black" />
          <Text
            style={[styles.linkText, { color: 'blue' }]}
            onPress={() =>
              handlePress('https://github.com/Iqbalhossainshuvo')
            }>
            https://github.com/Iqbalhossainshuvo
          </Text>
        </View>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  profileButton: {
    margin: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 28,
  },
  upperSection: {
    flexDirection: 'row',
  },
  upperTextContainer: {
    flex: 1,
    marginTop: 20,
  },
  upperText: {
    fontFamily: 'Inter_Regular',
    fontSize: 12,
    color: '#ffffff',
  },
  bottomSection: {
    marginBottom: 20,
  },
  greetingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingsText: {
    fontFamily: 'Inter_Regular',
    fontSize: 14,
    color: '#fff',
    marginLeft: 8,
    letterSpacing: 3,
  },
  time: {
    fontFamily: 'Inter_Bold',
    fontSize: 100,
    color: '#fff',
  },
  timeZone: {
    fontFamily: 'Inter_Regular',
    fontSize: 14,
    color: '#fff',
  },
  location: {
    fontFamily: 'Inter_Bold',
    fontSize: 15,
    color: '#fff',
    letterSpacing: 3,
  },
  button: {
    flexDirection: 'row',
    width: 115,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginTop: 50,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 3,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter_Bold',
    fontSize: 12,
    color: '#000',
    letterSpacing: 3,
  },
  expandArea: {
    backgroundColor: '#fff',
    opacity: 0.8,
    paddingHorizontal: 26,
    paddingVertical: 48,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
  },
  label: {
    fontFamily: 'Inter_Regular',
    fontSize: 10,
    color: '#303030',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  value: {
    fontFamily: 'Inter_Bold',
    fontSize: 16,
    color: '#303030',
    letterSpacing: 2,
  },
  darkModeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  darkModeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  darkRowView: {
    backgroundColor: '#303030',
  },
  darkLabel: {
    color: '#ffffff',
  },
  darkValue: {
    color: '#ffffff',
  },
  darkMainContainer: {
    backgroundColor: '#000000',
  },
  darkUpperText: {
    color: '#303030',
  },

  darkGreetingsText: {
    color: '#303030',
  },
  darkTime: {
    color: '#303030',
  },
  darkTimeZone: {
    color: '#303030',
  },
  darkLocation: {
    color: '#303030',
  },
  darkButton: {
    backgroundColor: '#303030',
  },
  darkExpandArea: {
    backgroundColor: '#303030',
  },
});





// import { ActivityIndicator, ImageBackground, StyleSheet, Text, View, Image, Pressable, TouchableOpacity,Linking } from 'react-native';
// import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
// import { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Entypo,AntDesign } from '@expo/vector-icons';

// function HomeScreen ({navigation,route}){
//   const userId =1;
//   const profile ={name:'Iqbal',Position:'top'}
//   const [showMore, setShowMore] = useState(false);

//   let [fontsLoaded] = useFonts({
//     "Inter_Regular": Inter_400Regular,
//     "Inter_Bold": Inter_700Bold,
//   });
//   // // font is asynchronous thats way we use a loader
//   if (!fontsLoaded) {
//     return <ActivityIndicator />

//   }


//   const RowView = ({ label, value }) => {
//     return (
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 8 }}>

//         <View>
//           <Text style={{ fontFamily: 'Inter_Regular', fontSize: 10, color: '#303030', letterSpacing: 2, textTransform: 'uppercase' }}>
//             {label}
//           </Text>
//         </View>

//         <View>
//           <Text style={{ fontFamily: 'Inter_Bold', fontSize: 16, color: '#303030', letterSpacing: 2 }}>{value}</Text>

//         </View>

//       </View>
//     )
//   }

//   return(
//     <ImageBackground
//         source={require('./assets/light-bg.png')}
//         style={{ flex: 1 }}
//       >
//         <TouchableOpacity onPress={()=>navigation.navigate('Profile',{userId,profile:profile})}>
//          <Text style={{margin:10,fontSize:14,fontWeight:'bold'}}>Profile</Text>
//         </TouchableOpacity>
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'space-between',
//             marginTop: 32,
//             paddingHorizontal: 28,
//           }}
//         >
//           {/* Upper section */}
//           {!showMore && <View style={{ flexDirection: 'row' }}>

//             <View style={{ flex: 1, marginTop: 20 }}>
//               <Text style={{ fontFamily: 'Inter_Regular', fontSize: 12, color: '#ffffff' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illum maiores voluptatibus, laudantium recusandae.laudantium recusandae.laudantium recusandae. </Text>
//               <Text style={{ fontFamily: 'Inter_Regular', fontSize: 12, color: '#ffffff', marginTop: 8 }}> -Ada Labless</Text>
//             </View>
//             <View>
//               <Image
//                 source={require('./assets/refresh.png')}
//               />
//             </View>
//           </View>}


//           {/* Buttom section */}

//           <View style={{ marginBottom: 20 }}>
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <Image source={require('./assets/sun.png')} />
//               {/* greetings text */}
//               <Text style={{ fontFamily: 'Inter_Regular', fontSize: 14, color: '#fff', marginLeft: 8, letterSpacing: 3 }}>GOOD MORNING</Text>
//             </View>
//             {/* Time */}
//             <View style={{ marginTop: 16 }}>
//               <Text style={{ fontFamily: 'Inter_Bold', fontSize: 100, color: '#fff', }}>
//                 11:30
//                 <Text style={{ fontFamily: 'Inter_Regular', fontSize: 14, color: '#fff' }}>BST</Text>
//               </Text>
//             </View>
//             {/* Location */}
//             <View style={{ marginTop: 16 }}>
//               <Text style={{ fontFamily: 'Inter_Bold', fontSize: 15, color: '#fff', letterSpacing: 3 }}>LONDON,UK</Text>
//             </View>
//             {/* Button */}
//             <TouchableOpacity onPress={() => { setShowMore(!showMore) }} style={{ flexDirection: 'row', width: 115, height: 40, backgroundColor: '#fff', borderRadius: 50, marginTop: 50, justifyContent: 'space-between', paddingLeft: 16, paddingRight: 3, alignItems: 'center' }}>
//               <Text style={{ fontFamily: 'Inter_Bold', fontSize: 12, color: '#000', letterSpacing: 3 }}>{showMore ? "LESS" : "MORE"}</Text>
//               <Image source={showMore ? require('./assets/arrow-up.png') : require('./assets/arrow-down.png')} />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Expand Area */}
//         {showMore &&
//           <View style={{ backgroundColor: '#fff', opacity: 0.8, paddingHorizontal: 26, paddingVertical: 48, }}>
//             <RowView label={'current Timezone'} value={'Europe/London'} />
//             <RowView label={'Day of the year'} value={'295'} />
//             <RowView label={'Day of the week'} value={'5'} />
//             <RowView label={'Week Number'} value={'42'} />
//           </View>
//         }

//       </ImageBackground>
//   )
// }

// function ProfileScreen({navigation,route}){
//   const {userId,profile }= route.params
//   const handlePress = (url) => {
//     Linking.openURL(url);
//   };
//   return(
//     <View style={styles.container}>
//     <View style={styles.profileContainer}>
//       <View style={styles.profileImageContainer}>
//         <Image
//           source={require('./assets/icon.png')}
//           style={styles.profileImage}
//         />
//       </View>
      
//       <View style={styles.profileDetailsContainer}>
//         <Text style={styles.profileHeading}>The Octocate</Text>
//         <Text style={[styles.profileText, { color: 'blue' }]}>octocate</Text>
//         <Text style={styles.profileText}>Join 25 Jan 2011</Text>
//       </View>
//     </View>
//     <View><Text>{userId}</Text></View>
//     <View><Text>{profile.name}</Text></View>
//     <View><Text>{profile.Position}</Text></View>
//     <View style={styles.descriptionContainer}>
//       <Text style={styles.paragraph}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
//         voluptas soluta dolorem nesciunt velit incidunt sapiente ipsa
//         assumenda reiciendis sint!
//       </Text>
//     </View>
//     <View style={styles.statsContainer}>
//       <View style={styles.stat}>
//         <Text style={styles.statText}>RePost</Text>
//         <Text style={styles.statText}>8</Text>
//       </View>
//       <View style={styles.stat}>
//         <Text style={styles.statText}>Follower</Text>
//         <Text style={styles.statText}>3938</Text>
//       </View>
//       <View style={styles.stat}>
//         <Text style={styles.statText}>Following</Text>
//         <Text style={styles.statText}>9</Text>
//       </View>
//     </View>
//     <View style={styles.linksContainer}>
//       <View style={styles.link}>
//         <Entypo name="location-pin" size={24} color="black" />
//         <Text style={styles.linkText}>san francisco</Text>
//       </View>
//       <View style={styles.link}>
//         <AntDesign name="link" size={24} color="black" />
//         <Text
//           style={[styles.linkText, { color: 'blue' }]}
//           onPress={() => handlePress('https://nanodevlab.com/')}>
//           https://nanodevlab.com/
//         </Text>
//       </View>
//       <View style={styles.link}>
//         <AntDesign name="twitter" size={24} color="black" />
//         <Text
//           style={[styles.linkText, { color: 'blue' }]}
//           onPress={() => handlePress('https://twitter.com/iqbalshuvod')}>
//           https://twitter.com/iqbalshuvod
//         </Text>
//       </View>
//       <View style={styles.link}>
//         <AntDesign name="github" size={24} color="black" />
//         <Text
//           style={[styles.linkText, { color: 'blue' }]}
//           onPress={() =>
//             handlePress('https://github.com/Iqbalhossainshuvo')
//           }>
//           https://github.com/Iqbalhossainshuvo
//         </Text>
//       </View>
//     </View>
//   </View>
//   )
// }

// const Stack = createNativeStackNavigator();




// export default function App() {
//   return (
//     <NavigationContainer>
//      <Stack.Navigator initialRouteName="Home">
      
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//      </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles1 = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//     padding: 20,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   profileImageContainer: {
//     justifyContent: 'center',
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     margin: 10,
//     alignItems: 'center',
//     alignContent: 'center',
//   },
//   profileDetailsContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   profileHeading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   profileText: {
//     fontSize: 14,
//   },
//   descriptionContainer: {
//     marginBottom: 20,
//   },
//   paragraph: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#333',
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     backgroundColor:'#f1f5f9',
//    padding:20,
//    borderRadius:15,
//   },
//   stat: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   statText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   linksContainer: {
//     flex: 1,
//   },
//   link: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   linkText: {
//     fontSize: 16,
//     marginLeft: 5,
//   },
// });
