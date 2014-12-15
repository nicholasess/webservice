var users = require('./result');

exports.login = function(req, res){
	var matricula = req.body.matricula || req.params.matricula || req.query.matricula || "";
	var senha = req.body.senha || req.params.senha || req.query.senha || "";

	if(matricula == "" || senha == "")
		return res.status(401).send({});

	var user = {};

	user.matricula = parseInt(matricula);
	user.senha = parseInt(senha);																																																								

	for (var i = 0; i <= users.length-1; i++) {
		if(users[i].matricula == user.matricula && users[i].senha == user.senha){
			return res.status(200).send(users[0]);		
		}
	};

	return res.status(401).send();
}
