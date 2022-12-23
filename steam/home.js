let htmlBody = document.querySelector('body')

// GameBanner
let BannerImg = document.getElementById('game-image-banner')
let BannerLogo = document.getElementById('game-logo-banner')

let gSelector = document.querySelectorAll('.gSelector')
let lgSelector = document.querySelectorAll('.lgSelector')

let gbName = "g"
let gbNum = 0
let gbLink = null


let gL = null
let gR = null

let lgbName = "sel"
let lgbNum = 0
let lgL = null
let lgR = null

window.onkeydown = (e) => {
	let key = e.code;
	console.log(key)

	if(key == "ArrowRight") {
		gameSound("./button.mp3")

		if(gbNum < gSelector.length)
	 		gbNum++;

	 	gL = lgL.querySelector("#"+gbName+gbNum)
		gR = lgL.querySelector("#"+gbName+(gbNum-1))

		setTimeout(()=>{
			addFocus(gL)
			removeFocus(gR)

			bannerUpdate(gL.dataset.bImg, gL.dataset.bLogo, "block")

			scrollSelectorGame()
		}, 120)
	}
	if(key == "ArrowLeft") {
		if(gbNum > 0)
	 		gbNum--;

	 	gL = lgL.querySelector("#"+gbName+gbNum)
		gR = lgL.querySelector("#"+gbName+(gbNum+1))
		
		setTimeout(()=>{
			addFocus(gL)
			removeFocus(gR)

			if(gL !== null)
				bannerUpdate(gL.dataset.bImg, gL.dataset.bLogo, "block")

			if(gbNum == 0)
				bannerUpdate("https://www.spawnpoiint.com/wp-content/uploads/Wallpaper-Blue-Icons-PS4-1920x1080.png", "none", "none")

			scrollSelectorGame()
		}, 120)
		gameSound("./button.mp3")
	}
	if(key == "Escape") {
		nameH('Home')
		gameSound("./back.mp3")
		setTimeout(function() {
			gbNum = 0
			bannerUpdate("https://www.spawnpoiint.com/wp-content/uploads/Wallpaper-Blue-Icons-PS4-1920x1080.png", "none", "none")
			
			scrollSelectorGame()

			gSelector.forEach(function(e) {
	 			removeFocus(e)
	 		})
		}, 300)
	}

	if(key == "ArrowDown") {

		gameSound("./button.mp3")

		if(lgbNum < lgSelector.length)
	 		lgbNum++;

	 	lgL = document.getElementById(lgbName+lgbNum)
		lgR = document.getElementById(lgbName+(lgbNum-1))
		var positions = elementPosition(lgL);
		let go = positions.clientY-150
		if(lgbNum == 1)
			go = 0

		if(lgL !== null) {
		 	lgL.classList.add('focus')
		 	lgL.style.transform = "scale(.9) "
		 	document.getElementById('content-lists').style.transform = "translateY(-"+(go)+"px)"
			nameH(lgL.dataset.name)
		}

		if(lgR !== null) {
		 	lgR.classList.remove('focus')
		 	lgR.style.transform = "scale(.8)"
		}
	}

	if(key == "ArrowUp") {
		gameSound("./button.mp3")

		if(lgbNum > 0)
	 		lgbNum--;

	 	lgL = document.getElementById(lgbName+lgbNum)
		lgR = document.getElementById(lgbName+(lgbNum+1))
		var positions = elementPosition(lgL);
		let go = positions.clientY-150
		if(lgbNum == 1)
			go = 0

		if(lgL !== null) {
		 	lgL.classList.add('focus')
		 	lgL.style.transform = "scale(.9) "
		 	document.getElementById('content-lists').style.transform = "translateY(-"+(go)+"px)"
			nameH(lgL.dataset.name)
		}

		if(lgR !== null) {
		 	lgR.classList.remove('focus')
		 	lgR.style.transform = "scale(.8)"
		}
		console.log(positions.viewportY)
	}
}


/* TIMEStemp */
setInterval('showDate()',1000)

// function
function showDate() {
	var date = new Date()
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	if( h < 10 ){ h = '0' + h; }
	if( m < 10 ){ m = '0' + m; }
	var time = h + ':' + m
	document.getElementById('horloge').innerHTML = time;
}

function bannerUpdate(bIMG, bLOGO, bDISPLAY) {
	BannerImg.style.backgroundImage = "url("+bIMG+")" //; console.log(gL.dataset.bImg)
	BannerLogo.src = bLOGO //; console.log(gL.dataset.bImg)
	BannerLogo.style.display = bDISPLAY
}

function addFocus(jo) {
	if(jo !== null) {
		jo.focus()
	 	jo.classList.add('focus')
	}
}

function removeFocus(jo) {
	window.focus()
	if(jo !== null)
 		jo.classList.remove('focus')
}

function scrollSelectorGame() {
	let bb = 20
 	if(gbNum > 1)
 		bb = -((98*(gbNum-1))-20)

 		//if(gNum > 1) {
 	lgL.style.transform = "translateX("+bb+"px)"
 		//}

 	if(gbNum == 0) {
 		lgL.style.transform = "scale(.8)"
 		body.classList.add('home')
 	}
 	else {
 		body.classList.remove('home')
 	}
}

function gameSound(soundLink = "./button.mp3") {
	var myAudio = document.createElement("audio");
 	myAudio.src = soundLink;
 	myAudio.play();
 	myAudio.addEventListener('ended', function () {
	 	myAudio.remove()
	})
}

function nameH(str) {
	document.getElementById('name-liste').textContent = str
}







function elementPosition (a) {
  var b = a.getBoundingClientRect();
  return {
    clientX: a.offsetLeft,
    clientY: a.offsetTop,
    viewportX: (b.x || b.left),
    viewportY: (b.y || b.top)
  }
}












let videoPlayer = document.getElementById('video-player-banner')
let body = document.querySelector('body')

if(videoPlayer !== null) {
	int()
	videoPlayer.addEventListener('play', function () {
		//videoPlayer.classList.add('play')
		body.classList.add('play')
	})

	videoPlayer.addEventListener('ended', function () {
		body.classList.remove('play')

		int(30000)
	})

	function int(a = 0) {
		setTimeout(function() {
			videoPlayer.play()
		}, a)
	}
}