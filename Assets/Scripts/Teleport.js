
var target : Transform;
var target1 : Transform;

function Update () {

}

function OnTriggerEnter (col : Collider) {

	if(col.gameObject.tag == "teleport") {
		this.transform.position = target.position;
	}
	
}

function OnTriggerEnter1 (col : Collider) {
	
	if(col.gameObject.tag == "teleport1"); {
		this.transform.position = target1.position;
	}
}

