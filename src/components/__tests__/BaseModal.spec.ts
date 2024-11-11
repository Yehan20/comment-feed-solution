import { describe, it, expect, beforeEach, afterAll, beforeAll } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import BaseModal from "../BaseModal.vue";
import CommentReply from "../CommentReply.vue";
import { nextTick } from "vue";


describe('BaseModal', () => {

    beforeAll(() => {
        // Add a #app div to the document body for teleport to work
        const app = document.createElement('div');
        app.setAttribute('id', 'app');
        document.body.appendChild(app);
    });

    afterAll(() => {
        // Clean up by removing the #app element after tests
        const app = document.getElementById('app');
        if (app) {
            document.body.removeChild(app);
        }
    });
    
    beforeEach(() => {
        setActivePinia(createPinia());
    });


    // Mounting Test
    it("Component Should Render Correctly", () => {

        const wrapper = mount(BaseModal, {
            props: {
                title: "Are you Sure",
                description: "Your Want to Delete it"
            },
            attachTo: '#app'

        })

        expect(wrapper.html()).toMatchSnapshot()

    })


})
