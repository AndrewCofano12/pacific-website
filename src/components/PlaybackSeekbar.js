import React, { Component, createRef } from 'react';
import './PlaybackSeekbar.css';
import { getPosX, throttle } from './utils';
import $ from 'jquery';

export default class PlaybackSeekbar extends Component {
    timeOnMouseMove = 0
    progressBar = createRef();

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            seconds: 0,
            playbackPosition: 0,
            showPlayerControls: false,
            playbackLength: 0,
            currentTimePos: '0%'
        };
      }


    formatTime(time) {
        var minute = Math.floor(time / 60)
        var seconds = Math.floor(time % 60)
        if(seconds < 10) {
          return minute + ":0" + seconds
        }
        return minute + ":" + seconds
    }

    getCurrentProgress = (event) => {
        const audio = this.props.audioRef.current;
        if (!audio.src || !isFinite(audio.currentTime) || !this.progressBar.current) {
            const currentTime = 0;
            const currentTimePos = '0%'
          return { currentTime, currentTimePos }
        }
    
        const progressBarRect = this.progressBar.current.getBoundingClientRect()
        const maxRelativePos = progressBarRect.width
        let relativePos = getPosX(event) - progressBarRect.left
    
        if (relativePos < 0) {
          relativePos = 0
        } else if (relativePos > maxRelativePos) {
          relativePos = maxRelativePos
        }
        const currentTime = (audio.duration * relativePos) / maxRelativePos
        const currentTimePos = `${((relativePos / maxRelativePos) * 100).toFixed(2)}%`
        return { currentTime, currentTimePos }
    }
    

      /* Handle mouse down or touch start on progress bar event */
    handleMouseDownOrTouchStartProgressBar = (event) => {
        event.stopPropagation()
        const { currentTime, currentTimePos } = this.getCurrentProgress(event.nativeEvent)

        if (isFinite(currentTime)) {
            this.timeOnMouseMove = currentTime
            this.setState({ isDraggingProgress: true, currentTimePos })
            if (event.nativeEvent) {
            window.addEventListener('mousemove', this.handleWindowMouseOrTouchMove)
            window.addEventListener('mouseup', this.handleWindowMouseOrTouchUp)
            } else {
            window.addEventListener('touchmove', this.handleWindowMouseOrTouchMove)
            window.addEventListener('touchend', this.handleWindowMouseOrTouchUp)
            }
        }
    }

    handleWindowMouseOrTouchMove = (event) => {
        event.preventDefault()
        event.stopPropagation()
        // Prevent Chrome drag selection bug
        const windowSelection = window.getSelection()
        if (windowSelection && windowSelection.type === 'Range') {
          windowSelection.empty()
        }
    
        const { isDraggingProgress } = this.state
        if (isDraggingProgress) {
          const { currentTime, currentTimePos } = this.getCurrentProgress(event)
          this.timeOnMouseMove = currentTime
          this.setState({ currentTimePos })
        }
      }
    
      handleWindowMouseOrTouchUp = (event) => {
        event.stopPropagation()
        this.setState((prevState) => {
          if (prevState.isDraggingProgress && isFinite(this.timeOnMouseMove)) {
            this.props.audioRef.current.currentTime = this.timeOnMouseMove
          }
          return { isDraggingProgress: false }
        })
    
        if (event instanceof MouseEvent) {
          window.removeEventListener('mousemove', this.handleWindowMouseOrTouchMove)
          window.removeEventListener('mouseup', this.handleWindowMouseOrTouchUp)
        } else {
          window.removeEventListener('touchmove', this.handleWindowMouseOrTouchMove)
          window.removeEventListener('touchend', this.handleWindowMouseOrTouchUp)
        }
      }
    

    handleAudioTimeUpdate = throttle((e) => {
        const { isDraggingProgress } = this.state
        const audio = e.target
        if (isDraggingProgress) return
    
        const { duration, currentTime } = audio
        this.setState({
          currentTimePos: `${((currentTime / duration) * 100 || 0).toFixed(2)}%`,
          playbackPosition: currentTime
        })
    }, this.props.progressUpdateInterval)
  
    componentDidMount() {
        const audio = this.props.audioRef;
        // console.log("AUDIO COMPONENT IS: " + audio);
        // audio.addEventListener('timeupdate', (event) => {
        //   console.log('The currentTime attribute has been updated. Again.');
        //   this.setState({playbackPosition: event.seconds})
        // });
        // audio.ontimeupdate = (event) => {
        //   console.log('The currentTime attribute has been updated. Again.');
        // };
        // $(audio).on('timeupdate', (event) => {
        //   console.log('')
        //     this.setState({playbackPosition: event.seconds})
        //   })
              // **** TO-DO *** //
            //   audio.getDuration().then( (duration) => {
            //     this.setState({playbackLength: duration})
            //   });
  

    

    }

    componentDidUpdate() { 
      const audio  = this.props.audioRef.current;
      if (audio && !this.hasAddedAudioEventListener) {
          this.audio = audio
          this.hasAddedAudioEventListener = true
          audio.addEventListener('timeupdate', this.handleAudioTimeUpdate)
          audio.addEventListener('progress', this.handleAudioDownloadProgressUpdate)
      }
    }

    render() {
        this.player = createRef(null)
        return (
            <div className="seekbar-container">
                <div className="seekbar-playbackPosition">{this.formatTime(this.state.playbackPosition)}</div>
                <div className="seekbar-progressBarContainer"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Number(this.state.currentTimePos.split('%')[0])}
                    ref={this.progressBar}
                    onMouseDown={this.handleMouseDownOrTouchStartProgressBar}
                >
                    <div className="seekbar-progressBar">
                        {/* <progress ref={this.myRef} className="seekbar-progressBarComponent" value={this.state.playbackPosition} max={this.state.playbackLength}/> */}
                        <div className="seekbar-progressIndicator" style={{ left: this.state.currentTimePos }}></div>
                        <div className="seekbar-progressFilled" style={{ width: this.state.currentTimePos }}/>
                        <div className="seekbar-downloadProgress"/>
                    </div>
                </div>
                <div className="seekbar-playbackLength">{this.formatTime(this.state.playbackLength)}</div>
            </div>
        )
    }
}