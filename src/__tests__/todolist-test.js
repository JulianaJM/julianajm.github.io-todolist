import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../components/todoList';


describe('<TodoList />', () => {    
    it('renders without crashing', () => {
        const wrapper = shallow(<TodoList />)
        expect(wrapper).toMatchSnapshot();
    })

    it('renders one <TodoList /> components', () => {
      const wrapper = shallow(<TodoList />);
      expect(wrapper.find(TodoList)).toBeTruthy();
    });
  
    it('renders an `.action-bar`', () => {
      const wrapper = shallow(<TodoList />);
      expect(wrapper.find('.action-bar')).toBeTruthy();
    });

    it('renders children when passed in', () => {
      const wrapper = shallow((
        <TodoList>
          <div className="unique" />
        </TodoList>
      ));
      expect(wrapper.find('.unique')).toBeTruthy();
    });
  });