import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { sty } from "../todolist/app.style";

export default function App() {

  return (
  <SafeAreaProvider>
      <SafeAreaView style={sty.app}>
      <View style={sty.header}><Text>Header</Text></View>
      <View style={sty.body}><Text>Body</Text></View>
      <View style={sty.footer}><Text>Footer</Text></View>
      </SafeAreaView>
  </SafeAreaProvider>
  );
}
