let num = 'Susanta'

switch (num) {
  case ('Susanta') : 
    console.log('MCA')
    break   //if break not used then below case are run
  case 'Suman' : 
    console.log('Class 8')
    break
  default :  // if above case are not matching it run
    console.log('Invalid choice')
}


num = 2

switch (num) {
  case (1) : 
    console.log('MCA')
    break   //if break not used then below case are run
  case 2 : 
    console.log('Class 8')
    break
  default :  // if above case are not matching it run
    console.log('Invalid choice')
}
