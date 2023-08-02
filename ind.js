const button = document.querySelector('.button')
const span = document.querySelector('span')
// console.log(button)

all = function (){
    button.classList.add('position')
    span.textContent = 'uploading....'

    setTimeout(()=>{
        button.classList.remove('position')
        button.style.background = 'green'
        span.textContent = 'uploaded'
            setTimeout(()=>{
                span.textContent = 'upload file'
                button.style.background = 'blue'
            },2000)
    },6000)
}
button.addEventListener('click', all)