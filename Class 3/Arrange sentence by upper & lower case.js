const alphabet = (a) =>{
  if(  a =='a' || a=='b' || a == 'c' || a =='d' || a=='e' || a == 'f' || a =='g' || a=='h' || a == 'i' || a =='j' || a=='k' || a == 'l' || a =='m' || a=='n' || a=='o' || a =='p' || a=='q' || a == 'r' || a =='s' || a=='t' || a == 'u' || a =='v' || a=='w' || a == 'x' || a =='y' || a == 'z' || a =='A' || a=='B' || a == 'C' || a =='D' || a=='E' || a == 'F' || a =='G' || a=='H' || a == 'I' || a =='J' || a=='K' || a == 'L' || a=='M' || a=='N' || a=='O' || a =='P' || a=='Q' || a == 'R' || a =='S' || a=='T' || a == 'U' || a =='V' || a=='W' || a == 'X' || a =='Y' || a == 'Z')
   return true
   else
   return false 
}
const stop = (st) => {
  if( st=='.' || st=='?' || st=='!' || st==';')
    return true
   else
    return false
}

let n,i=0,len,copystr="";
const fastupper = (str) => {
  n = str.length
  for(i=0;i<n;i++){
    if(i==0)
      copystr += str[i].toUpperCase()
    else if("<" ==str[i]){
      copystr += str[i] = " "
      copystr += str[i+1].toUpperCase()
      i=i+1
    }
    else if(stop(str[i]) && alphabet(str[i+1]) ){
      copystr += str[i]+' '
      copystr += str[i+1].toUpperCase()
      i=i+1
    }
    else if(stop(str[i]) && " " == str[i+1]){
      copystr += str[i]+" "
      copystr += str[i+2].toUpperCase()
      i=i+2
    }
    else if( str[i-1]==' ' && str[i]=='i' && str[i+1]==' '){
      copystr += 'I'
    }
    else
      copystr += str[i].toLowerCase()
  }
}
fastupper('hElLo <sUSAnta <sAmAnta. weLcome tO our weBsiTe. thankS for visiting ouR WebSite.wE always Help yoU.aRe yOU iN interasTed? then contact us.pErsOnALly i alwAYs HeLp yOu To soLve yOuR Problems.')
console.log(copystr)

