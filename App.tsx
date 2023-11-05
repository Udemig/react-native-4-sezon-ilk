import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  Text,
} from 'react-native';
import Card from './components/Card';

function App(): JSX.Element {
  // const [title, setTitle] = useState('Furkan Türkyılmaz');
  // const [title2, setTitle2] = useState('Osman Türkyılmaz');
  // const [title3, setTitle3] = useState('Yılmaz Türkyılmaz');

  const [titleList, setTitleList] = useState({
    title: '',
    title2: '',
    title3: '',
  });

  const data = {
    title: 'Furkan',
    surname: 'Türkyılmaz',
    age: '25',
  };

  //Array Descructring
  // const [x, y, z, t] = [
  //   {
  //     title: 'Furkan',
  //     surname: 'Türkyılmaz',
  //     age: '25',
  //   },
  //   {
  //     title: 'Furkan2',
  //     surname: 'Türkyılmaz',
  //     age: '25',
  //   },
  //   {
  //     title: 'Furkan3',
  //     surname: 'Türkyılmaz',
  //     age: '25',
  //   },
  //   {
  //     title: 'Furkan4',
  //     surname: 'Türkyılmaz',
  //     age: '25',
  //   },
  // ];

  const {title, surname, age} = data;

  //3
  useEffect(() => {
    console.log('Did Update');
  });
  //2
  useEffect(() => {
    console.log('Did Update titleList');
  }, [titleList]);

  //1
  useEffect(() => {
    console.log('Did Mount');
  }, []);

  useEffect(() => {
    console.log('Did Mount');

    //4
    return () => {
      console.log('Did UnMount');
    };
  }, []);

  console.log('Render');

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Text>
        {title} {surname} {age}
      </Text>
      <TextInput
        style={styles.inputContainer}
        onChangeText={text => {
          setTitleList(prevState => ({...prevState, title: text}));
          console.log(titleList.title);
        }}
        value={titleList.title}
      />
      <TextInput
        style={styles.inputContainer}
        onChangeText={text =>
          setTitleList(prevState => ({...prevState, title2: text}))
        }
        value={titleList.title2}
      />
      <TextInput
        style={styles.inputContainer}
        onChangeText={text =>
          setTitleList(prevState => ({...prevState, title3: text}))
        }
        value={titleList.title3}
      />
      <Card
        title={titleList.title}
        description="Bu bir componenttir!"
        time="5 min read"
      />
      <Card
        title={titleList.title2}
        description="Bu bir componenttir!"
        time="5 min read"
      />
      <Card
        title={titleList.title3}
        description="Bu bir componenttir!"
        time="5 min read"
      />
      <Button
        title="Input Clear"
        onPress={() => setTitleList({title: '', title2: '', title3: ''})}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {padding: 10, borderWidth: 1, margin: 10},
});

export default App;
