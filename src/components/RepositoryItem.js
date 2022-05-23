import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'

export default function RepositoryItem (props) {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
      <StyledText>{props.description}</StyledText>
      <StyledText>{props.language}</StyledText>
      <StyledText>Forks: {props.forksCount}</StyledText>
      <StyledText>Stars: {props.stargazersCount}</StyledText>
      <StyledText>Rating: {props.ratingAverage}</StyledText>
      <StyledText>Review: {props.reviewCount}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5
  }
})
