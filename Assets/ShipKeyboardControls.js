function Update () {
  if(Input.GetButton("Thrust")) {
    GetComponent(ShipEngine).Thrust();
  }
  
  GetComponent(ShipEngine).Turn(Input.GetAxis("Horizontal"));
}