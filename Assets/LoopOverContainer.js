function Start () {
  var container = GameObject.Find("Container");
  for(var subObject in container.transform) {
    Debug.Log(subObject.name);
  }
}

function Update () {

}