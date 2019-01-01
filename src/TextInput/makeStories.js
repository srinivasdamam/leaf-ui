import React from 'react';

export default (storiesOf, { TextInput }) =>
  storiesOf('TextInput', module)
    .add('simple', () => (
      <TextInput
        name="leafColor"
        label="Leaf Color"
        required
      />
    ))
    .add('disabled', () => (
      <TextInput
        name="leafColor"
        label="Leaf Color"
        disabled
      />
    ))
    .add('with hint', () => (
      <TextInput
        name="leafColor"
        label="Leaf Color"
        placeholder="What's the leaf's  color"
        hint="leaves are usually green"
      />
    ))
    .add('with error', () => (
      <TextInput
        name="leafColor"
        label="Leaf Color"
        defaultValue="silver"
        error="invalid leaf color"
      />
    ));
