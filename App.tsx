/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {

  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';




function App(): JSX.Element {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>

        <ScrollView >
          {/*=========================== ( 1 ) ===================== */}
          <View style={styles.LoginSection}>
            <View>
              <Text style={styles.LoginText} >
                Login
              </Text>
              <TextInput style={styles.LoginTextInp} placeholder='Email' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Password' />
            </View>
            <TouchableOpacity style={styles.myBtn}>
              <Text style={styles.btnText}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
          {/*=======>>>> Signup <<<==========*/}
          <View style={styles.LoginSection}>
            <View>
              <Text style={styles.LoginText} >
                Create Account
              </Text>
              <TextInput style={styles.LoginTextInp} placeholder='Full Name' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} placeholder='Email' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Password' />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Confirm Password' />
            </View>
            <TouchableOpacity style={styles.myBtn}>
              <Text style={styles.btnText}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
          {/*=========================== ( 2 ) ===================== */}
          <View style={styles.LoginSection}>
            <View>
              <Text style={styles.LoginText} >
                Login
              </Text>
              <TextInput style={styles.LoginTextInp} placeholder='Email' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Password' />
            </View>
            <TouchableOpacity style={styles.myBtn}>
              <Text style={styles.btnText}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
          {/*=======>>>> Signup <<<==========*/}
          <View style={styles.LoginSection}>
            <View>
              <Text style={styles.LoginText} >
                Create Account
              </Text>
              <TextInput style={styles.LoginTextInp} placeholder='Full Name' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} placeholder='Email' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Password' />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Confirm Password' />
            </View>
            <TouchableOpacity style={styles.myBtn}>
              <Text style={styles.btnText}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
          {/*=========================== ( 3 ) ===================== */}
          <View style={styles.LoginSection}>
            <View>
              <Text style={styles.LoginText} >
                Login
              </Text>
              <TextInput style={styles.LoginTextInp} placeholder='Email' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Password' />
            </View>
            <TouchableOpacity style={styles.myBtn}>
              <Text style={styles.btnText}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
          {/*=======>>>> Signup <<<==========*/}
          <View style={styles.LoginSection}>
            <View>
              <Text style={styles.LoginText} >
                Create Account
              </Text>
              <TextInput style={styles.LoginTextInp} placeholder='Full Name' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} placeholder='Email' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Password' />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Confirm Password' />
            </View>
            <TouchableOpacity style={styles.myBtn}>
              <Text style={styles.btnText}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
          {/*=========================== ( 4 ) ===================== */}
          <View style={styles.LoginSection}>
            <View>
              <Text style={styles.LoginText} >
                Login
              </Text>
              <TextInput style={styles.LoginTextInp} placeholder='Email' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Password' />
            </View>
            <TouchableOpacity style={styles.myBtn}>
              <Text style={styles.btnText}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
          {/*=======>>>> Signup <<<==========*/}
          <View style={styles.LoginSection}>
            <View>
              <Text style={styles.LoginText} >
                Create Account
              </Text>
              <TextInput style={styles.LoginTextInp} placeholder='Full Name' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} placeholder='Email' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Password' />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Confirm Password' />
            </View>
            <TouchableOpacity style={styles.myBtn}>
              <Text style={styles.btnText}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
          {/*=========================== ( 5 ) ===================== */}
          <View style={styles.LoginSection}>
            <View>
              <Text style={styles.LoginText} >
                Login
              </Text>
              <TextInput style={styles.LoginTextInp} placeholder='Email' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Password' />
            </View>
            <TouchableOpacity style={styles.myBtn}>
              <Text style={styles.btnText}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
          {/*=======>>>> Signup <<<==========*/}
          <View style={[styles.LoginSection, {
            shadowColor: "#fda23d",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,
          }]}>
            <View style={{
              shadowColor: "#fda23d",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 4.65,

              elevation: 8,
            }}>
              <Text style={styles.LoginText} >
                Create Account
              </Text>
              <TextInput style={styles.LoginTextInp} placeholder='Full Name' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} placeholder='Email' placeholderTextColor={"black"} selectionColor={"black"} />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Password' />
              <TextInput style={styles.LoginTextInp} secureTextEntry={true} placeholderTextColor={"black"} selectionColor={"black"} placeholder='Confirm Password' />
            </View>
            <TouchableOpacity style={styles.myBtn}>
              <Text style={styles.btnText}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  // Login Section
  LoginSection: {
    marginVertical: 120,
    justifyContent: "center",

  },
  LoginText: {
    color: "black",
    padding: 15,
    fontSize: 35,
    fontWeight: 'bold',


  },
  LoginTextInp: {
    color: "black",
    margin: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    shadowRadius: 25

  },
  myBtn: {

    backgroundColor: '#fda23d',
    borderRadius: 30,
    height: 60,
    width: 150,
    alignItems: 'center',
    margin: 15,
    textAlign: 'center'

  },
  btnText: {
    fontSize: 18,
    padding: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "black",

  },


  // Signup Section 
  SignUpSection: {

  },
});

export default App;
