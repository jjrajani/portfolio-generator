function GithubService ($http, SERVER) {

  this.getProfile = getProfile;
  // this.getRepos = getRepos;

  function getProfile (github_username) {
    return $http.get(SERVER.URL + 'github/' + github_username);
  }
}

GithubService.$inject = ['$http', 'SERVER'];
export { GithubService };
