// Stream 是一个抽象接口，Node 中有很多对象实现了这个接口
// http的request response fs.createStream 都实现了stream接口
let users={
	"admin":"123",
	"user1":"321",
	"user2":"213"
};
let username="";
process.stdout.write("请输入用户名:");
process.stdin.on('data',(input)=>{
	input=input.toString().trim();
	if(!username){
		if(Object.keys(users).indexOf(input)===-1){
			process.stdout.write('用户名不存在'+'\n');
			process.stdout.write("请输入用户名:");
			username="";
		}
		else 
		{
			process.stdout.write("请输入密码:");
			process.stdout.pipe(process.stdout.pipe(process.stdout));
			username=input;
		}
	}
	//输入密码
	else{
		if(input===users[username]){
			console.log("登陆成功");
		}
		else{
			process.stdout.write("请输入密码"+"\n");
		}
		
	}
});
process.stdin.on('data', (data) => {
	// process.stdout.write('end');
	console.log(data.toString('utf-8'))
});
process.stdin.on('end', () => {
  process.stdout.write('end');
});
process.stdin.on('exit', () => {
	process.stdout.write('exit');
});
