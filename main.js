//user can select an empty box

//user can win if 3 box's in a row are selected
//users can tie if all box's are full

// possible win combinations:
// 1,2,3
// 1,4,7
// 1,5,9
// 4,5,6
// 2,5,8
// 3,6,9
// 7,8,9
// 3,5,7

//add player x/o class
//remove unselected class
//event listener for clicking of boxes

document.addEventListener("DOMContentLoaded",()=>{
  let emptyBox  = document.getElementsByClassName('unselectedBox')
  //player/turn count
  let player    = 0
  //check if there's a winner
  let xSelected = document.getElementsByClassName('selectedByX')
  let oSelected = document.getElementsByClassName('selectedByO')

  document.addEventListener('click', ()=>{
    //if the box is selected - do nothing - still current player's turn

  });

  //check box's status so as not to override
  let boxElement = document.getElementsByClassName('box')
  boxSelection = boxElement.onclick;

  function boxSelection(){

    if(boxElement.classList.contains('unselectedBox')){
      checkPlayerAndSelectBox()
      player++
    }else{
      h2.innerHTML('Select a box that is not already in play')
    }

  }

  function checkPlayerAndSelectBox(){
    //selection by X (even)
    if(player % 2 == 0){
      boxElement.classlist.replace('unselectedBox', 'selectedByX')
    //selection by O (odd)
    }else{
      boxElement.classlist.replace('unselectedBox', 'selectedByO')
    }
    //box is not empty
    // boxElement.classlist.add('selectedBox')
  }

  function checkForWin(){

  }

});
