let age=32;
let userName ='Max';
let hobbies= ['Playing','Reading','Adventure',1,2];
let job={
title: 'Developer',
place:'new York',
salary:50000
};
let adultYears=age;
adultYears=calculateAdultYears(age);
console.log(adultYears);
function calculateAdultYears(userage)
{
    return userage-18;
}

age=45;
adultYears=calculateAdultYears(age);
console.log(adultYears);


