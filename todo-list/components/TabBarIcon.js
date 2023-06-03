import {Image} from "react-native"

const TabBarIcon = (focused, name) => {
  let iconImagePath;
  if(name === "메인"){
    iconImagePath = require('../assets/list.png')
  }
  else if (name ==="사용 설명"){
    iconImagePath = require('../assets/question.png')
  }

  return(
    <Image style = {{
      width: focused ? 24 : 20,
      height: focused ? 24 : 20
      }}
      source = {iconImagePath}
    />
  )
}

export default TabBarIcon