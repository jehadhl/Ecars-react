import React from 'react'
import {TouchableOpacity , ScrollView , StyleSheet ,Image} from "react-native"
import { ListItem , Text , Badge } from 'native-base'

const CategoryFilter = (props) => {
    return (
         <ScrollView 
          bounces={true}
          horizontal={true}
          style={{backgroundColor:'#E0E0F5'}}
         >
           <ListItem style={{ margin: 0, padding: 0, borderRadius: 0 }}>
                <TouchableOpacity
                    key={1}
                    onPress={() => {
                        props.categoryFilter('all'), props.setActive(-1)
                    }}
                >
                    <Badge
                        style={[styles.center, {margin: 5},
                            props.active == -1 ? styles.active : styles.inactive
                        ]}
                    >
                        <Text style={{ color: 'white' }}>All</Text>
                    </Badge>
                </TouchableOpacity>
                {props.categories.map((item) => (
                      <TouchableOpacity
                      key={item._id}
                      onPress={() => {
                          props.categoryFilter(item._id.$oid), 
                          props.setActive(props.categories.indexOf(item))
                      }}
                  >
                      <Badge
                          style={[styles.center, 
                            {margin: 5},
                            props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                          ]}
                      >
                           {/* <Image source={{uri:item.image}} style={{height:40 ,width:40}}/> */}
                          <Text style={{ color: 'white' }}>{item.name}</Text>
                      </Badge>
                  </TouchableOpacity>
                ))}
            </ListItem>
         </ScrollView>
    )
}


const styles = StyleSheet.create({
        center: {
          justifyContent: 'center',
          alignItems: 'center'
      },
      active: {
          backgroundColor: '#2A2B2E',
          width:120,
          height:40,
          borderRadius:20,
          
      },
      inactive: {
          backgroundColor: '#133DD6',
          width:120,
          height:40,
          borderRadius:20,
}
})

export default CategoryFilter
