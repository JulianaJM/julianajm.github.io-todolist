import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddTodo } from '../components/add-todo';


describe('<AddTodo />', () => {    
    it('renders without crashing', () => {
        const wrapper = shallow(<AddTodo addTodo={jest.fn()} />)
        expect(wrapper).toMatchSnapshot();
    })

    it('renders one <AddTodo /> components', () => {
      const wrapper = shallow(<AddTodo addTodo={jest.fn()} />);
      expect(wrapper.find(AddTodo)).toBeTruthy();
    });
  
    it('renders an `.outer-div`', () => {
      const wrapper = shallow(<AddTodo addTodo={jest.fn()} />);
      expect(wrapper.find('.outer-div')).toBeTruthy();
    });

    it('renders an `.inner-div`', () => {
        const wrapper = shallow(<AddTodo addTodo={jest.fn()} />);
        expect(wrapper.find('.inner-div')).toBeTruthy();
      });
  
    // it('renders children when passed in', () => {
    //   const wrapper = shallow((
    //     <MyComponent>
    //       <div className="unique" />
    //     </MyComponent>
    //   ));
    //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    // });
  
    it('simulates submit event', () => {
      const handleSubmit = jest.fn();
      const handleChange = jest.fn();
      const wrapper = mount(<AddTodo addTodo={jest.fn()}/>);
      expect(wrapper.find('form').length).toBe(1);
      wrapper.find('form').simulate('submit', { preventDefault: handleSubmit });
      // wrapper.find('[type="text"]').simulate('change', { target: handleChange });
      expect(handleSubmit).toHaveBeenCalled();
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });