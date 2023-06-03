import {View, ScrollView, Text, StyleSheet} from 'react-native'

const Info = () => {
  return (
    <ScrollView style = {styles.mainView}>
      <View style = {styles.textView}>
        <Text style = {styles.subText}>ADD LIST 버튼 위의 회색 칸에 내용을 입력한 후,
        ADD LIST 버튼을 클릭하면 새로운 리스트가 추가됩니다.
        내용은 최대 20자까지 입력할 수 있습니다.</Text>
        <Text> </Text>
        <Text style = {styles.subText}>한 번씩 리스트를 누를 때마다 초록과 빨강으로 색상이 변경됩니다.
        처음 누르면 초록색으로 변하며, 이는 성공을 의미합니다.
        다시 누르면 빨간색으로 변하며, 이는 실패나 미완을 뜻합니다.
        휴지통 모양의 아이콘을 눌러 해당 리스트를 삭제할 수 있습니다.</Text>
        <Text> </Text>
        <Text style = {styles.subText}>또한 전체 리스트 초기화 버튼을 누르면 모든 리스트를 삭제할 수 있습니다.</Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </View>
      <View style = {styles.sign}>
      <Text style = {styles.subText}> 컴퓨터공학부 2019243116 이준규 </Text>
        <Text style = {styles.signText}>Made by Jungyu23</Text>
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%"
  },
  textView: {
    flex:90
  },
  subText:{
    fontSize:20,
    padding:10
  },
  sign:{
    flex:5,
    justifyContent:'center',
    alignItems:'center'
  },
  signText:{
    fontSize:10,
    color:'grey'
  }
})

export default Info
