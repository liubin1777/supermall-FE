import * as React from 'react';

export default (props, options) => {
    const { onChange } = options;

    const rerender = React.useReducer(v => v + 1, 0)[1];
    const onChangeRef = React.useRef(onChange);
    const stateRef = React.useRef();
    const setState = React.useRef(value => {
        let newState;
        if (typeof value === 'function') {
            newState = value(stateRef.current);
        } else {
            newState = value;
        }
        onChangeRef.current?.(newState, stateRef.current);
        stateRef.current = newState;
        rerender();
    })

    onChangeRef.current = onChange;

    if (props !== null && props !== stateRef.current) {
        stateRef.current = props;
    }

    return [stateRef.current, setState.current];
}