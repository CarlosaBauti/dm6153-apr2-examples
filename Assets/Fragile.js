function MakeNewAsteroid() {
    var newAsteroid = Instantiate(gameObject, transform.position, transform.rotation);
    newAsteroid.transform.position.x += Random.Range(-3, 3);
    newAsteroid.transform.position.y += Random.Range(-3, 3);
    newAsteroid.transform.localScale.x *= 0.5;
    newAsteroid.transform.localScale.y *= 0.5;
    newAsteroid.GetComponent(CircleCollider2D).radius *= 0.5;
    newAsteroid.GetComponent(Rigidbody2D).AddForce(Vector2(Random.Range(-100, 100), Random.Range(-100, 100)));
}

function Break() {
  for (var i = 0; i < 3; i++) {
    MakeNewAsteroid();
  }
  
  Destroy(gameObject);
}