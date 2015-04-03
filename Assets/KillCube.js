function OnCollisionEnter(other : Collision) {
  // Destroy(other.gameObject);
  other.gameObject.GetComponent(Killable).Kill();
}