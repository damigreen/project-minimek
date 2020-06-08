import { isObject } from 'lodash';

export function getValueFromEvent(e) {
  const {target} = e;

  let newValue;

  if(target) {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    newValue = {
      [target.name] : value,
    };
  }
  else if(isObject(e)) {
    newValue = e;
  }

  return newValue;
}

export const noop = () => {};