//
// jade.jsとruntime.jsが圧縮されてエラーが出るので別途読み込み
//

(function(r,s) {

	r = document.createElement('script');
	r.type = 'text/javascript';
	r.src = '../js/runtime.js';
	r.async = false;
	s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(r, s);

	r = document.createElement('script');
	r.type = 'text/javascript';
	r.src = '../js/jade.js';
	r.async = false;
	r.onload = function() {
		var body = document.querySelector('body');
		var tmpl = body.innerHTML;
		var html = jade.render(tmpl);
		body.innerHTML = html;
	};
	s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(r, s);

}());
