const target = process.env.npm_lifecycle_event;
/*
	npm脚本自带两个顺序钩子，'pre' 和 'post'

	"predev":"node test_one.js",
	"dev":"node test_two.js",
	"postdev":"node test_three.js"
	当执行 npm run dev 的时候默认就会执行

	npm run predev && npm run dev && npm run postdev
 */ 
if(target === 'predev'){
  console.log('the process is predev')  
}
if(target === 'npm_lifecycle_event') {
	console.log('the process is npm_lifecycle_event')
}
if(target === 'dev'){
  console.log('the process is dev')
}
if(target === 'postdev'){
  console.log('this process is postdev')
}