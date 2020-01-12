
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import coins from './coins';
import shop from './shop';
import { reducer as toastr } from 'react-redux-toastr';

export default history => combineReducers({
  coins,
  shop,
  toastr,
  router: connectRouter(history)
});
