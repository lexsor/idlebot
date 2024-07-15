// ==UserScript==
// @name         IdleMMORPG Skill Manager with Dynamic Menu
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Manager for launching specific skill scripts in IdleMMORPG using a dynamic menu system
// @author       You
// @match        *://web.idle-mmo.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Skill Manager started");

    const skills = ['Woodcutting', 'Mining', 'Fishing', 'Alchemy', 'Smelting', 'Cooking', 'Forge', 'Combat'];

    // Create and display the menu
    function createMenu() {
        const menu = document.createElement('div');
        menu.id = 'skill-manager-menu';
        menu.style.position = 'fixed';
        menu.style.top = '10px';
        menu.style.right = '10px';
        menu.style.zIndex = 1000;
        menu.style.backgroundColor = 'white';
        menu.style.border = '1px solid black';
        menu.style.padding = '10px';
        menu.style.maxHeight = '90%';
        menu.style.overflowY = 'auto';

        // Skill selection
        const skillSelect = document.createElement('select');
        skills.forEach(skill => {
            const option = document.createElement('option');
            option.value = skill;
            option.textContent = skill;
            skillSelect.appendChild(option);
        });
        menu.appendChild(skillSelect);

        // Start button
        const startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.addEventListener('click', () => {
            const selectedSkill = skillSelect.value;
            startSkillSession(selectedSkill);
        });
        menu.appendChild(startButton);

        document.body.appendChild(menu);
    }

    // Function to start a skill session based on user input
    function startSkillSession(skill) {
        console.log(`Starting ${skill} session`);
        // Call the appropriate script based on the selected skill
        switch (skill) {
            case 'Woodcutting':
                loadScript('https://your-script-url.com/woodcutting.js');
                break;
            case 'Mining':
                console.log('Mining script not implemented yet.');
                break;
            case 'Fishing':
                console.log('Fishing script not implemented yet.');
                break;
            case 'Alchemy':
                console.log('Alchemy script not implemented yet.');
                break;
            case 'Smelting':
                console.log('Smelting script not implemented yet.');
                break;
            case 'Cooking':
                console.log('Cooking script not implemented yet.');
                break;
            case 'Forge':
                console.log('Forge script not implemented yet.');
                break;
            case 'Combat':
                console.log('Combat script not implemented yet.');
                break;
            default:
                console.log('Skill not recognized.');
        }
    }

    // Function to load a script dynamically
    function loadScript(url) {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => console.log(`Loaded script: ${url}`);
        script.onerror = () => console.error(`Failed to load script: ${url}`);
        document.head.appendChild(script);
    }

    // Initialize menu
    createMenu();

    console.log("Skill Manager execution finished");

})();
