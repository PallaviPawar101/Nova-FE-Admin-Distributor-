import {mount} from "@vue/test-utils";

import HomeView from "@/modules/home/src/views/HomeView.vue";


describe('HomeView.vue',()=>{
    test('snapshot',()=>{
        const wrapper=mount(HomeView);

        expect(wrapper).toMatchSnapshot();
    })
})
