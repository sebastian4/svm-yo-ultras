
console.log "one.cofee"

# Assignment:
number   = 42

number20= 22

opposite = true

# Conditions:
number = -42 if opposite

square = (x) -> x * x
cube   = (x) -> square(x) * x

console.log cube(4)

for i in [0..2]
    console.log "Hello #{i}"

class Animal
  price: 5
  sell: =>
    console.log "Give me #{@price} shillings!"

animal = new Animal

$("#sell-animal").click animal.sell
