import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CommentFeedView from "../../views/CommentFeedView.vue";
import { usecommentFeedStore } from "../../store/commentFeedStore";
import { OhVueIcon } from "oh-vue-icons";
import { nextTick } from "vue";


// Test for Comment View Component
describe('ComentFeedView', () => {
    let commentFeedStore:any=null;

    beforeEach(() => {
        setActivePinia(createPinia());
        commentFeedStore = usecommentFeedStore();
 
    });

    // Mounting Test
    it("Should Render Correctly", () => {

        const wrapper = mount(CommentFeedView, {

            global: {
                components: {
                    'v-icon': OhVueIcon,  // Register v-icon manually in test
                },
            },

        })



        expect(wrapper.html()).toMatchSnapshot()
    })

    // Sort by Upvote Click Event Test
    it('Should Change the isSorted State', async () => {
        const commentFeedStore = usecommentFeedStore(); // Get the store instance

        // Mount the component with the store
        const wrapper = mount(CommentFeedView, {

            global: {
                components: {
                    'v-icon': OhVueIcon,  // Register v-icon manually in test
                },
            },

        });

        const button = wrapper.find('.btn__sort');
        await button.trigger('click'); // will change the sort state to tru in our 


        await wrapper.vm.$nextTick();

        expect(commentFeedStore.isSortByUpvote).toBe(true)
    });


    // Reset Click Event Test
    it('Should Reset  the isSorted State Change', async () => {
     
        

        // Mount the component with the store
        const wrapper = mount(CommentFeedView, {

            global: {
                components: {
                    'v-icon': OhVueIcon,  // Register v-icon manually in test
                },
            },

        });


        const button = wrapper.find('.btn__reset');
        await button.trigger('click'); // will change the sort state to tru in our 


        await wrapper.vm.$nextTick();


        expect(commentFeedStore.isSortByUpvote).toBe(false)
    });

    // Upvote Main Points Test
    it("should Upvote and increase Main Points ", async () => {

        const wrapper = mount(CommentFeedView, {
           
            global: {
                components: {
                    'v-icon': OhVueIcon,  // Register v-icon manually in test
                },
            },
        });
        const commentFeedStore = usecommentFeedStore(); // Get the store instance
   

    
        const button = wrapper.findComponent({ name: 'CommentVoteButtonGroup' }).find('.btn__upvote');
        await button.trigger('click');

        await nextTick();

        // Check if the emit was triggered with the correct value
        const emittedEvents = wrapper.findComponent({ name: 'CommentVoteButtonGroup' }).emitted('@upVote');
        expect(emittedEvents).toBeTruthy(); 
        expect(commentFeedStore.totalPoints).toEqual(1)
    });


     // Downvote Main Points Test
     it("should Downvote and Decrease Main Points ", async () => {

        const wrapper = mount(CommentFeedView, {
           
            global: {
                components: {
                    'v-icon': OhVueIcon,  // Register v-icon manually in test
                },
            },
        });
        const commentFeedStore = usecommentFeedStore(); // Get the store instance
   

    
        const button = wrapper.findComponent({ name: 'CommentVoteButtonGroup' }).find('.btn__downvote');
        await button.trigger('click');

        await nextTick();

        // Check if the emit was triggered with the correct value
        const emittedEvents = wrapper.findComponent({ name: 'CommentVoteButtonGroup' }).emitted('@downVote');
        expect(emittedEvents).toBeTruthy(); 
        expect(commentFeedStore.totalPoints).toEqual(-1)
    });

})
