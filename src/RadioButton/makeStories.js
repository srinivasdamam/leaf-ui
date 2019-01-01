import React from 'react';

export default (storiesOf, { RadioButton }) =>
  storiesOf('RadioButton', module)
    .add('simple', () => (
      <React.Fragment>
        <RadioButton
          name="leafColor"
          label="Green"
          value="green"
          required
        />
        <RadioButton
          name="leafColor"
          label="Brown"
          value="brown"
          required
        />
      </React.Fragment>
    ))
    .add('disabled', () => (
      <React.Fragment>
        <RadioButton
          name="leafColor"
          label="Green"
          value="green"
          disabled
          defaultChecked
        />
        <RadioButton
          name="leafColor"
          label="Brown"
          value="brown"
          disabled
        />
      </React.Fragment>
    ))
    .add('with hint', () => (
      <React.Fragment>
        <RadioButton
          name="leafColor"
          label="Green"
          value="green"
          hint="maybe green"
        />
        <RadioButton
          name="leafColor"
          label="Brown"
          value="brown"
          hint="maybe brown"
        />
      </React.Fragment>
    ))
    .add('with error', () => (
      <RadioButton
        name="leafColor"
        label="Brown"
        value="brown"
        error="no they're not"
        defaultChecked
      />
    ));
