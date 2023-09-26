import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './components/button';
import Row from './components/row';
import { Component } from 'react';
import calculator from './util/calculator';
import { initialState } from './util/calculator';


export default class App extends Component {
  state = initialState;

  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>
            {this.state.currentValue}
          </Text>
          <Row>
            <Button text={this.state.currentValue != 0 ? "C" : "AC"} theme={"secondary"} onPress={() => this.HandleTap("clear")}></Button>
            <Button text={"+/-"} theme={"secondary"} onPress={() => this.HandleTap("posneg")}></Button>
            {/* <Button text={"+/-"} theme={"secondary"} onPress={this.HandleTap("posneg")}></Button> */}
            <Button text={"%"} theme={"secondary"} onPress={() => this.HandleTap("percentage")}></Button>
            <Button text={"/"} theme={"accent"} onPress={() => this.HandleTap("operator", "/")}></Button>
          </Row>
          <Row>
            <Button text={"7"} onPress={() => this.HandleTap("number", 7)}></Button>
            <Button text={"8"} onPress={() => this.HandleTap("number", 8)}></Button>
            <Button text={"9"} onPress={() => this.HandleTap("number", 9)}></Button>
            <Button text={"x"} onPress={() => this.HandleTap("operator", "*")} theme={"accent"}></Button>
          </Row>
          <Row>
            <Button text={"4"} onPress={() => this.HandleTap("number", 4)}></Button>
            <Button text={"5"} onPress={() => this.HandleTap("number", 5)}></Button>
            <Button text={"6"} onPress={() => this.HandleTap("number", 6)}></Button>
            <Button text={"-"} theme={"accent"} onPress={() => this.HandleTap("operator", "-")}></Button>
          </Row>
          <Row>
            <Button text={"1"} onPress={() => this.HandleTap("number", 1)}></Button>
            <Button text={"2"} onPress={() => this.HandleTap("number", 2)}></Button>
            <Button text={"3"} onPress={() => this.HandleTap("number", 3)}></Button>
            <Button text={"+"} theme={"accent"} onPress={() => this.HandleTap("operator", "+")}></Button>
          </Row>
          <Row>
            <Button text={"0"} size={"double"} onPress={() => this.HandleTap("number", 0)}></Button>
            <Button text={"."} onPress={() => this.HandleTap("number", ".")}></Button>
            <Button text={"="} onPress={() => this.HandleTap("equal")}></Button>
          </Row>
        </SafeAreaView>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  }
  ,
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
