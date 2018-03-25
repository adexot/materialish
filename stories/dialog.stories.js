import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../components/dialog/dialog.css';
import { Button, Dialog } from '../index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

storiesOf('Dialog', module)
  .addDecorator(children => (
    <div style={{ textAlign: 'center', width: '100%', marginTop: 100 }}>
      {children()}
    </div>
  ))
  .add('Regular', () => (
    <Dialog>
      <Dialog.Title>Do you want to save?</Dialog.Title>
      <Dialog.Content>The previous content will be deleted.</Dialog.Content>
      <Dialog.Actions>
        <Button flat>Cancel</Button>
        <Button flat>Save</Button>
      </Dialog.Actions>
    </Dialog>
  ))
  .add('No Body', () => (
    <Dialog>
      <Dialog.Title>Do you want to save?</Dialog.Title>
      <Dialog.Actions>
        <Button flat>Cancel</Button>
        <Button flat>Save</Button>
      </Dialog.Actions>
    </Dialog>
  ));
