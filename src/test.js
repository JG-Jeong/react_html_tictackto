function hello(thing) {
  console.log(this + " says hello " + thing);
}

hello.call("Yehuda", "world"); //=> Yehuda says hello world
