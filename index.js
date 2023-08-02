const button = document.querySelector('.button');
let text = document.querySelector('.text');

button.addEventListener('click', () =>{
    button.classList.add('progress')
    text.innerText = "uploading..."

    setTimeout(()=>{
        button.classList.remove('progress')
        text.innerText = "uploading..."
    }, 6000);
})