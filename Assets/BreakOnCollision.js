function OnCollisionEnter2D(collision : Collision2D) {
  if(collision.gameObject.name == "Ship") {
    GetComponent(Fragile).Break();
  }
}