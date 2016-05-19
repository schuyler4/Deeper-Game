	var canvas = document.getElementById("canvas");
	var rockPlaceX = 100;
	var rockPlaceY = 500;
	var ctx = canvas.getContext("2d");
	var playerX = 290;
	var playerY = 70;
	var startTrue = false;
	var tree = false;
	var two = false;
	var one = false;
	var go = false;	
	var timeStay = 0;
	var goTrue = false;
	var groundY = 100;
	var groundHeight = 300;
	var grassY = 90;
	var startY = 30;
	var shootX = playerX + 3;
	var shootY = playerY + 50;
	var shootTrue = false;
	var rock1X = 0;
	var rock2X = 100;
	var rock3X = 200;
	var rock4X = 400;
	var rock5X = 500;
	var rockSize1X = Math.floor(Math.random() * 200);
	var rockSize1Y = rockSize1X;
	var rockSize2X = Math.floor(Math.random() * 200);
	var rockSize2Y = rockSize2X;
	var rockSize3X = Math.floor(Math.random() * 200);
	var rockSize3Y = rockSize3X;
	var rockSize4X = Math.floor(Math.random() * 200);
	var rockSize4Y = rockSize4X;
	var rockSize5X = Math.floor(Math.random() * 200);
	var rockSize5Y = rockSize5X;
	var rock1Y = 400 - rockSize1X;
	var rock2Y = 400 - rockSize2X;
	var rock3Y = 400 - rockSize3X;
	var rock4Y = 400 - rockSize4X;
	var rock5Y = 400 - rockSize5X;
	var score = 0;
	document.addEventListener("keydown", KeyDownHandler, false);
	function KeyDownHandler(e){
			if(goTrue == false && e.keyCode == 40){
				startTrue = true;
			}
			if(goTrue == true && e.keyCode == 39 && playerX < 590){
				playerX += 10
				shootX += 10
			}
			if(goTrue == true && e.keyCode == 37 && playerX > 0){
				playerX -= 10
				shootX -= 10
			}
			if(goTrue == true && e.keyCode == 32){
				shootTrue = true;
			}
	}	
	function drawRocks(){
		ctx.beginPath();
		ctx.rect(rock1X,rock1Y,rockSize1X,rockSize1Y);
		ctx.rect(rock2X,rock2Y,rockSize2X,rockSize2Y);
		ctx.rect(rock3X,rock3Y,rockSize3X,rockSize3Y);
		ctx.rect(rock4X,rock4Y,rockSize4X,rockSize4Y);
		ctx.rect(rock5X,rock5Y,rockSize5X,rockSize5Y);
		ctx.fillStyle = "gray";
		ctx.fill()
		ctx.closePath();
		if(shootY == rock1Y){
			rockSize1X -= 30
			rockSize1Y -= 30
		}
		if(shootY == rock2Y){
			rockSize2X -= 30
			rockSize2Y -= 30
		}
		if(shootY == rock3Y){
			rockSize3X -= 30
			rockSize3Y -= 30
		}
		if(shootY == rock4Y){
			rockSize4X -= 30
			rockSize4Y -= 30
		}
		if(shootY == rock5Y){
			rockSize5X -= 30
			rockSize5Y -= 30
		}
		if(rock1Y<-10){
			rock1Y = 400 - rockSize1X;
			rockSize1X = Math.floor(Math.random() * 200);
			rockSize1Y = rockSize1X;
		}	
		if(rock2Y<0){
			rock2Y = 400 - rockSize2X;
			rockSize2X = Math.floor(Math.random() * 200);
			rockSize2Y = rockSize2X;
		}
		if(rock3Y<0){
			rock3Y = 400 - rockSize3X;
			rockSize3X = Math.floor(Math.random() * 200);
			rockSize3Y = rockSize3X;
		}
		if(rock4Y<0){
			rock4Y = 400 - rockSize4X;
			rockSize4X = Math.floor(Math.random() * 200);
			rockSize4Y = rockSize4X;
		}
		if(rock5Y<0){
			rock5Y = 400 - rockSize5X;
			rockSize5X = Math.floor(Math.random() * 200);
			rockSize5Y - rockSize5X;
			score += 1
		}
		rock1Y -= 1
		rock2Y -= 1
		rock3Y -= 1
		rock4Y -= 1
		rock5Y -= 1
	}	
	function drawBackground(){
		ctx.beginPath();
		ctx.rect(0,groundY,600,groundHeight);
		ctx.fillStyle = "#A0522D";
		ctx.fill()
		ctx.closePath()
		ctx.beginPath()
		ctx.rect(0,grassY,600,10);
		ctx.fillStyle = "green";
		ctx.fill()
		ctx.closePath();
		ctx.beginPath()
		ctx.fillStyle = "black";
		ctx.fill()
		ctx.font = "30px Arial";
		ctx.fillText("Press Down to Begin",150,startY)
		ctx.fillText(score,10,30);
		ctx.closePath();	
	}
	function drawPlayer(){
		ctx.beginPath();
		ctx.rect(playerX,playerY,10,20)
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
	function shoot(){
		ctx.beginPath();
		ctx.rect(shootX,shootY,5,10);
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.closePath();
	}
	function draw(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBackground();
		drawPlayer();
		if(startTrue == true){
			playerY += 1
		}
		if(playerY == 100){
			startTrue = false;
			startY += 100000;
			timeStay += 1
			ctx.font = "40px Arial";
			if(timeStay < 100){
				ctx.beginPath();
				ctx.fillStyle = "black";
				ctx.fill();
				three = ctx.fillText("3",280,160);
				ctx.closePath();
			}else{
				three = false;
			}	
			if(timeStay < 200 && timeStay > 100){
				ctx.beginPath();
				ctx.fillStyle = "black";
				ctx.fill();
				two = ctx.fillText("2",280,160);
				ctx.closePath();
			}else{
				two = false;
			}
			if(timeStay < 300 && timeStay > 200){
				ctx.beginPath();
				ctx.fillStyle = "black";
				ctx.fill();
				one = ctx.fillText("1",280,160);
				ctx.closePath();
			}else{
				one = false;
			}
			if(timeStay < 400 && timeStay > 300){
				ctx.beginPath();
				ctx.fillStyle = "black";
				ctx.fill();
				go = ctx.fillText("Go!!",280,160);
				ctx.closePath();
			}else{
				go = false;
				goTrue = true;
			}
		}
		if(goTrue == true){
			if(groundHeight != 600){
				groundHeight += 1
			}
			if(groundY != 0){
				groundY -= 1	
				grassY -= 1
			}
			if(shootTrue == true){
				shooting = shoot()
				shootY += 10
			}
			if(shootY > 400){
				shootTrue = false;
				shooting = false;
				shootY = playerY + 50;
				shoot()
			}
			drawRocks()
		}
	}
	setInterval(draw,10);
