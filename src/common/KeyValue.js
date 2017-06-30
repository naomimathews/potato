import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';

const styles = {
  'key-value': {
    margin: '20px auto'
  },
  list: {
    paddingLeft: '0'
  },
  item: {
    listStyle: 'none',
    display: 'flex',
  },
  input: {
    flex: '1 1 100%',
    padding: '5px',
    '&:focus': {
      background: '#efefef',
      outline: 'none',
      borderWidth: '1px'
    }
  },
  remove: {
    background: 'transparent',
    border: 'none',
    flex: '0 0 60px',
    color: 'red'
  }
}

@injectSheet(styles)

export default class KeyValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pair: {
        'field0': {
          key: 'one',
          value: 'first'
        },
        'field1': {
          key: 'two',
          value: 'second'
        }
      }
    };
  }

  addLine = (type, value) => {
    console.log(type, value);

    const length = Object.keys(this.state.pair).length;
    let newState = Object.assign({}, this.state);

    newState.pair['field'+(length)] = {
      key: '',
      value: ''
    };
    newState.pair['field'+length][type] = value;

    newState = Object.assign({}, this.state, newState);

    this.setState(newState, () => {
      this.refs.newKey.value = '';
      this.refs.newValue.value = '';
      this.refs[type+'field'+(length)].focus();
      if (this.props.onChange) this.props.onChange(this.state.pair);
    });
  }

  changeValue = (itemId, type, value) => {
    const newState = Object.assign({}, this.state);
    newState.pair[itemId][type] = value;
    this.setState(newState, () => {
      if (this.props.onChange) this.props.onChange(this.state.pair);
    });
  }

  removeLine = (itemId) => {
    const newState = Object.assign({}, this.state);
    delete newState.pair[itemId];
    this.setState(newState, () => {
      if (this.props.onChange) this.props.onChange(this.state.pair);
    });
  }

  render() {
    const {classes} = this.props;
    var items = [];
    const pair = this.state.pair;
    for (var item in pair) {
      function renderItem(item) {
        items.push(
          <li key={item} className={classes.item}>
            <input className={classes.input} value={pair[item].key} ref={'key'+item} placeholder="key" onInput={(e) => this.changeValue(item, 'key', e.target.value)}  />
            <input className={classes.input} value={pair[item].value} ref={'value'+item} placeholder="value" onInput={(e) => this.changeValue(item, 'value', e.target.value)}  />
            <button className={classes.remove} onClick={(e) => this.removeLine(item)}>remove</button>
          </li>
        )
      }
      renderItem.call(this, item);
    }
    return (
      <ul className={classes['key-value']} className={classes.list}>
        {items}
        <li className={classes.item}>
          <input className={classes.input} placeholder="key" ref="newKey" onInput={(e) => this.addLine('key', e.target.value)} />
          <input className={classes.input} placeholder="value" ref="newValue" onInput={(e) => this.addLine('value', e.target.value)} />
          <div className={classes.remove}>&nbsp;</div>
        </li>
      </ul>
    );
  }
}
