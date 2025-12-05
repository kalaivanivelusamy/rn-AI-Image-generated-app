import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions, ActivityIndicator } from "react-native";
import { COLORS } from "../utils/Colors";
import { Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react'

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const aspectRatioData = [
  { label: '1:1', value: '1:1' },
  { label: '4:5', value: '4:5' },
  { label: '16:9', value: '16:9' },
  { label: '3:2', value: '3:2' },
  { label: '2:3', value: '2:3' },
];




export default function Index() {

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "Home", headerStyle: { backgroundColor: COLORS.background }, headerTitleStyle: { color: COLORS.textLight } }} >
      </Stack.Screen>
      <View style={styles.container}>
        <View style={{ height: 150 }}>
          <TextInput
            style={styles.inputField}
            placeholder="Describe your imagination in detail"
            placeholderTextColor={COLORS.textDark}
            numberOfLines={3}
            multiline={true}></TextInput>
          <TouchableOpacity style={styles.ideaButton} onPress={() => { }}>
            <FontAwesome name="lightbulb-o" size={25} color={COLORS.black} />
          </TouchableOpacity>
        </View>
        {/* Model dropdown  */}

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        {/* Aspect Ratio dropdown  */}

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={aspectRatioData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Aspect Ratio' : '...'}
          value={aspectRatio}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setAspectRatio(item.value);
            setIsFocus(false);
          }}
        />
        <TouchableOpacity style={styles.generateButton} onPress={() => { }}>
          <Text style={styles.generateButtonText}>Generate Image</Text>
        </TouchableOpacity>

        {isLoading &&
          <View style={[styles.imageContainer, {justifyContent:"center", alignItems:"center"}]}>
            {/* Generated image will be displayed here */}
            <ActivityIndicator size={"large"}> </ActivityIndicator>
          </View>
        }
        <View style={styles.imageContainer}>
          {/* Generated image will be displayed here */}
          <Image source={require('@/sample.jpg')} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.downloadButton} onPress={() => { }}>
            <FontAwesome name="download" size={30} color={COLORS.textLight} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.downloadButton} onPress={() => { }}>
            <FontAwesome name="share" size={30} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}


const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background
  },
  imageContainer: {
    height: 300,
    width: windowWidth - 40,
    borderColor: COLORS.primary,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    marginTop: 20
  },

  inputField: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.border,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 1,
    height: 150,
    paddingHorizontal: 10
  },
  ideaButton: {
    backgroundColor: COLORS.accent,
    borderRadius: "50%",
    alignSelf: "flex-end",
    padding: 16,
    position: "relative",
    bottom: 60,
    right: 20
  },

  generateButton: {
    marginTop: 40,
    backgroundColor: COLORS.accent,
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  downloadButton: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  generateButtonText: {
    color: COLORS.textDark,
    fontSize: 18,
    letterSpacing: 1.2,
    fontWeight: "500"
  },

  dropdown: {
    marginTop: 20,
    height: 50,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.border,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingHorizontal: 8

  },

  placeholderStyle: {
    fontSize: 16,
    color: COLORS.textDark
  },

  selectedTextStyle: {
    fontSize: 16,
    color: COLORS.textDark
  }
});