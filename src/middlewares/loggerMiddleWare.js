const loggerMiddleware = (store) => (next) => (action) => {
    console.group(action.type);
        console.log('Action: ', action);
        const invokeNextAction = next(action);
        console.log('New State: ', store.getState());
    console.groupEnd();

    return invokeNextAction;
}

export default loggerMiddleware;