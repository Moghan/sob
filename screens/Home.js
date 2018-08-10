import React from 'react';
import { Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Sidebar from '../components/Sidebar';

const sob = [
  {
    header: 'Klossens dimension',
    notice: ['Kraftigt material som kloss och som 6mm skruv inte spräcker.\nHyvlat och riktat till 90*100mm kortare än materialets höjd. Bild 1'],
    image: 'Bild1.png',
    time: 15
  },
  {
    header: 'Vinkel',
    notice: ['Måttet 300*300\nMaterial:18-21 björkplywood.\nBild2'],
    image: 'Bild2.png',
    time: 10
  },
  {
    header: 'Vidhäftning av lim',
    notice: ['Materialet bakom kloss och vinklar skall mattas av med ett sandpapper för bättre vidhäftning av lim.'],
    time: 15
  },
  {
    header: 'Limning av vinklar och klossar',
    notice: [
      '* Fullfölja limning i ett arbetsmoment.\n  Får inte avbrytas då glipor kan uppstå samt att vinkeln kan påverkas av stelnat lim.\n',
      '* Justera krysset i samband med limning och fastskruvning.\n',
      '* Klossar och vinklar skall alltid limmas i hörn vid dessa typer av fönsteröppningar.'
    ],
    time: 40
  },
  {
    header: 'Kontroll',
    notice: ['Kontrollera höjd, bredd, djup och kryssmått.'],
    time: 3
  },
];

export default class Home extends React.Component {

  state = {
    momentNr: 0
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

  render() {
    //console.log(sob[this.state.momentNr].moment);
    //console.log(sob); sob[momentNr].notice.map((index) => <Text key={index} style={styles.text}>{sob[momentNr].notice[index]}</Text>)

    const { momentNr } = this.state;
    if(sob[momentNr].image) {
      const imgRef = '../assets/images/' + sob[momentNr].image;
      console.log('imgRef',imgRef);
    }

    return (
      <View style={styles.container}>
        <View style={styles.sidebarContainer}>
          <Sidebar sob={sob} active={this.state.momentNr}/>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>            
            <Text style={styles.header}>{sob[momentNr].header}</Text>
          </View>          
          <View style={styles.noticeContainer}>
            <Text style={styles.text}>{sob[momentNr].notice}</Text>
            { sob[momentNr].image &&
              <View style={{ position: 'absolute', alignSelf: 'center', zIndex: 20 }}>
                <Image source={require('../assets/images/Bild1.png')} />
              </View>
            }
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button} onPress={this.handleBack}>
              <Text style={styles.text}>Back</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this.handleNext}>
              <Text style={styles.text}>Next</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

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
    justifyContent: 'center',
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
    flex: 0.7,
    //backgroundColor: '#000',
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
  },
  moment: {
  },
  notice: {
  },
  header: {
    fontFamily: 'space-mono',
    color: 'white',
    fontSize: 30,
  },
  text: {
    fontFamily: 'space-mono',
    color: 'white',
    fontSize: 24,
  }
});