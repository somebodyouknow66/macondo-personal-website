document.querySelector('.avatar').addEventListener('click', () => {
    document.querySelector('.burst-menu').classList.toggle('open');
})

const overlay = document.querySelector('.modal-overlay');

document.querySelectorAll('.dock-item').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.modal;
        const isOpen = overlay.classList.contains('open');
        const isSame = overlay.dataset.current === section;

        if (isOpen && isSame) {
            overlay.classList.remove('open');
        } else {
            overlay.dataset.current = section;
            overlay.classList.add('open');
        }
    });
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' ) overlay.classList.remove('open');
});

overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
});

const modalContents = {
    projects: {
        label: 'Projects',
        sections: [{
            title: 'Featured',
            items: [
                { name: 'Clarity', desc: 'Clarity is an AI-powered developer tool that eliminates the most frustrating part of software development — joining a new codebase blind.', tag: 'IBM, Hackathon', url: 'https://lablab.ai/ai-hackathons/ibm-bob-hackathon/somebodyouknow/clarity' },
                { name: 'Clarity', desc: 'Clarity is an AI-powered developer tool that eliminates the most frustrating part of software development — joining a new codebase blind.', tag: 'IBM, Hackathon', url: 'https://lablab.ai/ai-hackathons/ibm-bob-hackathon/somebodyouknow/clarity' },
                { name: 'Clarity', desc: 'Clarity is an AI-powered developer tool that eliminates the most frustrating part of software development — joining a new codebase blind.', tag: 'IBM, Hackathon', url: 'https://lablab.ai/ai-hackathons/ibm-bob-hackathon/somebodyouknow/clarity' },
            ]
        }]
    },
    experience: {
        label: 'Experience',
        sections: [{
            title: 'Work',
            items: [
                { name: 'Company', desc: 'Role · Year – Year', tag: 'current' },
            ]
        }]
    },
    notes: {
        label: 'Notes',
        sections: [{
            title: 'Recent',
            items: [
                { name: 'you know what', desc: 'idk... what to write here so whatever', tag: 'my bio' },
            ]
        }]
    },
    about: {
        label: 'About me',
        sections: [{
            title: 'Bio',
            items: [
                { name: 'somebodyouknow', desc: 'i am somebodyouknow', tag: null },
            ]
        }]
    }
};

