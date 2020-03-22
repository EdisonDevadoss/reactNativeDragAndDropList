import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

const exampleData = [...Array(20)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
  // backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
  //   5}, ${132})`,
  backgroundColor: '#FFF'
}));

class DragDropScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: exampleData
    };
  }


  renderItem = ({item, index, move, drag, moveEnd, isActive}) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: isActive ? 'blue' : item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'black',
          borderWidth: 3
        }}
        onLongPress={drag}
        >
        <Text
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: 32
          }}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          onDragEnd={({data}) => {
            this.setState({data});
          }}
        />
      </View>
    );
  }
}

export default DragDropScreen;
