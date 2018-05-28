#pragma strict

var pontos : int;
var pontuacao : TextMesh ;

function Start () {
	pontos = 0;
}

function Update () {
	pontuacao.text = "Pontos: " + pontos;
}

function OnCollisionEnter (_other : Collision){
	
	if (_other.gameObject.tag == "GreenBouncer"){
		pontos = pontos + 100;
	}else if (_other.gameObject.tag == "YellowBouncer"){
		pontos = pontos + 50;
	}else if (_other.gameObject.tag == "RedBouncer"){
		pontos = pontos + 20;
	}else if (_other.gameObject.tag == "GreenBouncerP"){
		pontos = pontos + 10;
	}else if (_other.gameObject.tag == "YellowBouncerP"){
		pontos = pontos + 5;
	}else if (_other.gameObject.tag == "RedBouncerP"){
		pontos = pontos + 2;
	}else if (_other.gameObject.tag == "FitBouncer"){
		pontos = pontos + 15;
	}else if (_other.gameObject.tag == "MiddlePassage"){
		pontos = pontos + 1000;
	}else if (_other.gameObject.tag == "RotateObj"){
		pontos = pontos + 1;
	}else if (_other.gameObject.tag == "OutOfTable"){
		pontos = 0;
	}	
}