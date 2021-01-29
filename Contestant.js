class Contestant {
    constructor(){
  
      this.index = null
      this.distance = 0
      this.name = null
      
      this.input = createInput("Name");
      this.submit = createButton('Play')
      this.submit = createElement('h3')
    }

    display(){

      var title = createElement('h2')
    title.html("MyQuiz game");
    title.position(130, 0);
    
   
    
    this.input.position(130, 160);
    this.button.position(250, 200);

      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.button.hide();
   
         contestant.name = this.input1.value();
         contestantCount+=1;

         
         contestant.index = playerCount
         contestant.update()
         contestant.updateCount(playerCount);
       
         
       });
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      console.log(contestantIndex)
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
  
  
      });
    }
  
    static getcontestantInfo(){
      var contestantInforef = database.ref("contestants")
      contestantInforef.on('value',(data)=>{
        allcontestants = data.val()
      })
    }
  }
  