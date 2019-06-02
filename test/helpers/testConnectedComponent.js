import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

export default (ConnectedComponent, component, initialStore = {}) => {
  const state = initialStore;
  const createMockStore = () => createStore(() => state);

  const stateParam = Symbol('state');

  const render = () => mount(
    <Provider store={createMockStore()}>
      <ConnectedComponent />
    </Provider>
  );

  const testAction = (actionName, action) => {
    it(`should inject the action '${actionName}'`, () => {
      action.mockImplementation(() => ({
        type: 'MOCK_ACTION'
      }));

      const injected = render()
        .find(component)
        .prop(actionName);
      expect(injected).toBeDefined();

      injected();

      expect(action).toHaveBeenCalled();
    });
  };

  const testProp = (
    propName,
    action,
    { parameterOrder = [stateParam], transform = x => x } = {}
  ) => {
    it(`should inject the prop '${propName}'`, () => {
      const mockValue = transform(Symbol('mock-value'));
      action.mockImplementation(() => mockValue);

      const propPath = propName.includes('.')
        ? propName.split('.')
        : [propName];

      const prop = render()
        .find(component)
        .prop(propPath.shift());

      if (propPath.length === 0) {
        expect(prop).toBeDefined();
        expect(prop).toEqual(mockValue);
      } else {
        const leafProp = propPath.reduce((subProp, path) => {
          expect(subProp).toBeDefined();

          return subProp[path];
        }, prop);

        expect(leafProp).toBeDefined();
        expect(leafProp).toEqual(mockValue);
      }

      const parameters = parameterOrder.map(
        param => (param === stateParam ? state : param)
      );

      expect(action).toHaveBeenCalledWith(...parameters);
    });
  };

  const testRender = () => {
    it('should render', () => {
      expect(render().exists()).toBe(true);
    });

    it('should render its component', () => {
      expect(
        render()
          .find(component)
          .exists()
      ).toBe(true);
    });
  };

  return {
    testProp, testAction, testRender, stateParam
  };
};
