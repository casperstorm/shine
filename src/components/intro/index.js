/* @flow */
import React from 'react'
import ImageSequence from 'react-native-image-sequence'

import styles from './styles'

export type Props = { onEnd?: Function }

class Intro extends React.Component<Props> {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.onEnd && this.props.onEnd()
    }, 2750)
  }

  render() {
    const images = [
      require('../../../assets/intro/loader000.png'),
      require('../../../assets/intro/loader001.png'),
      require('../../../assets/intro/loader002.png'),
      require('../../../assets/intro/loader003.png'),
      require('../../../assets/intro/loader004.png'),
      require('../../../assets/intro/loader005.png'),
      require('../../../assets/intro/loader006.png'),
      require('../../../assets/intro/loader007.png'),
      require('../../../assets/intro/loader008.png'),
      require('../../../assets/intro/loader009.png'),
      require('../../../assets/intro/loader010.png'),
      require('../../../assets/intro/loader011.png'),
      require('../../../assets/intro/loader012.png'),
      require('../../../assets/intro/loader013.png'),
      require('../../../assets/intro/loader014.png'),
      require('../../../assets/intro/loader015.png'),
      require('../../../assets/intro/loader016.png'),
      require('../../../assets/intro/loader017.png'),
      require('../../../assets/intro/loader018.png'),
      require('../../../assets/intro/loader019.png'),
      require('../../../assets/intro/loader020.png'),
      require('../../../assets/intro/loader021.png'),
      require('../../../assets/intro/loader022.png'),
      require('../../../assets/intro/loader023.png'),
      require('../../../assets/intro/loader024.png'),
      require('../../../assets/intro/loader025.png'),
      require('../../../assets/intro/loader026.png'),
      require('../../../assets/intro/loader027.png'),
      require('../../../assets/intro/loader028.png'),
      require('../../../assets/intro/loader029.png'),
      require('../../../assets/intro/loader030.png'),
      require('../../../assets/intro/loader031.png'),
      require('../../../assets/intro/loader032.png'),
      require('../../../assets/intro/loader033.png'),
      require('../../../assets/intro/loader034.png'),
      require('../../../assets/intro/loader035.png'),
      require('../../../assets/intro/loader036.png'),
      require('../../../assets/intro/loader037.png'),
      require('../../../assets/intro/loader038.png'),
      require('../../../assets/intro/loader039.png'),
      require('../../../assets/intro/loader040.png'),
      require('../../../assets/intro/loader041.png'),
      require('../../../assets/intro/loader042.png'),
      require('../../../assets/intro/loader043.png'),
      require('../../../assets/intro/loader044.png'),
      require('../../../assets/intro/loader045.png'),
      require('../../../assets/intro/loader046.png'),
      require('../../../assets/intro/loader047.png'),
      require('../../../assets/intro/loader048.png'),
      require('../../../assets/intro/loader049.png'),
      require('../../../assets/intro/loader050.png'),
      require('../../../assets/intro/loader051.png'),
      require('../../../assets/intro/loader052.png'),
      require('../../../assets/intro/loader053.png'),
      require('../../../assets/intro/loader054.png'),
      require('../../../assets/intro/loader055.png'),
      require('../../../assets/intro/loader056.png'),
      require('../../../assets/intro/loader057.png'),
      require('../../../assets/intro/loader058.png'),
      require('../../../assets/intro/loader059.png'),
      require('../../../assets/intro/loader060.png'),
      require('../../../assets/intro/loader061.png'),
      require('../../../assets/intro/loader062.png'),
    ]

    return <ImageSequence images={images} style={styles.container} />
  }
}

export default Intro
