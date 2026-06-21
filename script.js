document.querySelector('.avatar').addEventListener('click', () => {
    document.querySelector('.burst-menu').classList.toggle('open');
})

const overlay = document.querySelector('.modal-overlay');

document.querySelectorAll('.dock-item').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.modal;
        const isOpen = overlay.classList.contains('open');
        const isSame = overlay.dataset.current === section;
        isOpen && isSame ? closeModal() : openModal(section);
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
                { name: 'Clarity', desc: 'Clarity is an AI-powered developer tool that eliminates the most frustrating part of software development — joining a new codebase blind.', tag: 'IBM, Hackathon', url: 'https://lablab.ai/ai-hackathons/ibm-bob-hackathon/somebodyouknow/clarity', img:'images/clarity.png'},
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

function renderContent(section) {
    const data = modalContents[section];
        document.querySelector('.modal-title-text').textContent = data.label;
        document.querySelectorAll('.modal-nav-item').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.section === section);
        });

        document.getElementById('modal-content').innerHTML = data.sections.map(sec => `
            <div class="modal-section">
            <h3 class="modal-section-title">${sec.title}</h3>
            ${sec.items.map(item => `
                <div class="modal-card modal-card-projects">
                <img class="modal-card-img" src="${item.img}"
                <div class="modal-class-header">
                <span class="modal-card-name">${item.name}</span>
                ${item.tag ? `<span class="modal-tag>${item.tag}</span>` : ''}
                </div>
                <p class="modal-card-desc">${item.desc}</p>
                <a href="${item.url}" target="_blank" class="modal-card-link"> + view project</a>
                </div>
        

                `).join('')}
            </div>
            `).join('');
}

function openModal(section) {
    renderContent(section);
    overlay.dataset.current = section;
    console.log("content")
    overlay.classList.add('open');
    document.querySelectorAll('.dock-item').forEach(b => b.classList.remove('active'));
}

function closeModal() {
    overlay.classList.remove('open');
    document.querySelectorAll('.dock-item').forEach(b => b.classList.remove('active'));
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape'){
        closeModal();
    }
})

overlay.addEventListener('click', e => {
    if (e.target === overlay) {
        closeModal()
    }
})

document.querySelectorAll('.modal-nav-item').forEach(btn => {
    btn.addEventListener('click', () => renderContent(btn.dataset.section));
})