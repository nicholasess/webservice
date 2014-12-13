var _ = require('lodash');
exports.login = function(req, res){
	var matricula = req.body.matricula || req.params.matricula || req.query.matricula || "";
	var senha = req.body.senha || req.params.senha || req.query.senha || "";

	if(matricula == "" || senha == "")
		return res.status(401).send({});

	var user = {};

	user.matricula = parseInt(matricula);
	user.senha = parseInt(senha);																																																								

	var teste = _.filter(users, user);

	if(teste.length > 0){
		return res.status(200).send(teste[0]);	
	}else{
		return res.status(401).send();
	}
}

exports.comu = function(req, res){
	return res.status(401).send();
}

var users = [{
	"matricula": 12345,
	"senha": 12345,
	"comunidades":[
	{
		"id": 0,
		"name": "Qualidade de Software",
		"descricao":"Essa matéria visa as práticas para criar um software com qualidade e dentro das normas"
	},{
		"id": 1,
		"name": "Programação de Sistemas de Distribuidos II",
		"descricao": "Essa matéria visa as práticas para criar um software com qualidade e dentro das normas"
	},{
		"id": 2,
		"name": "Sistemas Distribuidos II",
		"descricao": "Essa matéria visa as práticas para criar um software com qualidade e dentro das normas"
	},{
		"id": 3,
		"name": "Avaliação de Software II",
		"descricao": "Essa matéria visa as práticas para criar um software com qualidade e dentro das normas"
	},{
		"id": 4,
		"name": "Inteligência Artificial II",
		"descricao": "Essa matéria visa as práticas para criar um software com qualidade e dentro das normas"
	}],
	"notas": [
	{"id": 0,"name":"Qualidade de Software", "nota": 5, "falta": 10, "exame": "", "notaExame": 0 },
	{"id": 1,"name":"Programação de Sistemas de Distribuidos II", "nota": 5, "falta": 10, "exame": "","notaExame": 0},
	{"id": 2,"name":"Sistemas Distribuidos II", "nota": 5, "falta": 10, "exame": "", "notaExame": 0},
	{"id": 3,"name":"Avaliação de Software II",	"nota": 5,"falta":10,"exame": "","notaExame": 0 },
	{"id": 4,"name": "Inteligência Artificial II","nota": 5,"falta": 10,"exame": "","notaExame": 0}]
}]