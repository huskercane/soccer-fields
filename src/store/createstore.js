import { createStore } from 'redux';
// import expensesReducer from '../reducers/expenses';
// import filtersReducer from '../reducers/filters';
import fieldReducer from '../reducer/fields'

export default () => {
  const store = createStore(
    fieldReducer
    // combineReducers({
    //   expenses: expensesReducer,
    //   filters: filtersReducer
    // })
  );

  return store;
};
