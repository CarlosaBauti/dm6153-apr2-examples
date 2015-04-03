var flightSpeed : float;
var turningSpeed : float;

function Thrust() {
  transform.position += transform.up * flightSpeed * Time.deltaTime;
}

function Turn(amount : float) {
  transform.Rotate(0, 0, turningSpeed * amount);
}