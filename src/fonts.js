import jss from 'jss'
import preset from 'jss-preset-default'
import {cssConstants} from './common/cssConstants';

jss.setup(preset());

const sheet = jss.createStyleSheet({
  '@global': {
    '@font-face': [
      {
        fontFamily: 'Proxima',
        src: 'url("/'+require("../assets/fonts/ProximaNova-Regular.ttf")+'")',
        fontWeight: 'normal',
        fontStyle: 'normal'
      },
      {
        fontFamily: 'Proxima',
        src: 'url("/'+require("../assets/fonts/ProximaNova-Bold.ttf")+'")',
        fontWeight: 'bold',
        fontStyle: 'normal'
      },
      {
        fontFamily: 'Proxima',
        src: 'url("/'+require("../assets/fonts/ProximaNova-Semibold.ttf")+'")',
        fontWeight: 'lighter',
        fontStyle: 'normal'
      }
    ],
    '*': {
      boxSizing: 'border-box'
    },
    body: {
      margin: '0',
      fontFamily: 'Proxima',
      fontWeight: 'normal'
    },
    'div.jsoneditor-menu a.jsoneditor-poweredBy': {
      display: 'none'
    },
    'div.jsoneditor-menu': {
      backgroundColor: cssConstants.darkBlue,
      borderBottom: '1px solid '+cssConstants.darkBlue
    },
    'div.jsoneditor': {
      border: '1px solid '+cssConstants.darkBlue
    }
  }
})

export default sheet;
