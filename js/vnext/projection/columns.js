import _ from 'underscore';

export function columns(state, columns) {
  return _.defaults({
    columns: columns || _.chain(state.items).first().keys().map(name => ({
      name,
      width: 120,
    })).value(),
  }, state);
}

