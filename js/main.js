let skills = document.querySelector('#skills h2')
let projects = document.querySelector('#projects h2')
let contact = document.querySelector('#contact h2')


const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        let tag = '.ico-' + entry.target.dataset.name
        if(entry.isIntersecting) {
            document.querySelector(tag).setAttribute('id', 'active')
        } else {
            document.querySelector(tag).removeAttribute('id')
        }
    }
})

observer.observe(skills)
observer.observe(projects)
observer.observe(contact)


function close() {
    document.querySelector('.bigContainer').style.display = 'block'
    document.querySelector('.modal').style.display = "none"
}

document.querySelector('.mobile').addEventListener('click', function () {
    document.querySelector('.bigContainer').style.display = 'none'
    document.querySelector('.modal').style.display = "block"
})

document.querySelector('#close').addEventListener('click', function () {
    close()
})

document.querySelectorAll('.mobileNav a').forEach( element => {
    element.addEventListener('click', function () {
        close()
    })
   
});



