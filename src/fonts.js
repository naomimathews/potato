import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset());

const sheet = jss.createStyleSheet({
  '@global': {
    '@font-face': {
      fontFamily: 'Ubuntu',
      src: 'url("../assets/fonts/Ubuntu-R.ttf") format("ttf")',
      fontWeight: 'normal',
      fontStyle: 'normal'
    },
    '@font-face': {
      fontFamily: 'Ubuntu',
      src: 'url("../assets/fonts/Ubuntu-B.ttf") format("ttf")',
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    '*': {
      boxSizing: 'border-box'
    },
    body: {
      margin: '0',
      fontFamily: 'Ubuntu'
    }
  }
})

export default sheet;
