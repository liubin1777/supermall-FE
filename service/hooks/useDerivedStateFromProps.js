import * as React from 'react';

export default (nextProps, options) => {
    const { onChange } = options || {};

    const rerender = React.useReducer(v => v + 1, 0)[1];
    const onChangeRef = React.useRef(onChange);
    const preProps = React.useRef();
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

    if (nextProps !== null && preProps.current !== nextProps) {
        preProps.current = nextProps
        stateRef.current = nextProps;
    }

    return [stateRef.current, setState.current];
}