import React from 'react';
import { shallow } from 'enzyme';
import { Todo } from '../components/todo';


describe('<Todo />', () => {    
    it('renders without crashing', () => {
        const onClick = {updateTodo:jest.fn(), removeTodo:jest.fn()};

        const wrapper = shallow(<Todo onClick={onClick} 
        todo={{id:"1",completed:true,desc:"totop"}}/>)
        expect(wrapper.find('[type="button"]').length).toBe(1);
        expect(wrapper.find('[type="checkbox"]').length).toBe(1);
        wrapper.find('[type="button"]').simulate("click");
        wrapper.find('[type="checkbox"]').simulate("click");
        expect(wrapper).toMatchSnapshot();

        expect(onClick.removeTodo).toHaveBeenCalled();
        expect(onClick.removeTodo).toHaveBeenCalledTimes(1);

        expect(onClick.updateTodo.mock.calls.length).toEqual(1);

    })
  });