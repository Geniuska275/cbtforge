import { configureStore } from '@reduxjs/toolkit';



import authReduce from './src/reducers/auth';
import alertReduce from './src/reducers/alert';


const store = configureStore({
  reducer:{
    auth:authReduce,
    alert:alertReduce,
  }
 
  
});

export default store