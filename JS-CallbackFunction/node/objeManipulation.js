let obj = {
  name: 'Ali',
  age: 17,
  isStudent: true
};

// Ana objeye dokunmadan yeni bir obje oluşturarak bilgileri kopyalar.
console.log({...obj, name: 'Burak'});
console.log(obj);
console.log({...obj, name: 'Kürşad', surname: 'KARAGOZ'});
console.log('-----')
// Ana objeyi değiştirmek isteseydik:
// constant değil let durumunda yapılabilir.
// obje let türünde olduğunda değiştireblir.
console.log(obj);
obj = {...obj, age:18};
console.log(obj);
console.log('----');

const updateObjects = (obj, key, value, callback) =>{
  const result = {...obj, [key]: value};
  callback(result);
};

updateObjects(obj,'name','Hasan',(result) => {
  console.log(result);
});

updateObjects(obj,'age',22,(result) => {
  console.log(result);
});
 
