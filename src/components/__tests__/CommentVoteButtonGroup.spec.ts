import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CommentVoteButtonGroup from "../CommentVoteButtonGroup.vue";
import { addIcons, OhVueIcon, } from "oh-vue-icons";
import { BiArrowDownCircle, BiArrowUpCircle } from "oh-vue-icons/icons";


describe('CommentVoteButtonGroup', () => {


    beforeEach(() => {
        setActivePinia(createPinia());


    });

    // Mounting Test
    it("Component Should Render Correctly", () => {

        const wrapper = mount(CommentVoteButtonGroup, {

            props: {
                upvoted: true,
                downvoted: false,
            }, global: {
                components: {

                    'v-icon': OhVueIcon,  // Register v-icon manually in test

                }
            }
        })
        addIcons(BiArrowDownCircle, BiArrowUpCircle);

        expect(wrapper.html()).toMatchSnapshot()
    })

})
