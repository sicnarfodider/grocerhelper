import types from '../actions/types';

import { combineReducers } from 'redux';
import list from './list-reducer';

export default combineReducers({list});
