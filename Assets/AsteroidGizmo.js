function OnDrawGizmos() {
  Gizmos.DrawWireSphere(transform.position, GetComponent(CircleCollider2D).radius);
}