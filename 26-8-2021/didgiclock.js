function Clock() {

		setInterval(function(){
				var date = new Date();
				var hour= date.getHours();
				var mini=date.getMinutes();
				var sec = date.getSeconds();

				var time=`<h1>${hour}:${mini}:${sec}</h1>`
				console.log(time)

				document.getElementById("templete").innerHTML =time;
			},1000)
	
}
Clock();