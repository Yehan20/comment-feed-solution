import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CommentVoteButtonGroup from "../CommentVoteButtonGroup.vue";



describe('CommentVoteButtonGroup', () => {

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    // Mounting Test
    it("Component Should Render Correctly", () => {

        const wrapper = mount(CommentVoteButtonGroup, {
            props: {
                downvoted: false,
                upvoted: false
            }

        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    // // Check Emit When Upvote Button Clicked
    // it('emits a message when the upvote button is clicked', async () => {

    //     const wrapper = mount(CommentVoteButtonGroup, {
    //         props: {
    //             downvoted: false,
    //             upvoted: false
    //         }
    //     });


    //     const button = wrapper.find('button.btn__upvote');
    //     await button.trigger('click');
    //     // Check that the "message" event was emitted
    //     expect(wrapper.emitted('@upVote')).toBeTruthy(); // The event is emitted
    // });

    // // Check Emit When DownVote Button Clicked
    // it('emits a message when the down vote button is clicked', async () => {
    //     const wrapper = mount(CommentVoteButtonGroup, {
    //         props: {
    //             downvoted: false,
    //             upvoted: false
    //         }
    //     });

   
    //     const button = wrapper.find('button.btn__downvote');
    //     await button.trigger('click');
    //     // Check that the "message" event was emitted
    //     expect(wrapper.emitted('@downVote')).toBeTruthy(); // The event is emitted
    // });

})
