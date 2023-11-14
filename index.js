const rules = document.getElementById('rules')
const true1 = document.getElementById('true')
const false1 = document.getElementById('false')


rules.addEventListener('click',() => {
    alert("choisis le bon nom de l'animal !");
})




bt1.addEventListener('click', () => {
    bt1.style.border =" solid green 5px";
    true1.style.opacity ="1";
    next.style.opacity ="1"
    bt2.style.display ="none"
    bt3.style.display ="none"
    bt4.style.display ="none"
    retry.style.display ="none"

})

bt2.addEventListener('click', () => {
    bt2.style.border =" solid red 5px"
    retry.style.opacity ="1"
    false1.style.opacity ="1";
    bt1.style.display ="none"
    bt3.style.display ="none"
    bt4.style.display ="none"
})

bt3.addEventListener('click', () => {
    bt3.style.border =" solid red 5px"
    retry.style.opacity ="1"
    false1.style.opacity ="1";
    bt1.style.display ="none"
    bt2.style.display ="none"
    bt4.style.display ="none"
})

bt4.addEventListener('click', () => {
    bt4.style.border =" solid red 5px"
    retry.style.opacity ="1"
    false1.style.opacity ="1";
    bt1.style.display ="none"
    bt3.style.display ="none"
    bt2.style.display ="none"
})

retry.addEventListener('click',() => {
    window.location.reload()
})

next.addEventListener('click',() => {
    
})