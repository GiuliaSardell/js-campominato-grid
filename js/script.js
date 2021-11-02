const container = document.querySelector('.containerMain')


for (let i = 0; i < 100; i++){
  const sq  = createSquare(container);
  sq.addEventListener('click', function(){
    this.classList.add('clicked')
  })

  


}

function createSquare(target){
  const sq = document.createElement('div');
  sq.className='square';
  target.append(sq)
  return sq
}


