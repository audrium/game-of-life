import React from 'react';
import { changeArrayValue } from '../game';

class Grid extends React.Component {

  toggleCell = (cell, x, y) => {
    const { world } = this.props;
    const row = changeArrayValue(world[y], x, cell ? 0 : 1);
    const newWorld = changeArrayValue(world, y, row);
    this.props.onChange(newWorld);
  }

  renderCell = (cell, x, y) => {
    return (
      <div key={x}
        className='cell'
        onMouseDown={() => this.toggleCell(cell, x, y)}
        style={{ backgroundColor: cell ? '#424151' : null }}
      />
    );
  }

  renderRow = (row, y) => (
    <div className='row' key={y}>
      {row.map((cell, x) => this.renderCell(cell, x, y))}
    </div>
  )

  render() {
    return (
      <div className='game-grid'>
        {this.props.world.map((row, y) => this.renderRow(row, y))}
      </div>
    );
  }

}

export default Grid;