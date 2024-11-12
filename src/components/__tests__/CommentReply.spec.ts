import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CommentReply from "../CommentReply.vue";

import { nextTick } from "vue";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import { BiArrowDownCircle, BiArrowUpCircle, PxMessageReply } from "oh-vue-icons/icons";




describe('CommentReply', () => {

   
    beforeEach(() => {
        setActivePinia(createPinia());
    });


    // Mounting Test
    it("Component Should Render Correctly", () => {

        const wrapper = mount(CommentReply, {
           props:{
            messageInfo:{
                 id:2,
                 parentId:1,
                 downvoted:false,
                 upvoted:false,
                 userName:"Yehan"
            }
           },
           global: {
            components: {
                'v-icon': OhVueIcon,  // Register v-icon manually in test
            },
        },


        })
        addIcons(PxMessageReply, BiArrowDownCircle, BiArrowUpCircle);



        expect(wrapper.html()).toMatchSnapshot()

    })


      
    // Test Clicking Reply Buttton 
    
    it('Should trigger  reply action with text editor', async () => {
      const wrapper = mount(CommentReply, {
          props: {
              messageInfo: {
                  id: 2,
                  userName: "abc",
                  parentId: 1,
                  upvoted: false,
                  downvoted: false,
              }
          },

          global: {
            components: {
                'v-icon': OhVueIcon,  // Register v-icon manually in test
            },
        },

      
      });
  
      // Check if the reply button exists before clicking
      const replyButton = wrapper.find('.reply__btn');
      expect(replyButton.exists()).toBe(true);
  
      // Trigger the reply button click
      await replyButton.trigger('click');
      await nextTick();
  
      // Check if the TextEditor component is now rendered after clicking reply
      const editorArea = wrapper.findComponent({ name: 'TextEditor' }).find('textarea');
      expect(editorArea.exists()).toBe(true);
  });

 
// Test Hide text Editor Cancel Button
  it('Should trigger Cancel action hide editor ', async () => {

    const wrapper = mount(CommentReply, {
        props: {
            messageInfo: {
                id: 2,
                userName: "abc",
                parentId: 1,
                upvoted: false,
                downvoted: false,
            }
        },
        global: {
            components: {
                'v-icon': OhVueIcon,  // Register v-icon manually in test
            },
        },

    
    });

   // Check if the reply button exists before clicking
   const replyButton = wrapper.find('.reply__btn');
   expect(replyButton.exists()).toBe(true);

   // Trigger the reply button click it shout cause the text editor 
   await replyButton.trigger('click');
   await nextTick();

    const cancelButton = wrapper.find('.cancel__btn'); // click cancel
    expect(cancelButton.exists()).toBe(true);

    // Trigger the reply button click
    await cancelButton.trigger('click');
    await nextTick();

    // Check if the TextEditor component is now rendered after clicking reply
    const editorArea = wrapper.findComponent({ name: 'TextEditor' });
    expect(editorArea.exists()).toBe(false);
});
  



})


