import React from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

export class CustomImage extends React.Component {
  state = {
    imageUrl: 'default',
  }

  constructor(props) {
    super(props);
    this.getImage();
  }

  getImage = () => {
    const imageRef = this.props.imagesFolderRef.child(this.props.imageName);
    // Get the download URL
    imageRef.getDownloadURL().then((url) => {
      // Insert url into an <img> tag to "download"
      this.setState({imageUrl: url});
    }).catch(function(error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object_not_found':
          console.log('File does not exist');
          break;

        case 'storage/unauthorized':
          console.log('User does not have permission to access the object');
          break;

        case 'storage/canceled':
          console.log('User canceled the upload');
          break;

        case 'storage/unknown':
          console.log('Unknown error occurred, inspect the server response');
          break;
      }
    });
  }

  render() {
    return (
      <Image style={{width: '100%', height: '100%'}} source={{uri: this.state.imageUrl}} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imagesFolderRef: state.storageRef.child('images'),
  }
}

export default connect(mapStateToProps, null)(CustomImage);