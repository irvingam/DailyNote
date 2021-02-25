                // Selectors //
const addBtn = document.getElementById('add--btn')
const clearBtn = document.getElementById('clear--btn')

const inputText = document.getElementById('text--input')

                // Events //
addBtn.addEventListener('click', addNote)
clearBtn.addEventListener('click', () => {
    inputText.value = ''
})

                // Functions //
function addNote() {

}