//引入模块
var fs=require('fs');
var newColor=process.argv[2];
//console.log(newColor);
//小文件拷贝
//先读取文件夹内容
fs.readFile('css/style.css',{encoding:'utf-8'},function(err,data){
	if(err){
		throw err;
	}
	//console.log(data)
	//截取到颜色
	var outColor=data.split(":")[1].split(';')[0];
	//console.log(outColor);
	//写入(替换)颜色(用同步，用异步必须要有回调函数，否则不规范)
	fs.writeFileSync('css/style.css',data.replace(outColor,newColor));
})