import { mount } from 'vue-test-utils';
import Counter from '../src/components/Counter.js';
import expect from 'expect';

describe ('Counter', () => {
    let wrapper = mount(Counter);

    it ('defaults to a count of 0', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    it ('presents the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);
    });
});