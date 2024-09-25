import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const ColorChanger = () => {
  // State to store the background color
  const [backgroundColor, setBackgroundColor] = useState('green');

  // Function to change background color based on button pressed
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => changeBackgroundColor('green')}
      >
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => changeBackgroundColor('blue')}
      >
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'brown' }]}
        onPress={() => changeBackgroundColor('brown')}
      >
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'yellow' }]}
        onPress={() => changeBackgroundColor('yellow')}
      >
        <Text style={styles.buttonText}>YELLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => changeBackgroundColor('red')}
      >
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'black' }]}
        onPress={() => changeBackgroundColor('black')}
      >
        <Text style={styles.buttonText}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50, // Thêm khoảng cách dưới cùng
  },
  button: {
    width: Dimensions.get('window').width * 0.8, // Chiều rộng 80% màn hình
    height: 50,
    marginVertical: 35, // Khoảng cách dọc giữa các button
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Bo góc cho button
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20, // Kích thước chữ lớn hơn
  },
});

export default ColorChanger;
