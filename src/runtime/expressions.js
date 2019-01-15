var ls;
(function (ls) {
	ls.newScene1 = function() {
		return {
			"%22MainScene%22": function() { return "MainScene" }
		}
	};
	ls.MainScene = function() {
		return {
			"%22tween%22": function() { return "tween" },
			"%22quadOut%22": function() { return "quadOut" },
			"null": function() { return null },
			"Math.random()*2%2B3": function() { return Math.random()*2+3 },
			"%22mark%22": function() { return "mark" },
			"%22MainScene%22": function() { return "MainScene" },
			"AISprite1570": function() { return AISprite1570 },
			"%22equalTo%22": function() { return "equalTo" },
			"%22quadIn%22": function() { return "quadIn" },
			"fen.mark": function() { return fen.mark },
			"%22GAMEOVER%22": function() { return "GAMEOVER" }
		}
	};
})(ls || (ls = {}));