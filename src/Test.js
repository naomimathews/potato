import React from 'react';
import GenerateSchema from 'generate-schema';
import {Validator} from 'jsonschema';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    var json = {
      a: 1,
      str: 'good',
      arr: [{
        1: 'one',
        2: 'two',
        3: 'three'
      }]
    };

    var badjson = {
      a: "1",
      str: 'good',
      arr: [{
        1: 1,
        2: 'two',
        3: 'three'
      }]
    };

    var schema = GenerateSchema.json('Json', json);
    console.log(schema);

    const v = new Validator();
    console.log('good --> ', v.validate(json, schema));
    console.log('bad --> ', v.validate(badjson, schema));
  }

  render() {
    return (<div>Test</div>);
  }
}
