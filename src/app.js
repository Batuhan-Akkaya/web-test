import React from 'react';
import {Text, View} from 'react-native';
import Hello from '@saypr/hello';

class App extends React.Component {
    render() {
        return (
            <View>
                <Text>Native Text</Text>
                <div>Web Text</div>
                <Hello/>
            </View>
        );
    }
}

export default App;
