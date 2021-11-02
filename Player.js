class Player{

constructor(){
        this.access1 = createInput("what is your name?")
        this.access1.position(100,90);
        this.access1.style('background', 'black');  

        this.button1 = createButton('play');
        this.button1.position(100,120);
        this.button1.style('background', 'red');    

        this.access2 = createInput("what is your age?")
        this.access2.position(700,190);
        this.access2.style('background', 'black');  

}
Display(){
this.button1.mousePressed(() => {
 if(system.authenticate(accessCode1,this.access1.value())){
  this.button1.hide();
 this.access1.hide();
 this.access2.hide();
  }
});
}
}







