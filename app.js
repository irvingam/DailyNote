                // Selectors //
const addBtn = document.getElementById('add--btn')
const clearBtn = document.getElementById('clear--btn')

const inputText = document.getElementById('text--input')
const noteContainer = document.getElementById('container')

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
    noteView.innerText = 'View'
    noteView.classList.add('note--view-btn')
    newNote.appendChild(noteView)

    const noteDelete = document.createElement('button')
    noteDelete.innerHTML = '<i class="fas fa-trash"></i>'
    noteDelete.classList.add('note--delete-btn')
    newNote.appendChild(noteDelete)

    noteContainer.appendChild(newNote)

    inputText.value = ''
}

function actionBtn(e) {
    const item = e.target

    if(item.classList[0] === 'note--delete-btn') {
        const note = item.parentElement
        note.remove()
    }
}