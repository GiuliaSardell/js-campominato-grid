const container = document.querySelector('.containerMain')

const listNumber = []


const level = document.getElementById('level')
console.log(level)

// level.options

if(level == level.options[0]){
  let value = level.options[0].value
  let numSquare = 100
  console.log('value',value)
  console.log('numSquare', numSquare)
} else if (level == level.options[1]){
  let value = level.options[1].value
  let numSquare = 81
  console.log('value',value)
  console.log('numSquare', numSquare)
} else if (level == level.options[2]){
  let value = level.options[2].value
  let numSquare = 49
  console.log('value',value)
  console.log('numSquare', numSquare)
}


// if(level.value == "1"){
//   console.log('funziona')
//   const squareNum = 100;
//   console.log(squareNum)
// } else if (level.value == "2"){
//   console.log('funziona2')
//   const squareNum = 81;
//   console.log(squareNum)
// }



for (let i = 0; i < 100; i++){
  const sq  = createSquare(container);

  sq.addEventListener('click', function(){
    this.classList.add('clicked')
  })
}

function createSquare(target){
  const sq = document.createElement('div');
  // const uniqueNumber = uniqueRandom (listNumber, 1, 100)
  // sq.innerHTML= uniqueNumber;
  sq.className='square';
  target.append(sq)
  return sq
}

// function uniqueRandom (list, min, max){
//   let number = generateRandomNum (min,max)
//   console.log(number)
// }

// function generateRandomNum (min, max){
//   return Math.floor(Math.random()*max-min +1)+min
//   // listNumber.push(number)
// }