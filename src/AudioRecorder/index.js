import React, { Component } from 'react';

import * as ROUTES from '../routes'
import { withRouter } from 'react-router'
import * as STYLES from './styledRecorder'

import shortid from 'shortid'

import { withFirebase } from '../Firebase';

import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class AudioRecorder extends Component {
    constructor(props) {
        super(props);
        this.state = {

            loading: false,
            isRecording: false,
            blobURL: '',
            isBlocked: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true });
        
        navigator.getUserMedia({ audio: true },
            () => {
                console.log('Permission Granted');
                this.setState({ isBlocked: false });
            },
            () => {
                console.log('Permission Denied');
                this.setState({ isBlocked: true })
            },
        );
    }
    componentWillUnmount() {
        this.props.firebase.scenarios().off();
    }
    handleChange(e) {

    }
    handleSubmit(e) {

    }
    onRemoveScenario = uid => {
  
    };
    loadScenario(uid) {

    }
    start = () => {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
    };
    stop() {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const id = shortid.generate()
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL, isRecording: false });
                this.props.firebase.audio().child('audio/' + id).put(blob).then(snapshot => {
                    snapshot.ref.getDownloadURL().then(url => {
                        this.props.firebase.exchange(this.props.exchangeID).update({ audio: url });
                    })
                    //todo: https://www.reddit.com/r/Firebase/comments/b4lejh/getting_the_link_of_image_uploaded_and_storing_in/
                    //snapshot.getMetadata().getReference().getDownloadUrl().toString().then(url => console.log(url))
                    console.log('Uploaded a blob or file!');
                });
            }).catch((e) => console.log(e));
    };
    render() {
        const { agentPopup, userPopup, scenarios, companyName, description } = this.state
        return (
            <>
               <STYLES.Container>
                   <STYLES.RecButton onClick={this.start} disabled={this.state.isRecording}>
                       Rec
                   </STYLES.RecButton>

                   <STYLES.StopButton onClick={this.stop} disabled={!this.state.isRecording}>
                       &#9633;
                   </STYLES.StopButton>
                   <audio src={this.state.blobURL} controls="controls" />
               </STYLES.Container>
            </>
        )
    }
}

export default withFirebase(withRouter(AudioRecorder))
