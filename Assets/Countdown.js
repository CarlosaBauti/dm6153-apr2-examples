var time : float;

function Update () {
  time -= Time.deltaTime;
  if(time <= 0) {
    // Destroy(GameObject.Find("Cube"));
    GameObject.Find("Cube").GetComponent(Killable).Kill();
  }
}