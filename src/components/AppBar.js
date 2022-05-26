import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import theme from '../theme'

export default function AppBar () {
  return (
    <View style={styles.container}>
      <StyledText fontWeight='bold' style={styles.text}>
        Repositories
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  text: {
    color: theme.appBar.textPrimary
  }
})
