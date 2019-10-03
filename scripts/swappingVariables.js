function swapLastNames() {
  let person1 = {
    person1name1: "John",
    person1name2: "Doe",
  }
  let person2 = {
    person2name1: "Jane",
    person2name2: "Smith",
  }
  console.log(person1,person2,)
  console.log("swap 'em!")
  placeHolder = person1[1];
  person1[1] = person2[1];
  person2[1] = placeHolder;
  console.log(person1,person2,)
}

swapLastNames();
