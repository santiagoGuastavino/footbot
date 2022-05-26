import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'

const parseThousands = (value) => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

export default function RepositoryStats (props) {
  return (
    <View style={styles.statsContainer}>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(props.forksCount)}</StyledText>
        <StyledText align='center'>Forks</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText align='center'>Stars</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{props.ratingAverage}</StyledText>
        <StyledText align='center'>Rating</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{props.reviewCount}</StyledText>
        <StyledText align='center'>Review</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
