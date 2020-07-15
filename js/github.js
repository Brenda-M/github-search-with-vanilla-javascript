class GitHub{
  constructor(){
    this.client_id = '3986bbefba892797042e'
    this.client_secret = 'a75a9b5cb2baf5fa2669a83ff166aa22c2f5d728';
    this.repos_count = 8;
    this.repos_sort ='created:asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profile:profileData,
      repos:repoData
    }
  }
}