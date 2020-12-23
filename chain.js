
 class Chain{
     constructor(body1,body2,offSetX,offSetY){
     var option={
         bodyA:body1,
         bodyB:body2,
         pointB:{x:this.offSetX,y:this.offSetY},
         length:15,
         stiffness:0.07
     }
     this.Chain=Constraint.create(option)
     World.add(world,this.Chain)
     }
     display(){
     line(this.Chain.body1.position.x,this.Chain.body1.position.y,this.Chain.body2.pointB.position.x,this.Chain.body2.pointB.position.y)
     }
 }

 