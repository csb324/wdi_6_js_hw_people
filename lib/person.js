var Person = function(firstName, lastName, weight, height, friends) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.weight_kg = weight || 80;
  this.height_cm = height || ((Math.rand() * 50) + 150);
  this.friends = friends || [];
};

Person.prototype = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  weightInStone: function() {
    return this.weight_kg * 0.157473;
  },
  addFriend: function(newfriend) {
    this.friends.push(newfriend);
  },
  removeFriend: function(name) {
    this.friends = this.friends.filter(function(friend) {
      return friend.name !== name;
    });
  },
  greetPeople: function(people, greeting) {
    people = people || this.friends;
    greeting = greeting || "Hi";
    if(people.length === 0) {
      throw new Error("Greet somebody!! You have no friends!!");
    }
    greetings = [];
    people.forEach(function(person) {
      greetings.push(greeting + " " + person.fullName());
    });
    return greetings;
  }
};

// * `greetPeople` should return a string that greets an optional array
// of `Person` objects (default to the person's friends) by their full
// names, with an optional greeting (default to `"Hi"`). If no people
// are provided and the person has no friends, the function should throw
// an error.
