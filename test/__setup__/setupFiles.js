import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(Element.prototype, 'clientHeight', {
  writable: true,
  value: '',
});

Object.defineProperty(Element.prototype, 'clientWidth', {
  writable: true,
  value: '',
});

global.shallow = shallow;
global.mount = mount;
global.render = render;

const react = document.createElement('div');
react.id = 'react';
react.style.height = '100vh';
document.body.appendChild(react);

window.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

window.matchMedia = () => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
});

document.scrollingElement = {
  isSameNode: () => true,
};
