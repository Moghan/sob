
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';
import firebaseConfig from '../firebase/keys';

firebase.initializeApp(firebaseConfig);

//console.log("store init _firebaseConfig", _firebaseConfig);
//
// Initial State...
//

const initialState = {
  dbRoot: firebase.database().ref(),
  storageRef: firebase.storage().ref(),
  personData: { },
  jobData: { },
  jobDataArr: [],
  blueprintData: { },
}

//
// Reducer...
//

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "setPersonData": 
      return { ...state, personData: action.value };
    case "setBlueprintData": 
      return { ...state, blueprintData: action.value };
    case "setJobData":
      return { ...state, jobData: action.value };
    case "setJobDataArr":
      return { ...state, jobDataArr: action.value };
    case "addBlueprintJob":
      
      return state;      
    default: 
      return state;
  }
}

//
// Store...
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

//
// Action Creators
//

const setPersonData = (personData) => {
  return {
    type: "setPersonData",
    value: personData
  };
};

const setJobData = (jobData) => {
  return {
    type: "setJobData",
    value: jobData
  };
};

const setJobDataArr = (jobDataArr) => {
  return {
    type: "setJobDataArr",
    value: jobDataArr
  };
};

const setBlueprintData = (blueprintData) => {
  return {
    type: "setBlueprintData",
    value: blueprintData
  };
};

const addBlueprintJob = (blueprintName) => {
  return {
    type: "addBlueprintJob",
    value: blueprintName
  };
};

const watchPersonData = () => {
  return function(dispatch) {
    firebase.database().ref("person").on("value", function(snapshot) {
        
        var personData = snapshot.val();
        var actionSetPersonData = setPersonData(personData);
        dispatch(actionSetPersonData);
        
    }, function(error) { console.log(error); });
  }
};

const watchJobData = () => {
  return function(dispatch) {
    firebase.database().ref("jobs").on("value", function(snapshot) {
        
        var jobData = snapshot.val();
        console.log("watch jobdata", jobData);
        const jobArr = Object.keys(jobData).map((section) => {
          return {
            id: section,
            jobs: Object.keys(jobData[section]).map((job) => {
              return {
                id: job,
                job: jobData[section][job]
              }
            })
          }});
        console.log(jobArr);  
        var actionSetJobData = setJobData(jobData);
        var actionSetJobDataArr = setJobDataArr(jobArr);
        dispatch(actionSetJobData);
        dispatch(actionSetJobDataArr);
        
    }, function(error) { console.log(error); });
  }
};

const watchBlueprintData = () => {
  return function(dispatch) {
    firebase.database().ref("blueprints").on("value", function(snapshot) {
        
        var blueprintData = snapshot.val();
        var actionSetBlueprintData = setBlueprintData(blueprintData);
        dispatch(actionSetBlueprintData);
        
    }, function(error) { console.log(error); });
  }
};

export { store, setPersonData, watchPersonData, setJobData, setJobDataArr, watchJobData, setBlueprintData, watchBlueprintData, addBlueprintJob };