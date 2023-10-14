import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');
  const [favorites, setFavorites] = useState([]);

  const coreCourses = [
    "CS 504 Software Engineering",
    "CS 506 Programming for Computing",
    "CS 519 Cloud Computing Overview",
    "CS 533 Computer Architecture",
    "CS 547 Secure Systems and Programs",
    "CS 622 Discrete Math and Algorithms for Computing",
    "DS 510 Artificial Intelligence for Data Science",
    "DS 620 Machine Learning & Deep Learning",
  ];

  const depthCourses = [
    "CS 624 Full-Stack Development - Mobile App",
    "CS 628 Full-Stack Development - Web App"
  ];

  const handleFavoriteSubmit = () => {
    if (favoriteCourse && !favorites.includes(favoriteCourse)) {
      setFavorites([...favorites, favoriteCourse]);
      setFavoriteCourse('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.icon} />
      <Text style={styles.header}>MSCS Courses</Text>

      <Text style={styles.label}>Favorite Course:</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        onChangeText={(text) => setFavoriteCourse(text)}
        value={favoriteCourse}
        onSubmitEditing={handleFavoriteSubmit}
      />

      {favorites.length > 0 && (
        <View>
          <Text style={styles.subHeader}>Favorite Courses</Text>
          {favorites.map((course, index) => (
            <View key={index} style={styles.courseContainer}>
              <Text style={styles.courseText}>{course}</Text>
            </View>
          ))}
        </View>
      )}

      <Text style={styles.subHeader}>Core Requirements (24 credits)</Text>
      {coreCourses.map((course, index) => (
        <View key={index} style={styles.courseContainer}>
          <Text style={styles.courseText}>{course}</Text>
        </View>
      ))}

      <Text style={styles.subHeader}>Depth of Study (6 credits)</Text>
      {depthCourses.map((course, index) => (
        <View key={index} style={styles.courseContainer}>
          <Text style={styles.courseText}>{course}</Text>
        </View>
      ))}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 15
  },
  label: {
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    marginTop: 10,
    marginBottom: 10
  },
  courseContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  courseText: {
    fontSize: 16
  }
});

export default CoreComponents;
