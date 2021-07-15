export {
 find
}

const students = [
 {name: "Alex", present: true, _id: 12},
 {name: "Chelsea", present: false, _id:13},
 {name: "Zach", present: true, _id:14}
]

const find = (conditions, callback) => {
 // see if this works, if not, execute the code in the catch block
 try {
   // make sure that conditions is an object - if not throw a TypeError
   if (!(conditions instanceof Object)){
     throw new TypeError('Please pass in an object')
   }
   // If the object is empty, return all the todos
   if (Object.keys(conditions).length === 0) return callback(null, students)
// deal with errors
 } catch (err) {
   console.log(err)
   callback(err, [])
 }
}