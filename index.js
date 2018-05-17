const form= document.querySelector('form#teamForm')
const teamsArray = []

const renderTeamItem = function(team) {
    const item = document.createElement('li');
    item.textContent = `Team: ${team}`;
    return item;
 }

 const renderTeam = function(teamName) {
    const list = document.createElement('ul');
    list.appendChild(renderTeamItem(teamName));
    return list;
}

// function teamsItem(team){
//     const div = document.createElement('div')
    

//     const item = document.createElement('li')
//     item.textContent = team
//     //item.style.fontSize='20px'
//     //item.style.textAlign='center'


//     div.appendChild(item)

//     return div
// }

const handleSubmit = function(ev){
    ev.preventDefault()
    const f = ev.target
    const teamForm = document.querySelector('#teamForm')
    const favTeam = f.favTeam.value

    teamForm.appendChild(renderTeam(favTeam))
    // const teamList = document.createElement('ul')
    // teamList.appendChild(teamsItem(favTeam))
    // teamForm.appendChild(teamList)

    teamsArray.push(favTeam) 
    form.reset()
    form.favTeam.focus()
}

form.addEventListener('submit', handleSubmit)