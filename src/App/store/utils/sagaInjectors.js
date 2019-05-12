/* eslint-disable no-param-reassign */

const DAEMON = '@@saga-injector/daemon';
const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const injectSagaFactory = store => {
  return (key, descriptor = {}, args) => {
    const newDescriptor = {
      ...descriptor,
      mode: descriptor.mode || DAEMON,
    };
    const { saga, mode } = newDescriptor;
    let hasSaga = Reflect.has(store.injectedSagas, key);
    if (process.env.NODE_ENV !== 'production') {
      const oldDescriptor = store.injectedSagas[key];
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }
    if (!hasSaga || (hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT)) {
      store.injectedSagas[key] = {
        ...newDescriptor,
        task: store.runSaga(saga, args),
      };
    }
  };
};

export const ejectSagaFactory = store => {
  return key => {
    if (Reflect.has(store.injectedSagas, key)) {
      const descriptor = store.injectedSagas[key];
      if (descriptor.mode && descriptor.mode !== DAEMON) {
        descriptor.task.cancel();
        if (process.env.NODE_ENV === 'production') {
          store.injectedSagas[key] = 'done';
        }
      }
    }
  };
};

const getInjectors = store => ({
  injectSaga: injectSagaFactory(store),
  ejectSaga: ejectSagaFactory(store),
});

export default getInjectors;
