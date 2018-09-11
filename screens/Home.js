import React from 'react';
import { Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { watchPersonData } from '../store/store';
import CustomImage from '../components/CustomImage';

const sob = [
  {
    header: 'Klossens dimension',
    notice: ['Kraftigt material som kloss och som 6mm skruv inte spräcker.', 'Hyvlat och riktat till 90*100mm kortare än materialets höjd.'],
    image: 'Bild1.png',
    time: 15
  },
  {
    header: 'Vinkel',
    notice: ['Måttet 300*300', 'Material:18-21 björkplywood.'],
    image: 'Bild2.png',
    time: 10
  },
  {
    header: 'Vidhäftning av lim',
    notice: ['Materialet bakom kloss och vinklar skall mattas av med ett sandpapper för bättre vidhäftning av lim.'],
    time: 15
  },
  {
    header: 'Limning vinklar & klossar',
    notice: [
      'Fullfölja limning i ett arbetsmoment.\n(Får inte avbrytas då glipor kan uppstå samt att vinkeln kan påverkas av stelnat lim.)',
      'Justera krysset i samband med limning och fastskruvning.',
      'Klossar och vinklar skall alltid limmas i hörn vid dessa typer av fönsteröppningar.'
    ],
    time: 40
  },
  {
    header: 'Kontroll',
    notice: ['Kontrollera höjd, bredd, djup och kryssmått.'],
    time: 3
  },
];

export class Home extends React.Component {

  state = {
    momentNr: 0,
    showImage: false,
  }

  constructor(props) {
    super(props);
    this.props.watchPersonData();
  }

  handleBack = () => {
    this.setState((prevState) => {
      if (prevState.momentNr !== 0) {
        return {
        momentNr: prevState.momentNr - 1
      }} else {
        return { prevState }
      }
    })
  }

  handlePressSidebarItem = (item) => {
    console.log("handle press sidebar");
    this.setState({momentNr: item});
  }

  handleNext = () => {
    this.setState((prevState) => {
      if (prevState.momentNr < sob.length -1 ) {
        return {
        momentNr: prevState.momentNr + 1
      }} else {
        return { prevState }
      }
    })
  }

  handlePressImage = () => {
    this.setState((prevState) =>({
      showImage: !prevState.showImage
    }));
  }

  handlePressNotify = () => {
    this.setState((prevState) =>({
      showImage: !prevState.showImage
    }));
  }

  render() {
    const { momentNr } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.sidebarContainer}>
          <Sidebar sob={sob} active={this.state.momentNr} handlePressSidebarItem={this.handlePressSidebarItem} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.noticeContainer}>
            <TouchableHighlight onPress={this.handlePressNotify}>
              <View style={styles.noticeTouchable}>
              { sob[momentNr].notice.map((item, index) =>
                  <Text key={index} style={styles.noticeItem}>{item}</Text>
              )}
                <View style={{flex: 1}} />
                { sob[momentNr].image &&
                  <Text style={[styles.imageMessage, {alignSelf: 'center'}]}>SE BILD</Text>
                }                
              </View>
              
            </TouchableHighlight>            
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button} onPress={this.handleBack}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this.handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableHighlight>
          </View>
        </View>
        { this.state.showImage && sob[momentNr].image &&
              <TouchableHighlight onPress={this.handlePressImage} style={{ position: 'absolute', alignSelf: 'center', zIndex: 20, width: 416*1.3, height: 338*1.3, borderColor: 'white', borderWidth: 2  }}>
                <View onPress={this.handlePressImage}  style={{ position: 'absolute', alignSelf: 'center', zIndex: 20, width: '100%', height: '100%' }}>
                  <CustomImage style={{width: '100%', height: '100%' }} imageName={sob[momentNr].image} />
                </View>
              </TouchableHighlight>
            }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personData: state.personData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    watchPersonData: () => dispatch(watchPersonData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 40,
    backgroundColor: '#111',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 0.2,
    //backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    flex: 0.7,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    //backgroundColor: '#000',
  },
  sidebarContainer: {
    flex: 0.3,
  },
  barText: {
    //fontWeight: '100',
    fontFamily: 'space-mono',
    color: 'white',
    fontSize: 30,
  },
  noticeContainer: {
    flex: 0.8,
    justifyContent: 'space-between',
    //borderWidth: 1,
    //borderColor: 'white',
        
    //backgroundColor: '#333',
  },
  noticeTouchable: {
    flex: 1,
  },
  noticeItem: {
    paddingBottom: 10,
    fontFamily: 'space-mono',
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    width: 400,
    flex: 0.2,
    flexDirection: 'row',
    //backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    padding: 15,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  moment: {
  },
  notice: {
  },
  header: {
    fontFamily: 'space-mono',
    color: 'white',
    fontSize: 20,
  },
  text: {
    fontFamily: 'space-mono',
    color: 'white',
    fontSize: 16,
  },
  imageMessage: {
    fontFamily: 'space-mono',
    color: 'white',
    fontSize: 16,
  }
});