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
            audioGet: false,
            hasAudio: false
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
        this.props.firebase.exchange(this.props.exchangeID).once('value', (snapshot) => {
            const value = snapshot.val();
            if (value.audioFileName) {
                const fileName = value.audioFileName
                console.log(fileName)
                this.setState({ fileName, hasAudio: true })
            }
        })
    }
    componentWillUnmount() {
        this.props.firebase.exchange().off();
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
            if (this.state.audioBlob) {
                this.setState({ audioBlob: null })
            }
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
        this.setState({ isRecording: true });
    };
    stop() {
        this.setState({ isRecording: false, audioGet: true });
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                //      const id = shortid.generate()
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL, audioBlob: blob, isRecording: false });
                /*   this.props.firebase.audio().child('audio/' + id).put(blob).then(snapshot => {
                      snapshot.ref.getDownloadURL().then(url => {
                          this.props.firebase.exchange(this.props.exchangeID).update({ audio: url });
                      })
                      //todo: https://www.reddit.com/r/Firebase/comments/b4lejh/getting_the_link_of_image_uploaded_and_storing_in/
                      //snapshot.getMetadata().getReference().getDownloadUrl().toString().then(url => console.log(url))
                      console.log('Uploaded a blob or file!');
                  }); */
            }).catch((e) => console.log(e));
    };

    saveAudio = () => {
        if (this.state.fileName) {
            const id = this.state.fileName
            this.props.firebase.audio().child('audio/' + id).delete().then(() => {
                console.log('file Deleted')
                this.props.firebase.audio().child('audio/' + id).put(this.state.audioBlob).then(snapshot => {
                    snapshot.ref.getDownloadURL().then(url => {
                        this.props.firebase.exchange(this.props.exchangeID).update({ audio: url, audioFileName: id });
                    })
                    //todo: https://www.reddit.com/r/Firebase/comments/b4lejh/getting_the_link_of_image_uploaded_and_storing_in/
                    //snapshot.getMetadata().getReference().getDownloadUrl().toString().then(url => console.log(url))
                    console.log('Uploaded a blob or file!');
                });
            }).catch((e) => console.error(e.message))
        } else {
            this.setState({ hasAudio: true })
            const id = shortid.generate()
            console.log(id);
            // this.props.firebase.exchange(this.props.exchangeID).update({ audio: id });
            this.props.firebase.audio().child('audio/' + id).put(this.state.audioBlob).then(snapshot => {
                snapshot.ref.getDownloadURL().then(url => {
                    this.props.firebase.exchange(this.props.exchangeID).update({ audio: url, audioFileName: id });
                })
                //todo: https://www.reddit.com/r/Firebase/comments/b4lejh/getting_the_link_of_image_uploaded_and_storing_in/
                //snapshot.getMetadata().getReference().getDownloadUrl().toString().then(url => console.log(url))
                console.log('Uploaded a blob or file!');
            });
        }


    }

    DeleteAudioFromStore = () => {
        const id = this.state.fileName
        this.props.firebase.audio().child('audio/' + id).delete().then(() => {
            console.log('file Deleted')
            this.props.firebase.exchange(this.props.exchangeID).update({ audio: null, audioFileName: null });
        })

    }

    render() {
        const { agentPopup, userPopup, scenarios, companyName, description, hasAudio, audioGet, blobURL } = this.state
        return (
            <>
               <STYLES.Container>
                   <STYLES.RecButton onClick={this.start} disabled={this.state.isRecording}>
                       Rec
                   </STYLES.RecButton>

                   <STYLES.StopButton onClick={this.stop} disabled={!this.state.isRecording}>
                       &#9633;
                   </STYLES.StopButton>
                   <audio src={blobURL} controls="controls" />
                    <STYLES.SaveButton onClick={this.saveAudio} disabled={!audioGet}>Save</STYLES.SaveButton>
                    {hasAudio ? <button onClick={this.DeleteAudioFromStore}>Remove Audio</button> :
                        <p>No audio is stored</p>
                    }
               </STYLES.Container>
            </>
        )
    }
}

export default withFirebase(withRouter(AudioRecorder))
