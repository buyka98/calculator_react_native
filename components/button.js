import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: buttonWidth - 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: buttonWidth,
        margin: 5,
    },
    text: {
        color: "#fff",
        fontSize: 24,
    },
    textSecondary: {
        color: "#060606",
    },
    textDouble: {
        marginStart: 40,
    },
    buttonDouble: {
        flex: 2,
        alignItems: "flex-start",
    },
    buttonSecondary: {
        backgroundColor: "#a6a6a6",
    },
    buttonAccent: {
        backgroundColor: "#ffc107",
    }
});

export default ({ onPress, text, size, theme }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (size === "double") {
        buttonStyles.push(styles.buttonDouble);
        textStyles.push(styles.textDouble);
    }

    if (theme === "secondary") {
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
    } else if (theme === "accent") {
        buttonStyles.push(styles.buttonAccent);
    }
    Handler = () => {
        console.log("hanlde tap");
        onPress();
    }

    return <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
}