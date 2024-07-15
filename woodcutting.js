// ==UserScript==
// @name         IdleMMORPG Auto Woodcutting
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Auto woodcutting script for IdleMMORPG
// @author       You
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Auto Woodcutting script started");

    function startWoodcutting() {
        const woodcuttingData = {
            'Bluebell Hollow (Level 1)': {
                'Oak Log': 'level 1',
                'Yew Log': 'level 5'
            },
            'Whispering Woods (Level 10)': {
                'Oak Log': 'level 1',
                'Yew Log': 'level 5',
                'Spruce Log': 'level 10',
                'Birch Log': 'level 15'
            },
            'Eldoria (Level 20)': {
                'Spruce Log': 'level 10'
            },
            'Crystall Cave (Level 33)': {
                'Birch Log': 'level 15',
                'Banyan Log': 'level 25'
            },
            'Skyreach Peak (Level 50)': {
                'Birch Log': 'level 15',
                'Banyan Log': 'level 25',
                'Maple Log': 'level 40'
            },
            'Enchanted Oasis (Level 60)': {
                'Yew Log': 'level 5',
                'Banyan Log': 'level 25',
                'Maple Log': 'level 40'
            },
            'Floating Gardens of Aetheria (Level 72)': {
                'Maple Log': 'level 40',
                'Willow Log': 'level 60'
            },
            'Celestial Observatory (Level 80)': {
                'Willow Log': 'level 60',
                'Mahogany Log': 'level 70'
            },
            'Isle of Whispers (Level 92)': {
                'Willow Log': 'level 60',
                'Mahogany Log': 'level 70'
            },
            'The Citadel (Level 93)': {
                'Mahogany Log': 'level 70',
                'Mystical Log': 'level 90'
            }
        };

        const menu = document.createElement('div');
        menu.id = 'woodcutting-menu';
        menu.style.position = 'fixed';
        menu.style.top = '10px';
        menu.style.right = '10px';
        menu.style.zIndex = 1000;
        menu.style.backgroundColor = 'white';
        menu.style.border = '1px solid black';
        menu.style.padding = '10px';
        menu.style.maxHeight = '90%';
        menu.style.overflowY = 'auto';

        for (const location in woodcuttingData) {
            const locationDiv = document.createElement('div');
            locationDiv.style.marginBottom = '10px';

            const locationHeader = document.createElement('h3');
            locationHeader.textContent = location;
            locationDiv.appendChild(locationHeader);

            const resourceList = document.createElement('ul');
            for (const resource in woodcuttingData[location]) {
                const resourceItem = document.createElement('li');
                resourceItem.textContent = `${resource} -> ${woodcuttingData[location][resource]}`;
                resourceList.appendChild(resourceItem);
            }
            locationDiv.appendChild(resourceList);
            menu.appendChild(locationDiv);
        }

        // Add a back button to return to the main menu
        const backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', () => {
            menu.remove();
            document.getElementById('skill-manager-menu').style.display = 'block';
        });
        menu.appendChild(backButton);

        document.body.appendChild(menu);
    }

    // Initialize Woodcutting menu
    startWoodcutting();

    console.log("Auto Woodcutting script execution finished");

})();
