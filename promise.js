// example 1
new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('Promise runned!!')
    resolve()
  }, 2000);
}).then(function() {
    console.log('promise consumed!')
})
