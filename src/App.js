import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };

    this.updateEditStatus = this.updateEditStatus.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
  }

  // updateColor
  updateColor( e ) {
    // console.log( e.target.value );
    this.setState({ fontColor: e.target.value });
  }

  // updateSize
  updateSize( e ) {
    this.setState({ fontSize: e.target.value });
  }

  // updateFamily
  updateFamily( e ) {
    this.setState({ fontFamily: e.target.value });
  }

  // updateEditStatus
  updateEditStatus( e ) {
    this.setState({ allowEdit: e.target.value })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle 
            allowEdit={this.state.allowEdit}
            updateAllowEdit={this.updateEditStatus} 
          />
          <ColorChanger 
            allowEdit={this.state.allowEdit}
            updateColor={this.updateColor}
          />
          <SizeChanger 
            allowEdit={this.state.allowEdit}
            updateSize={this.updateSize}
          />
          <FamilyChanger 
            allowEdit={this.state.allowEdit}
            updateFamily={this.updateFamily}
          />
        </div>
        <div className="textArea">
          <TextContainer 
            allowEdit={this.state.allowEdit}
            myStyles={ {
              color: this.state.fontColor,
              fontSize: this.state.fontSize,
              fontFamily: this.state.fontFamily
            } }
          />
        </div>
      </div>
    )
  }
}

export default App;
