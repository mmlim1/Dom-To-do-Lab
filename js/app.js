const inp = document.getElementById('input-box')
const btn = document.getElementById('submit-button')
const ul = document.getElementById('todo-list')

btn.addEventListener('click', function(evt) {
  const li = document.createElement('li')
  li.textContent = inp.value
  inp.value = ''
  ul.appendChild(li)
})
