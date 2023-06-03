import {View, ScrollView, Button, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native'
import {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import DeleteIcon from '../components/DeleteIcon'

const MainList = () => {
  const [todoList, setTodoList] = useState([])
  const [inputText, setInputText] = useState("")
  const [listColor, setListColor] = useState({})

  const TodoItem = ({ title, onDelete, index }) => {
    const handlePress = () => {
      const prevColor = listColor[index]
      const newColor = { ...listColor, [index]: prevColor === 'springgreen' ? 'indianred' : 'springgreen' }
      setListColor(newColor)
      saveListColor(newColor)
    }
    const realDelete = () => {
      Alert.alert(
      '삭제',
      '이 리스트를 정말로 삭제하시겠습니까?',
      [
        { text: '네', onPress:() => onDelete(index)},
        { text: '아니오', onPress: () => console.log('no pressed')}
      ]
      )
    }
    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.todoItem, { backgroundColor: listColor[index] || 'transparent' }]}
      >
        <Text style={styles.listText}>{title}</Text>
        <DeleteIcon onPressed={realDelete}/>
      </TouchableOpacity>
    )
  }

const DeleteAll = () => {
  const realDelete = () => {
    Alert.alert(
      '초기화',
      '모든 리스트를 전부 삭제하시겠습니까? 이 작업은 돌이킬 수 없습니다.',
      [
        { text: '네', onPress: removeAll},
        { text: '아니오', onPress: () => console.log('no pressed')}
      ]
      )
  }
    const removeAll = async () => {
    try {
      await AsyncStorage.removeItem('todoList')
      await AsyncStorage.removeItem('listColor')
      Alert.alert('초기화','전체 리스트가 제거되었습니다.')
      setTodoList([])
      setListColor({})
    } catch (error) {
      console.error('전체 리스트 제거 중에 에러가 발생했습니다:', error)
    }
  }

  return (
    <View>
      <Button
        title = "전체 리스트 초기화"
        color = 'red'
        onPress = {realDelete}
      />
    </View>
  )
}

  useEffect(() => {
    const loadTodoList = async () => {
      const savedTodoList = await AsyncStorage.getItem('todoList')
      if (savedTodoList !== null) {
        setTodoList(JSON.parse(savedTodoList))
      }
    }

     const loadListColor = async () => {
      const savedListColor = await AsyncStorage.getItem('listColor')
      if (savedListColor !== null) {
        setListColor(JSON.parse(savedListColor))
      }
    }

    loadTodoList()
    loadListColor()
  }, [])

  const addItem = () => {
    const newItem = {
      title: inputText
    }
    const updatedList = [...todoList, newItem]
    setTodoList(updatedList)
    setInputText('')
    saveTodoList(updatedList)
  }

  const deleteItem = (index) => {
    const updatedList = [...todoList]
    updatedList.splice(index, 1)
    setTodoList(updatedList)
    saveTodoList(updatedList)

  const newColor = { ...listColor }
  delete newColor[index]
  for (let i = index; i < updatedList.length; i++) {
    if (newColor[i + 1]) {
      newColor[i] = newColor[i + 1]
    } else {
      delete newColor[i]
      }
    } 
  
    setListColor(newColor)
    saveListColor(newColor)
  }

  const saveTodoList = async (list) => {
    await AsyncStorage.setItem('todoList', JSON.stringify(list))
  }

  const saveListColor = async (color) => {
    await AsyncStorage.setItem('listColor', JSON.stringify(color))
  }

  return (
    <View style = {styles.mainView}>
      <View style = {styles.subView}>
        <ScrollView>
          {todoList.map((item, index) => (
            <TodoItem
              key = {index}
              title = {item.title}
              onDelete = {() => deleteItem(index)}
              index = {index}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.inputTextView}>
        <TextInput
          value = {inputText}
          onChangeText = {(text) => setInputText(text)}
          maxLength = {20}
          numberOfLines = {1}
          editable = {true}
        />
        <Button
          title = "Add List"
          color = 'slateblue'
          onPress = {addItem}
        />
      </View>
      <DeleteAll />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'whitesmoke',
    height: "100%"
  },
  subView: {
    flex: 85
  },
  inputTextView: {
    paddingBottom: 0,
    backgroundColor: 'lightgrey'
  },
  listText: {
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4,
    fontSize: 20,
    color: 'black'
  },
  todoItem: {
    marginTop: 3,
    marginLeft: 4,
    marginRight: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10
  }
})

export default MainList