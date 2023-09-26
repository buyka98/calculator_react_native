import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    }
});

export default Row = ({ children }) => {
    return <View style={styles.container}>{children}</View>
}

