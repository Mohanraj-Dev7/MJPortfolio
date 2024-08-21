let projectContainer = document.getElementById("projects");

fetch('https://gitfolio-api.onrender.com/git/repos/?profile="Mohanraj-Dev7"&contents="base"')
    .then(res => res.json())
    .then(repos => {
        for (let i in repos) {
            for (let j in repos[i]) {
                let repoSpace = document.createElement('div');
                repoSpace.classList.add('repoSpace');
                
                let repoName = document.createElement('div');
                repoName.classList.add('repoName');
                
                let a=document.createElement('a');
                let link=document.createTextNode(repos[i][j]['repoName']);
                a.appendChild(link);
                a.href=repos[i][j]['repoLink'];
                repoName.append(a);
                
                let icon=document.createElement('i');
                icon.setAttribute('class',"fa-solid fa-link")
                repoName.append("  ");
                repoName.append(icon);
                repoSpace.append(repoName);
               
                
                let desc=document.createElement('div');
                desc.classList.add('desc');
                desc.textContent=repos[i][j]['repoDesc'];
                repoSpace.append(desc);
                
                console.log(repoSpace);
    
                projectContainer.append(repoSpace);                
            }
        }
    });
