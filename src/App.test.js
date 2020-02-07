import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders three <App /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).to.have.lengthOf(3);
  });
});
