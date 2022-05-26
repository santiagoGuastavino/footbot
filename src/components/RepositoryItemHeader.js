import { Image, StyleSheet, View } from 'react-native'
import theme from '../theme'
import StyledText from './StyledText'

export default function RepositoryItemHeader ({ ownerAvatarUrl, fullName, description, language }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.imageBox}>
        <Image
          source={{ uri: ownerAvatarUrl }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoBox}>
        <StyledText fontWeight='bold'>{fullName}</StyledText>
        <StyledText color='secondary'>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingBottom: 2
  },
  imageBox: {
    paddingRight: 10
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  },
  infoBox: {
    justifyContent: 'center',
    flex: 1
  },
  language: {
    padding: 2,
    marginVertical: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden'
  }
})
