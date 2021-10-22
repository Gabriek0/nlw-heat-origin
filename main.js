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

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            userName.textContent = data.name;
            userBio.textContent = data.bio;
            userLink.href = data.html_url
            userAvatar.src = data.avatar_url
            userLogin.textContent = data.login

        })
}

getGithubProfileInfos()