const fun = (id,nextData) => {
  setTimeout(()=>{
    console.log("this is: "+id);
    if(nextData)
      nextData();
  },2000);
}
fun(1,()=>{    /// fun(1,fun(2)) 🚫 so 👇
  fun(2,()=>{
    fun(3,()=>{
      fun(5)
    });
  });
});







/// code explenation on youtube channel : Shradha Khapra - lecture 12 Promice acync await
