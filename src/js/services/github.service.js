function GithubService ($http, SERVER) {

  this.getUserProfile = getUserProfile;
  this.getGitProfile  = getGitProfile;

  // this.getRepos = getRepos;

  function getGitProfile (github_username) {
    return $http.get(SERVER.URL + 'github/' + github_username);
  }

  function getUserProfile (site_username) {
    return $http.get(SERVER.URL + 'profiles/' + site_username);
  }
}

GithubService.$inject = ['$http', 'SERVER'];
export { GithubService };
