class BoardMember {

  constructor(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
  }

  veto(){
    return "No, I must disagree"
  }

  approve(){
    return "You can do that!"
  }

  doCharity(){
    return "I like to help people."
  }

  releasePressStatement(){
    return "You will see great things from Scuber."
  }

  sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}

/*
Like BoardMember: can create a ceo with a name, home state, and training
Like BoardMember: inherits the sayHello method from the BoardMember class 
Unlike BoardMember: adds a method hireEmployee that is not available on the board member
*/

class Ceo extends BoardMember {
  hireEmployee(){
    return 'Welcome aboard!'
  }
}
