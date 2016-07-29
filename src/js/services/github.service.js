function GithubService ($http, SERVER) {

  this.getProfile = getProfile;
  this.newestFirst = newestFirst;
  this.recentlyUpdated = recentlyUpdated;
  this.getUserProfile = getUserProfile;
  this.getGitProfile  = getGitProfile;

  // this.getRepos = getRepos;

  function getGitProfile (github_username) {
    return $http.get(SERVER.URL + 'github/' + github_username);
  }

  function newestFirst(repos) {
    return repos.sort(function (a, b) {
      let keyA = new Date(a.created_at);
      let keyB = new Date(b.created_at);
      return ((keyA > keyB) ? -1 : (keyA < keyB) ? 1: 0)
    })
  }

  function recentlyUpdated(repos) {
    return repos.sort(function (a, b) {
      let keyA = new Date(a.updated_at);
      let keyB = new Date(b.updated_at);
      return ((keyA > keyB) ? -1 : (keyA < keyB) ? 1: 0)
    })
  }

  function getUserProfile (site_username) {
    return $http.get(SERVER.URL + 'profiles/' + site_username);
  }

}

GithubService.$inject = ['$http', 'SERVER'];
export { GithubService };
