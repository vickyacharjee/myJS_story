

   

     
       //IFFE function with basics 

        function vic() {
            console.log("heyyy World");
        }

        vic();




     //Now invoke is done in IIFE

        (function vic(){
            console.log("hey 2 world");
        })();




        //Now invoke is done along arrow function



        (()=>  {
            console.log("Yoo ");
        })();


        //arrow func()

       const vic4= ()=>{
            console.log("vic");
        }

        console.log(vic());
