import App from './App';

describe('App', () => {
  it('should be rendered', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.App')).toHaveLength(1);
  });
});
