const names = ["John", "Alice", "Bob", "Andrew", "Bbaby", "mpon"];

const result = names.filter(function (name) {
  return name.startsWith("B");
});

console.log(result);
