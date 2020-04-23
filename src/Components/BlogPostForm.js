import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({initialValues,onSubmit}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        onPress={() => {
          onSubmit(title,content)
          
        }}
        title={"Save Blog Post"}
      />
    </View>
  );
};
BlogPostForm.defaultProps={
    initialValues:{
        title:"",
        content:""
    }
}
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    margin: 5,
    padding: 5,
  },
  label: {
    marginLeft: 5,
    fontSize: 20,
    marginBottom: 5,
  },
});
export default BlogPostForm;
