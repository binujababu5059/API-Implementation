import React,{useState} from 'react';
import {View, FlatList,Text} from 'react-native';

const App=()=> {
  const [data, setData] = useState([])

  fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
    .then (response=>response.json())
    .then (data=>{
      setData(data.hits);
    // console.log(data)
    console.log(data.hits)
  })
  .catch(error=>console.log(error))

  return(
     <FlatList
     data={data} 
     renderItem={({item})=>(
        <View>
          <Text>{item.title}</Text>
          <Text>{item.author}</Text>
          <Text>{item.objectID}</Text>
          <Text>{item.url}</Text>
        </View>
     )}
    />
    
  )
  

}
export default App;




