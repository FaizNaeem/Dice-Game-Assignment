const  change = () =>{
    let random = Math.round(Math.random()*5)
    console.log(random)
  let get =  document.getElementById('pics');
  let arr =["./1.png","./2.png","./3.png","./4.png","./5.png","./6.png"]
  get.src=arr[random]
// if(random==1){
//  get.src='./1.png';

// }
// else if(random==2){
//     get.src='./2.png';
   
//    }
//    else if(random==3){
//     get.src='./3.png';
   
//    }
//    else if(random==4){
//     get.src='./5.png';
   
//    }
//    else if(random==5){
//     get.src='./4.png';
   
//    }
//    else if(random==6){
//     get.src='./6.png';
   
//    }
}