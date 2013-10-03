//
// jade.jsとruntime.jsが圧縮されてエラーが出るので別途読み込み
//

(function(r,s) {

	function loadJS(src, callback) {
		var c = document.createElement('script');
		c.type = 'text/javascript';
		c.src = src;
		c.async = false;
		if (callback) {
			c.onload = function() {
				callback();
			};
		}
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(c, s);
	};
	// Chromeで擬似セレクタのセレクタ化が行われないので再度実行する
	loadJS('../js/previews.js');
	// Jadeをパースするためのライブラリ読み込み
	loadJS('../js/runtime.js');
	loadJS('../js/jade.js', function() {
		var body = document.querySelector('body');
		var tmpl = body.innerHTML;
		var html = jade.render(tmpl);
		body.innerHTML = html;
	});

}());
