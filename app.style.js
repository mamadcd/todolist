import { StyleSheet } from "react-native";

export const sty=StyleSheet.create({
    app:{
        height:"100%",
        //flex:1,
        //marginTop:5,
        backgroundColor:"black",
        flexDirection:"column"
    },
    header:{
        flex:1,
        backgroundColor:"red"
    },
    body:{
        flex:10,
        backgroundColor:"blue"
    },
    footer:{
        flex:0.5,
        backgroundColor:"green"
    }
})