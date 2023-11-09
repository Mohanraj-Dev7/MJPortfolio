let projectContainer = document.getElementById("projects");

fetch('https://gitfolio.pythonanywhere.com/git/?profile="SHK-MNRJ"')
    .then(res => res.json())
    .then(repos => {
        console.log(repos);
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
                repoSpace.append(repoName);
                
                let desc=document.createElement('div');
                desc.classList.add('desc');
                desc.textContent=repos[i][j]['desc'];
                repoSpace.append(desc);
                
                let techStack=document.createElement('ul');
                techStack.classList.add('techStack');
                if(repos[i][j]['techStack']!=null)
                {
                    for(let t in repos[i][j]['techStack'])
                    {
                        let stackItem=document.createElement('li');
                        stackItem.append(repos[i][j]['techStack'][t]);
                        techStack.append(stackItem);
                    }
                }
                repoSpace.append(techStack);
                
                projectContainer.append(repoSpace);                
            }
        }
    });
