import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '4px'
  },
  caption: {
    fontSize: '26px'
  }
};

class SoundButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick() {
    this.state.play === false ? this.setState({ play: true }) : this.setState({ play: false });
    this.props.setTrack(this.props.track);
  }

  handleKeyPress(e) {
    e.preventDefault();

    e = e || window.event;
    const key = String.fromCharCode(e.keyCode || e.which);
    if (key == this.props.keyPress) {
      this.state.play === false ? this.setState({ play: true }) : this.setState({ play: false });
      document.querySelector(`.clip#${this.props.id}`).play();
      document.querySelector(`.drum-pad#${this.props.id}`).click();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', e => {
      this.handleKeyPress(e);
    });
  }

  componentDidUpdate() {
    const audio = document.querySelector(`.clip#${this.props.id}`);
    if (this.state.play === true) {
      audio.play();
    } else {
      if (audio.currentTime > 0) {
        //audio.currentTime = 0;
        //this.setState({ play: true });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', e => {
      this.handleKeyPress(e);
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <Button className='drum-pad' classes={{ root: classes.root }} id={`${this.props.id}`} variant='outlined' size='large' onClick={this.handleClick}>
        <audio src={this.props.audioSrc} className='clip' id={`${this.props.id}`} />
        <Typography variant='caption' classes={{ root: classes.caption }}>
          {this.props.keyPress}
        </Typography>

      </Button>
    );
  }
}

export default withStyles(styles)(SoundButton);
