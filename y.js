

const promisify = fn => (...args) => new Promise((resolve,reject) => {
	fn(...args, (err,value) => {
		if(err) return reject(err)
		resolve(value)		
	})
})



const doThis = (data,callback) => {
	setTimeout(() => {
		try{
			callback(null,data)
		}
		catch(err){
			callback(err,null)
		}
	},2000)
}

const a = promisify(doThis)

a('it is finally working')
.then(data => console.log(`${data} !!!`))