// write js code here corresponding to index.html
// You should add submit event on the form
var form =document.querySelector("form");
form.addEventListener("submit",function(event){
    jobarr=JSON.parse(localStorage.getItem("schedule"))|| [];
    event.preventDefault();

    var data={
        matchnumber:form.matchNum.value,
        teamA:form.teamA.value,
        teamB:form.teamB.value,
        date:form.date.value,
        venue:form.venue.value,


    }
    jobarr.push(data)
    localStorage.setItem("schedule",JSON.stringify(jobarr));
    // window.location.href=""
})