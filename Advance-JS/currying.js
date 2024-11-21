function add(a){
  return  function add(b) {
      return  function add(c){
         return  function add(d) {
             return a - b - c - d;
           }
        }
    }
}
const res=add('1')('2')(1)(1)
console.log(res);

