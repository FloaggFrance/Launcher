<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
<?php
$de = file_get_contents("./array-game.json");
$gameList = json_decode($de, true);
?>
<!DOCTYPE html>
<html>
<head>
	<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link rel="stylesheet" type="text/css" href="./main.css">
</head>
<body class="home">
	<span class="background">
		<video id="video-player-banner" src="./videoplayback.mp4" loop></video>
		<!-- <img id="game-logo-banner" class="logo" src=""> -->
		<span class="wallpaper" id="game-image-banner"></span>
	</span>
	<span class="grader"></span>
	<header>
		<div class="user-info">
			<div class="name-window">
				<h1 id="name-liste">Menu</h1>
			</div>
		</div>
		<div class="date-time">
			<h1 class="time" id="horloge">21 : 34</h1>
		</div>
	</header>
	<main id="content-lists">
		<?php foreach($gameList as $k => $val) { ?>
		<div class="select lgSelector laucnh-type-<?= $val['launch_type'] ?>" id="sel<?= $k+1 ?>" data-name="<?= $val['name'] ?>">
			<!-- games liste -->
			<ul>
				<?php foreach($val['data'] as $k => $v) { ?>
				<li>
					<a data-game="<?= $v['game'] ?>" tabindex="-1" id="g<?= $k+1 ?>" class="gSelector" data-b-img="<?= $v['banner'] ?>" data-b-logo="<?= $v['logo'] ?>" data-b-sound="sound/minecraft.mp3">
						<article>
							<div class="media">
								<img src="<?= $v['min'] ?>">
							</div>
							<div class="name-game">
								<h2><?= $v['name'] ?></h2>
							</div>
						</article>
					</a>
				</li>
				<?php } ?>
			</ul>
			<!-- games liste -->
		</div>
		<?php } ?>
	</main>
	<main id="shutdown">
		<h1>Mis en veille</h1>
	</main>
	<script src="./home.js?id=<?= rand(1, 180) ?>"></script>
</body>
</html>