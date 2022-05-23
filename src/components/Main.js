import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList'

export default function Main () {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  }
})
