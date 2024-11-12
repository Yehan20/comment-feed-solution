import { describe, it, expect, beforeEach } from "vitest";
import TextEditor from "../TextEditor.vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { nextTick } from "vue";
import { useCommentFeedStore  } from "../../store/commentFeedStore";
import TextEditorAddButton from "../TextEditorAddButton.vue";

describe('TextEditor', () => {

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    // Mounting Test
    it("Should Render Correctly", () => {
        const wrapper = mount(TextEditor, {
            props: {
                showDiscussion: true,  
                parentId: 123,         
                userName: 'JohnDoe',  
            },
        });
        expect(wrapper.exists()).toBe(true);

    })


    // OnChange Test
    it("updates content on typing", async () => {
        const wrapper = mount(TextEditor, {
            props: {
                showDiscussion: true, 
                parentId: 123,        
                userName: 'JohnDoe',  
            },
        });

        const editorArea = wrapper.findComponent({ name: 'TextEditor' }).find('textarea');

        await editorArea.setValue("Hello World");

        

        await nextTick();

        expect(wrapper.vm.$refs['text-area'].value).toBe("Hello World"); //
    });


    // Emit our event
    it("should emit @Check Message Length and gives the Length of our Message", async () => {

        const wrapper = mount(TextEditor, {
            props: {
                showDiscussion: true, 
                parentId: 123,        
                userName: 'JohnDoe',  
            },
        });
        const editorArea = wrapper.findComponent({ name: 'TextEditor' }).find('textarea');

        await editorArea.setValue("Abc");

        await nextTick();

        // Check if the emit was triggered with the correct value
        const emittedEvents = wrapper.emitted('@checkMessageLength');
        expect(emittedEvents).toBeTruthy(); // Check if the event was emitted
        expect(emittedEvents?.[0]).toEqual([3])
    });


    // Character Limit 

    it("should limit content to 400 characters", async () => {
        const wrapper = mount(TextEditor, {
            props: {
                showDiscussion: true, 
                parentId: 123,        
                userName: 'JohnDoe', 
            },
        });

        const longText = '&'.repeat(500); // Creates a string of 500 'a' characters

        const editorArea = wrapper.findComponent({ name: 'TextEditor' }).find('textarea');

        await editorArea.setValue(longText);

        await wrapper.vm.$nextTick();

        const content = editorArea.element.value;

        expect(content.length).toBe(400);

    });

    // Add Comment Feature Test
    it("Should add a comment after clicking add comment", async () => {
        // Mount the component with the Pinia store
        const wrapper = mount(TextEditor, {
            props: {
                showDiscussion: true,  
                parentId: 123,        
                userName: 'JohnDoe',   
            },
        })

        const commentFeedStore = useCommentFeedStore ();

        // Simulate typing a comment into the text area
        const testingValue = "hello from mars";

        const editorArea = wrapper.findComponent({ name: 'TextEditor' }).find('textarea');

        await editorArea.setValue(testingValue);

        // Find the submit button and simulate a click
        const button = wrapper.findComponent(TextEditorAddButton)
        await button.trigger('click');

        // Wait for the DOM to update
        await wrapper.vm.$nextTick();

        // Check with the feed the value
        const foundComment = commentFeedStore.commentFeed.find((comment) => comment.message === testingValue);

        
        expect(foundComment).toBeDefined();
    });


    // Empty Feild Validation Test
    it("Should Show an Error Text", async () => {

        const wrapper = mount(TextEditor, {
            props: {
                showDiscussion: true, 
                parentId: 123,         
                userName: 'JohnDoe',  
            },
        })

        const testingValue = "";

        const editorArea = wrapper.findComponent({ name: 'TextEditor' }).find('textarea');

        await editorArea.setValue(testingValue);

        const button = wrapper.findComponent(TextEditorAddButton)
        await button.trigger('click');

        await wrapper.vm.$nextTick();
        // Check with the feed the value
        const errorMessage = wrapper.find('.error__text');
        expect(errorMessage.exists()).toBe(true);

        expect(errorMessage.text()).toBe('Message must be not be Empty');

    });


})
