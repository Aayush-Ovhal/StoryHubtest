import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

import * as firebase from 'firebase';
import db from '../config.js';

export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            TitleText: "Story Title",
            AuthorText: "Author's Name",
            StoryText: "Write your story here"
        }
    }
    render(){
        return(
            <View>
                <Header
                 backgroundColor = {"#144BF6"}
                 centerComponent = {{
                     text: "Story Hub"
                 }}
                />

                <TextInput
                style={style.inputStyle}
                 onChangeText={(text)=>{
                     this.setState({
                         TitleText: text
                    })
                  }}
                  value={this.state.TitleText}/>

                  <TextInput
                      style={style.inputStyle}
                      onChangeText={(text)=>{
                          this.setState({
                              AuthorText: text
                          })
                      }}
                      value={this.state.AuthorText}/>   

                  <TextInput
                      style={{width:'80%', marginTop: 20, alignSelf: 'center', height: 300, textAlign: 'center', borderWidth: 2, borderRadius:5}}
                      onChangeText={(text)=>{
                          this.setState({
                              StoryText: text
                          })
                      }}
                      multiline={true}
                      value={this.state.StoryText}/>

                      <TouchableOpacity
                      style={style.submitButtonStyle}
                      >
                          <Text
                          style={style.submitTextStyle}
                          >
                              SUBMIT
                          </Text>
                      </TouchableOpacity>
            </View>
        )
     }
  }

  const style = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 5,
      },
      submitButtonStyle: {
          marginTop: 20,
          marginLeft: 580,
          width: 80, 
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#EB1923',
          borderWidth: 2,
          borderRadius: 5
      },
      submitTextStyle: {
          fontSize: 20,
          textAlign: 'center'
      }
  })