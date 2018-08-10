import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const sob = [
  {
    header: 'Klossens dimension',
    notice: ['Kraftigt material som kloss ochsom 6mm skrv inte spräcker. Hyvlat och riktat till 90*100mm kortare än naterialtes höjd. Bild 1'],
    image: 'Bild1',
    time: 15
  },
  {
    header: 'Vinkel',
    notice: ['Måttet 300*300\nMaterial:18-21 björkplywood.\nBild2'],
    image: 'Bild2',
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
      '* Klossar och vinklar skall alltid limmas i hörn vid dessa typer av förnsteröppningar.'
    ],
    time: 40
  },
  {
    header: 'Kontroll',
    notice: ['Kontrollera höjd, bredd, djup och kryssmått.'],
    image: '',
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

    console.log(sob[3].notice[2]);

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          
          <Text style={styles.text}>{sob[momentNr].header}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{sob[momentNr].notice}</Text>  
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 0.2,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 0.7,
    padding: 20,
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    width: 400,
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
  },
  moment: {
  },
  notice: {
  },
  text: {
    color: 'white',
    fontSize: 30,
  }
});