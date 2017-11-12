const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const driversUpdate = [...drivers, name]
  return driversUpdate
}

function prependDriver(name) {
  const driversUpdate2 = [name, ...drivers];
  return driversUpdate2;
}

function removeLastDriver() {
  const driversUpdate3 = drivers.slice(0, drivers.length-1)
  return driversUpdate3;
}

function removeFirstDriver() {
  const driversUpdate4 = drivers.slice(1);
  return driversUpdate4;
}
