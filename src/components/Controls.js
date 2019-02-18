import React from 'react';
import { Button } from 'semantic-ui-react';

const Controls = (props) => (
  <div className='controls'>
    <Button content='Shuffle' icon='random' labelPosition='right'
      onClick={props.shuffle} disabled={props.playing}
    />
    <Button content='Clear' icon='redo' labelPosition='right' onClick={props.clear} />
    <Button content='Next' icon='right arrow' labelPosition='right' onClick={props.next} />
    {props.playing ?
      <Button content='Stop' icon='stop' labelPosition='right' onClick={props.stop} /> :
      <Button content='Play' icon='play' labelPosition='right' onClick={props.play} />
    }
  </div>
);

export default Controls;