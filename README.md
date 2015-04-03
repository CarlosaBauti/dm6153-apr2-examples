Examples from April 2 Class
===========================

### CubeEscape
This scene demonstrates multiple parts of a game triggering the same action, in this case killing the player. The code originally just destroyed the gameobject, but we found this to be *redundant* and *low level*, making it difficult to expand on down the line.

By moving the kill code into its own function in a component, we created a single place where we can make updates or edits, and are now coding in terms of the game, not Unity's functions.

### Chessish
This scene implements its coordinate system in terms of the game board. The `BoardPosition` component converts between 2D, integer board positions (the *high level* position, in terms of the *game*) and positions in 3D space (the *low level* positions, in terms of *Unity*).

### Asteroids
This scene was prototyped using gizmos and art was later added. I made an effort to separate the *input logic* (found in `ShipKeyboardControls`, `BreakOnCollision`), the *output logic* (found in `AsteroidGizmo`, `ShipGizmo`, and the Art GameObjects with sprites), and the *game logic* (found in `ShipEngine`, `Fragile`).

The input and output logic are written in terms of Unity's semantics, and the game logic is written using Unity's transform and collider components. We decided in this case that using Unity's functionality to implement our game logic made sense. We still defined a clear boundary between our game logic and the 'outside world' (the `Break`, `Thrust`, and `Turn` functions).
