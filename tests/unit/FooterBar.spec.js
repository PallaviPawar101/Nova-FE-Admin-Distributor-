import {mount} from "@vue/test-utils";


import FooterBar from "@/globalcomponents/FooterBar.vue";



describe('FooterBar.vue',()=>{
    test('snapshot',()=>{
        const wrapper=mount(FooterBar);

        expect(wrapper).toMatchSnapshot();
    })
})

