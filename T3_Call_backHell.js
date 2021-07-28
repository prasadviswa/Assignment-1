cal = function(x,y){
  sum(x,y).then(result =>{
    console.log("sum: ",result);
  }).catch(err =>{
    console.log(err);
    console.log("func ended");
  })
}

sum = function(x,y){
  return new Promise(function(resolve,reject){
    if(x+y > 0)
    {
      resolve(x+y);
    }
    else
    {
      reject("Sum is less than Zero");
    }
  })
}

cal(-1,-2);