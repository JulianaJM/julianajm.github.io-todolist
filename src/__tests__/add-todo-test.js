import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../components/add-todo';


describe('<AddTodo />', () => {    
    it('renders without crashing', () => {
        const wrapper = shallow(<AddTodo />)
    })

    it('renders one <AddTodo /> components', () => {
      const wrapper = shallow(<AddTodo />);
      expect(wrapper.find(AddTodo)).toBeTruthy();
    });
  
    it('renders an `.outer-div`', () => {
      const wrapper = shallow(<AddTodo />);
      expect(wrapper.find('.outer-div')).toBeTruthy();
    });

    it('renders an `.inner-div`', () => {
        const wrapper = shallow(<AddTodo />);
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
  
    // it('simulates submit event', () => {
    //   const addTodo = jest.fn()
    //   const wrapper = shallow(<AddTodo />);
    //   expect(wrapper.find('[type="submit"]').length).toBe(1);
    //  // wrapper.find('#write-task').simulate('submit', addTodo);
    //   //wrapper.find('[type="submit"]').click();
    //   wrapper.find('[type="submit"]').get(0).click();
    //   expect(addTodo).toHaveBeenCalled();
    //   expect(addTodo).toHaveBeenCalledTimes(1);
    // });
  });