var ls;
(function (ls) {
	ls.newScene1 = function() {
		return {
			"%22MainScene%22": function() { return "MainScene" }
		}
	};
	ls.MainScene = function() {
		return {
			"Math.random()*2%2B3": function() { return Math.random()*2+3 },
			"fen.mark": function() { return fen.mark },
			"null": function() { return null },
			"%22quadOut%22": function() { return "quadOut" },
			"%22GAMEOVER%22": function() { return "GAMEOVER" },
			"%22MainScene%22": function() { return "MainScene" },
			"AISprite1570": function() { return AISprite1570 },
			"%22equalTo%22": function() { return "equalTo" },
			"%22mark%22": function() { return "mark" },
			"%22tween%22": function() { return "tween" },
			"%22quadIn%22": function() { return "quadIn" }
		}
	};
})(ls || (ls = {}));