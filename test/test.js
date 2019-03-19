window.onload = function() {
    /* Omitted; use your own key here */
    const clientId = '';
    const clientSecret = '';
    const config = {
      id: 'demo page',
      owner: 'imsun',
      repo: 'gitment',
      oauth: {
        client_id: clientId,
        client_secret: clientSecret,
      }
    };
    const gitment = new Gitment(config);
    gitment.render('container');
    window.gitment = gitment;
}