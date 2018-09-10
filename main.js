//user can select an empty box

//user can win if 3 box's in a row are selected
//users can tie if all box's are full

//add player x/o class
//remove unselected class
//event listener for clicking of boxes

document.addEventListener("DOMContentLoaded",()=>{
  //emptyBoxes variable returns an array of elements 0-8
  let emptyBoxes     = document.getElementsByClassName("unselectedBox")
  let selectedText = "classList.contains('selected')"
  console.log(emptyBoxes.length, emptyBoxes[0])

  document.addEventListener("click", ()=>{

    //player/turn count - X=Even - O=Odd
    let player = 0
    //if the box is selected - do nothing - still current player's turn
    boxSelection();

    if(emptyBoxes.length < 4){
      checkForWin();
    }

    let boxElements = document.getElementsByClassName("box");

    let box0 = boxElements[0]
    let box1 = boxElements[1]
    let box2 = boxElements[2]
    let box3 = boxElements[3]
    let box4 = boxElements[4]
    let box5 = boxElements[5]
    let box6 = boxElements[6]
    let box7 = boxElements[7]
    let box8 = boxElements[8]
    //check box's status so as not to override

     box0.onclick = boxSelection;
     box1.onclick = boxSelection;
     box2.onclick = boxSelection;
     box3.onclick = boxSelection;
     box4.onclick = boxSelection;
     box5.onclick = boxSelection;
     box6.onclick = boxSelection;
     box7.onclick = boxSelection;
     box8.onclick = boxSelection;

    function boxSelection(){

      if(section.classList.contains("unselectedBox")){
        checkPlayerAndSelectBox()
        player++
        console.log(player)
      }else{
        h2.innerHTML("Select a box that is not already in play")
      }
    }

    //porbably going to use a switch case here instead
    for(let i = 0; i < boxElements.length-1; i++){

    }

    function checkPlayerAndSelectBox(){
      //I have to add something here to specify the box # TO MAKE THIS FUNCTIONAL
      //selection by X (even)
      if(player % 2 == 0){
        boxElements.classlist.replace("unselectedBox", "selectedByX").add("selected")
      //selection by O (odd)
    }else{
        boxElements.classlist.replace("unselectedBox", "selectedByO").add("selected")
      }
      //box is not empty
      // boxElements.classlist.add("selectedBox")
    }



    function checkForWin(){
      if(combo1 || combo2 || combo3 || combo4 || combo5 || combo6 || combo7 || combo8){
        h2.innerHTML("Way to go doodley-dude, you've won the game!")
      }else{

      }

      let box0 = boxElements[0]
      let box1 = boxElements[1]
      let box2 = boxElements[2]
      let box3 = boxElements[3]
      let box4 = boxElements[4]
      let box5 = boxElements[5]
      let box6 = boxElements[6]
      let box7 = boxElements[7]
      let box8 = boxElements[8]

      // possible win combinations:
      // 1,2,3
      const combo1 = "boxElements[0].classList.contains('selected') && boxElements[1].classList.contains('selected') && boxElements[2].classList.contains('selected')"
      // 1,4,7
      const combo2 = "boxElements[0].classList.contains('selected') && boxElements[3].classList.contains('selected') && boxElements[6].classList.contains('selected')"
      // 1,5,9
      const combo3 = "boxElements[0].classList.contains('selected') && boxElements[4].classList.contains('selected') && boxElements[8].classList.contains('selected')"
      // 4,5,6
      const combo4 = "boxElements[3].classList.contains('selected') && boxElements[4].classList.contains('selected') && boxElements[5].classList.contains('selected')"
      // 2,5,8
      const combo5 = "boxElements[1].classList.contains('selected') && boxElements[4].classList.contains('selected') && boxElements[7].classList.contains('selected')"
      // 3,6,9
      const combo6 = "boxElements[2].classList.contains('selected') && boxElements[5].classList.contains('selected') && boxElements[8].classList.contains('selected')"
      // 7,8,9
      const combo7 = "boxElements[6].classList.contains('selected') && boxElements[7].classList.contains('selected') && boxElements[8].classList.contains('selected')"
      // 3,5,7
      const combo8 = "boxElements[2].classList.contains('selected') && boxElements[4].classList.contains('selected') && boxElements[6].classList.contains('selected')"

    }

    console.log(boxElements)

  });

});
