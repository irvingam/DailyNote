                // Selectors //
// button selectors
const addBtn = document.getElementById('add--btn')
const clearBtn = document.getElementById('clear--btn')

// note selectors
const inputText = document.getElementById('text--input')
const noteContainer = document.getElementById('container')

// modal selectors
const modal = document.getElementById('modal')
const modalClose = document.querySelector('.closebtn')


                // Events //
// click and press 'enter' 
addBtn.addEventListener('click', addNote)
document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {addNote()}
})

// clears input
clearBtn.addEventListener('click', () => {
    inputText.value = ''
})

// action buttons event
noteContainer.addEventListener('click', actionBtn)

// close modal events
modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})
window.onclick = function(event) {
    if(event.target == modal) {modal.style.display = 'none'}
}


                // Functions //

// adds input to note container
function addNote() {
    const newNote = document.createElement('div')
    newNote.classList.add('note--new')

    const noteText = document.createElement('li')
    noteText.innerText = inputText.value
    noteText.classList.add('note--text')
    newNote.appendChild(noteText)

    const noteView = document.createElement('button')
    noteView.innerHTML = '<i class="far fa-eye"></i>'
    noteView.classList.add('note--view-btn')
    newNote.appendChild(noteView)

    const noteDelete = document.createElement('button')
    noteDelete.innerHTML = '<i class="fas fa-trash"></i>'
    noteDelete.classList.add('note--delete-btn')
    newNote.appendChild(noteDelete)

    noteContainer.appendChild(newNote)

    console.log(noteText.innerText)

    inputText.value = ''
}

function actionBtn(e) {
    const item = e.target
    const note = item.parentElement

    // delete button
    if(item.classList[0] === 'note--delete-btn') {
        note.remove()
    }
    // view/modal button
    if(item.classList[0] === 'note--view-btn') {
        let modalText = document.getElementById('modaltext')
        modalText.innerText = note.innerText
        modal.style.display = 'block'
    }
}
