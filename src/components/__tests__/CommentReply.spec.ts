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


        // Check Emit When Cancel the Model
    it('emits a message when the upvote button is clicked', async () => {

        const wrapper = mount(CommentReply, {
          props: {
            messageInfo: {
              id: 3,
              userName: "abc",
              parentId: 1,
              upvoted: false,
              downvoted: false,
            }
          }
        });
    
    

  });



})


