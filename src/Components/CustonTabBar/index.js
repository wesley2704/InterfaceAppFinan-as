import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function CustonTabBar({ state, descriptors, navigation }) {
  return (
    <View style={style.container}>
      <View style={style.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={style.buttontab}
            >
              <View style={{ alignItems: "center", padding: 4 }}>
                <View
                  style={[
                    style.innerbutton,
                    { backgroundColor: isFocused ? "#f8e2fd" : "transparent" },
                  ]}
                >
                  <MaterialIcons
                    name={options.tabBarIcon}
                    size={34}
                    color={isFocused ? "#8f2abd" : "#535353"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderRadius:99,
    flexDirection: "row",
    marginBottom: Platform.OS === "ios" ? 38 : 24,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.9)",
    gap: 8,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
  },
  buttontab: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerbutton: {
    padding: 8,
    borderRadius: 99,
  },
});
