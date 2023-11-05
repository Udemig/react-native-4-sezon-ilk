import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  Text,
} from 'react-native';
import Card from './components/Card';

class App extends Component {
  state = {
    title: '',
    title2: '',
    title3: '',
    surname: 'Türkyılmaz',
    age: '25',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log('componentDidUpdate çalıştu!');
    }
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): boolean {
    if (nextState !== this.state) {
      return true;
    }
    return false;
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}

  ///
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount');
  }

  componentDidMount() {
    console.log('Did Mount çalıştu!');
  }

  render() {
    console.log('REnderre');
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <Text>
          {this.state.title} {this.state.surname} {this.state.age}{' '}
          {this.props.name}
        </Text>
        <TextInput
          style={styles.inputContainer}
          onChangeText={title => {
            // this.setState(prevState => ({...prevState, title}));

            this.setState({title}, () => {
              console.log(this.state.title);
            });
           
          }}
          value={this.state.title}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {padding: 10, borderWidth: 1, margin: 10},
});

export default App;
