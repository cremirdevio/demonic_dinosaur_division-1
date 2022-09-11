import formHtml from './Form.html';
import './Form.scss';
// components
import { textTypingEffect } from 'Components/TextTypingEffect/textTypingEffect';

const FormSection = (container) => {
    container.innerHTML += formHtml;

    window.addEventListener('DOMContentLoaded', () => {
        /* typewriter effect */
        const typewriterText = 'Sign up to receive updates from Demonic Dinosaur Division NFT.';
        const typewriterDestination = document.querySelector('.formSection__subtitle');

        textTypingEffect(typewriterText, typewriterDestination);

        // Newsletter Form Implementation
        const newsletterForm = document.querySelector('.newsletter-form');
        const nameInput = document.querySelector('.newsletter-form input[name="name"]');
        const emailInput = document.querySelector('.newsletter-form input[name="email"]');

        
        newsletterForm.addEventListener('submit', function(event) {
          event.preventDefault();

          // You can write code for validating the input here
          let fullName = nameInput.value;
          let email = emailInput.value;
          console.log(fullName, email);

          // Send Post Request to API
        });
    });
};

export { FormSection };
