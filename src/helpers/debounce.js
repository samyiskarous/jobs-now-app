import { useMemo } from 'react'
import _ from 'lodash';

const useDebounce = (fnToDebounce, durationInMs = 200) => {
    if (isNaN(durationInMs)) {
      throw new TypeError("durationInMs for debounce should be a number");
    }
  
    if (fnToDebounce == null) {
      throw new TypeError("fnToDebounce cannot be null");
    }
  
    if (typeof fnToDebounce !== "function") {
      throw new TypeError("fnToDebounce should be a function");
    }
  
    return useMemo(() => _.debounce(fnToDebounce, durationInMs), [fnToDebounce, durationInMs]);
};

export default useDebounce;