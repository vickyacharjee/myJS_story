
        //here we wil talk about the Functionality of an Array

        let personal_info=['vicky','Acharjee','shillong'];
        let qualification_position=['BCA','MCA','SDE'];
        
        // lets merge the  both the array element by using push()

        // personal_info.push(qualification_position);
        // console.log(personal_info);//['vicky', 'Acharjee', 'shillong', Array(3)]
        //here the constratint which we are getting is that the array is being nested and we dont want that


        // lets merge the  both the array element by using Concat()

        let overall=personal_info.concat(qualification_position);//so our issue got resoled by using concat() method
        console.log(personal_info.concat(qualification_position));//it mergerd the  array elements as we desired too
        console.log(overall);
       
        // but we also have the other options too even better than concat() method
        //i.e Spread opeartor


        let ov=[...personal_info,...qualification_position]
        console.log("yo",ov);//results the same we get one more benefit out of it i.e we can add more than 2 arrau bvariable unlike concat()

        //suppose we have nested array, and would like to  make it one single array elements
        //in this case we will use flat() method

        let =ar1=[1,2,3,4,5,[6,7,8],[9,10,11,[12,13]]];
        let o=ar1.flat(Infinity);
        console.log(o);//returns  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        //to check whether the give condition is array or  not
        let a=1;
        console.log(Array.isArray(a));// since the given type is false
        console.log(Array.isArray(ar1));// since the given type is true


        //to convert  string to an array element
        console.log(Array.from('vicky'));//['v', 'i', 'c', 'k', 'y']
        console.log(Array.from(12345));// returns an empty array

        ////to convert  object to an array element
        console.log(Array.from({name:"vicky"}));//Returns an empty array since we already discussed about this is that it is only applied to an string

        //to convert multiple variable to a single array
        // of()

        let score1=10;
        let score2=20;
        let score3=30;

        console.log(Array.of(score1,score2,score3));

        //ANother Example is via String so lets give a try
        let sc1="vicky";
        let sc2="Acharjee";
        
        console.log(Array.of(sc1,sc2));//Results what we expected ['vicky', 'Acharjee']


        //ANother Example is via String+Number so lets give a try
        let scc1="vicky";
        let scc2="Acharjee";
        let scc3=21;
        
        console.log(Array.of(scc1,scc2,scc3));//Results what we expected ['vicky', 'Acharjee', 21]
        




