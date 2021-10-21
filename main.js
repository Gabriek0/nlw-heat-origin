const linksSocialMedia = {
    github: 'Gabriek0',
    youtube: 'RocketSeat',
    instagram: 'gabriel.sanches7',
    facebook: 'gabriel.sanches.5030',
    twitter: 'gabrielhsanches'
};

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const nameSocialMedia = li.getAttribute("class");
        li.children[0].href = `https://www.${nameSocialMedia}.com/${linksSocialMedia[nameSocialMedia]}`
    }
};

changeSocialMediaLinks()