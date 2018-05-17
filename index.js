const form= document.querySelector('form#teamForm')



const handleSubmit = function(ev){
    ev.preventDefault()

    const favTeam = form.favTeam.value

    form.reset()
    form.favTeam.focus()
}

form.addEventListener('submit', handleSubmit)