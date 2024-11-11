import { describe, it, expect, beforeEach, afterAll, beforeAll } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CommentReply from "../CommentReply.vue";

import { nextTick } from "vue";



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
           }

        })

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


       // Test Hide Reply Editor Show Model
  it('Should trigger  comfirm  model action r', async () => {
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
    
    });

    // Check if the reply button exists before clicking
    // const cancelButton = wrapper.find('.cancel__btn');
    // expect(cancelButton.exists()).toBe(true);

    // // Trigger the reply button click
    // await cancelButton.trigger('click');
    // await nextTick();

    // // Check if the TextEditor component is now rendered after clicking reply
    // const editorArea = wrapper.findComponent({ name: 'TextEditor' }).find('textarea');
    // expect(editorArea.exists()).toBe(true);
});
  



})


