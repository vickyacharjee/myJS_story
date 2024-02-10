
        // let user={};
        let user=new Object();
        
        user.id=123;
        user.name="vicky";
        user.isLoggedIn="false";
        user.isLoggedInn=false;

        // console.log(typeof user.isLoggedInn);
        // console.log(typeof user.isLoggedIn);
        // console.log(typeof user.name);
        // console.log(typeof user.id);

        let arr=[1,'vicky',false]
        let arr2=[1,'vicky',false,123,"acharjee"];
        // console.log(arr2);
        // console.log(typeof arr);
        // console.log(typeof arr2);
        // console.log(typeof arr2[0]);
        // console.log(typeof arr2[1]);
        // console.log(typeof arr2[2]);
        // console.log(typeof arr2[3]);
        // console.log(typeof arr2[4]);



        //Normal method
        let a={
            name:"vicky_acharjee",
            class: 'btch'
        }
        console.log(a.name);


        //via destructure
        let {name:vic}=a;
        // console.log(name);//if we suppose uncomment and run then it will throw an error since its name priority is given as "vic"

        console.log(vic);

        
        // console.log(user);

       






