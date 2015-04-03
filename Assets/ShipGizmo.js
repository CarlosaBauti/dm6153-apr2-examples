function OnDrawGizmos() {
  Gizmos.DrawRay(transform.position, transform.up);
  Gizmos.DrawLine(transform.position, transform.position + 0.2 * transform.right);
  Gizmos.DrawLine(transform.position, transform.position - 0.2 * transform.right);
}