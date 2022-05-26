import { StyleSheet, View } from 'react-native'
import RepositoryItemHeader from './RepositoryItemHeader'
import RepositoryStats from './RepositoryStats'

export default function RepositoryItem (props) {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 4
  }
})
