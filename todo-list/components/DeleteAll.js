import {View, Button, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DeleteAll = (props) => {
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

export default DeleteAll
