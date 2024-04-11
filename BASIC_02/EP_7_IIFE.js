

   

     
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


        // IIFE passed somethin in parameter
        (function call(name) {
           console.log('Hi there IIFE with parameter called ',name);   
        })('DB Connected')