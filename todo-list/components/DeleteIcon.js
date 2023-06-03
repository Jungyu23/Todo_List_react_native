import {Image, TouchableOpacity, StyleSheet} from "react-native"

const DeleteIcon = ({onPressed}) => {
  return(
    <TouchableOpacity onPress = {onPressed} style = {styles.back}>
    <Image 
    style = {{width:30, height: 30}} 
    source = {require('../assets/delete.png')}
    />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  back:{
    padding:4,
    backgroundColor:"slateblue",
    borderRadius: 8
  }
})


export default DeleteIcon