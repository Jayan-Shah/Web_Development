// let course="CS";
// let price="100000";
// let goals=["Money","Following New Technology","Public Speaking"];
let onlineCourse = {
    course: "CS",
    price: 100000,
    goals: ["Money", "Following New Technology", "Public Speaking"],
  };
  alert(onlineCourse.course);
  alert(onlineCourse.price);
  alert(onlineCourse.goals);
  
  function getListItem(array,arrayIndex){
      let  arrayElement=array[arrayIndex];
      return arrayElement;
  }
  
  alert(getListItem(onlineCourse.goals,2));
  