function getdata(dataId,getNextId){
  //2sec
  setTimeout(()=>{
    console.log("data",dataId);
    if(getNextId){
      getNextId();
    }
  },2000);
}

//callback hell

getdata(1,()=>{
  console.log("getting....2");
  getdata(2,()=>{
    console.log("getting...3");
    getdata(3,()=>{
      console.log("getting...4");
      getdata(4);
    });
  });
});