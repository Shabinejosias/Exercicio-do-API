console.log("ok")
const ul = document.querySelector('ul')
function getAPIGithub()  {
    fetch('https://api.github.com/users/Shabinejosias/repos').then(async res => {

    if(!res.ok){
        throw new Error(res.status);
    }

    var data = await res.json()

    data.map(item => {
        let li = document.createElement('li')
        li.innerHTML = `
        <strong>${item.name.toUpperCase()}</strong>
        <span>Url: ${item.url}</span>
        <span>Data criação: ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span> 

        `

        ul.appendChild(li)
    })




    }).catch(e => console.log(e))
}

getAPIGithub()