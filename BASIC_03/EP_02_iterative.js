
        for (let i = 1; i <=10; i++) {
            // console.log(`This is for table number ${i}`);
            for (let j = 1; j <= 10; j++) {
                // console.log(i+"X"+j+"="+i*j);
            }
        }


        //Ex
        for (let i = 1; i <= 10; i++) { 
            for (let j = 1; j <=10; j++) {           
                // console.log(i+"X"+j+"="+i*j);
            }          
        }

        for (let i = 1; i <=3; i++) {
            if (i==2) {
                console.log("Terminated the loop");
                break;
            }
            console.log( "This is for table number "+ i);     
        }
         for (let i = 1; i <=3; i++) {
            if (i==2) {
                console.log("Terminated the loop");
                continue;
            }
            console.log( "This is for table number "+ i);     
        }

        let i=0;
        while (i<10) {
            // console.log(i);
            i++;
        }

        let score=10;
        do {
            console.log(score);
            score--;
            
        } while (score>0);
