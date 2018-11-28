fetch('/', {
	method: 'POST',
	body: JSON.stringify({name: '2', age: 22}),
	headers: new Headers({
      'Content-Type': 'application/json' // 指定提交方式为表单提交
    }),
})
.then(res => {
	res.json().then(re => {console.log(re)});
})