import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

const options = [
    { key: 'line', value: 'line', text: 'Line' },
    { key: 'glider', value: 'glider', text: 'Glider' },
    { key: 'pulsar', value: 'pulsar', text: 'Pulsar' },
    { key: 'diehard', value: 'diehard', text: 'Diehard' },
    { key: 'gliderGun', value: 'gliderGun', text: 'Gosper Glider Gun' }
];

class Presets extends React.Component {

    state = {
        preset: 'line'
    }

    onLoad = () => {
        const { preset } = this.state;
        return preset ? this.props.load(preset) : null;
    }

    render() {
        return (
            <div className='controls'>
                <Button as='div' labelPosition='left'>
                    <Dropdown
                        placeholder='Select a preset'
                        options={options}
                        selection
                        className='label'
                        value={this.state.preset}
                        onChange={(e, { value }) => this.setState({ preset: value })}
                    />
                    <Button
                        content='Load'
                        onClick={this.onLoad}
                        disabled={this.props.playing}
                    />
                </Button>
            </div>
        );
    }

}

export default Presets;