import AutoGithubUpdate from 'auto-git-update';

const config = {
    repository: 'https://github.com/ShyShallot/projectgoldbot',
    fromReleases: true,
    tempLocation: './tmp',
    exitOnComplete: true
}

const updater = new AutoGithubUpdate(config);

updater.autoUpdate();
