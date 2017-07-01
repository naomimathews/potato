import React from 'react';
import injectSheet from 'react-jss';
import {cssConstants} from '../common/cssConstants';
import classnames from 'classnames';

const styles = {
  list: {
    margin: '20px auto',
    border: '1px solid '+cssConstants.darkBlue,
    paddingLeft: '0'
  },
  item: {
    listStyle: 'none',
    display: 'flex',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '16px;'
  },
  input: {
    flex: '1 1 100%',
    padding: '5px 10px',
    border: '1px solid #eee',
    '&:focus': {
      background: '#efefef',
      outline: 'none',
      borderWidth: '1px'
    }
  },
  remove: {
    background: 'transparent',
    border: '1px solid #efefef',
    flex: '0 0 70px',
  }
}

@injectSheet(styles)

export default class KeyValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pair: {}
    };
  }

  saveValues = (values) => {
    if (this.props.onChange) {
      let pairs = [];
      for (var pair in values) {
        pairs.push(values[pair]);
      }
      this.props.onChange(pairs);
    }
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
      this.saveValues(this.state.pair);
    });
  }

  changeValue = (itemId, type, value) => {
    const newState = Object.assign({}, this.state);
    newState.pair[itemId][type] = value;
    this.setState(newState, () => {
      this.saveValues(this.state.pair);
    });
  }

  removeLine = (itemId) => {
    const newState = Object.assign({}, this.state);
    delete newState.pair[itemId];
    this.setState(newState, () => {
      this.saveValues(this.state.pair);
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
            <input className={classes.input} value={pair[item].key} ref={'key'+item} placeholder="key" onChange={(e) => this.changeValue(item, 'key', e.target.value)}  />
            <input className={classes.input} value={pair[item].value} ref={'value'+item} placeholder="value" onChange={(e) => this.changeValue(item, 'value', e.target.value)}  />
            <button className={classes.remove} onClick={(e) => this.removeLine(item)}>remove</button>
          </li>
        )
      }
      renderItem.call(this, item);
    }
    return (
      <ul className={classes.list}>
        <li className={classes.item}>
          <input className={classnames(classes.input, classes.heading)} value="Key" readOnly="readOnly" />
          <input className={classnames(classes.input, classes.heading)} value="Value" readOnly="readOnly" />
          <button className={classnames(classes.remove, classes.heading)}>Action</button>
        </li>
        {items}
        <li className={classes.item}>
          <input className={classes.input} placeholder="key" ref="newKey" onChange={(e) => this.addLine('key', e.target.value)} />
          <input className={classes.input} placeholder="value" ref="newValue" onChange={(e) => this.addLine('value', e.target.value)} />
          <div className={classes.remove}>&nbsp;</div>
        </li>
      </ul>
    );
  }
}
