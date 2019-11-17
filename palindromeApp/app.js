const btn = document.querySelector('.enter')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')

function palindrome(pal) {
  let noSpaces = pal.replace(/\s/g, '')
  let lowerCaseReverse = noSpaces.toLowerCase().split('').reverse().join('')
  if(pal == 0){
    alert('Please type in the input value to check if it is a palindrome')
  }else if (pal === lowerCaseReverse){
    result.innerHTML = 'THIS IS A PALINDROME';
  }else{
    result.innerHTML = 'THIS IS NOT A PALINDROME';
  }
}

btn.addEventListener('click', () => {
  let input = document.querySelector('.input').value
  palindrome(input);
})


// Thank you so much for your help Kaniah
