import React from 'react';
import ReactDOM from 'react-dom';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('snapshot', () => {
    const tree = mount(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
