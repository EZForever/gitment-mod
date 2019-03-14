window.onload = function() {
    const config = {
        /* Omitted; use your own config here */
    };
    const gitment = new Gitment(config);
    gitment.render('container');
    window.gitment = gitment;
}