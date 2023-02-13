	  
$("#task-table-list tbody tr:first").hide()

//submit action
$("#submit").click(function(e){
  e.preventDefault()
var userData=formValidation()
if(!userData)$('#task-validation-modal').modal('show'); 
console.log(userData)
})
///form- validation
function formValidation(){
var valid=true;
var userInput={}
$("form .form-control").each(function(i,e){
var input=$(e)
if(input.val()==""||input.val()==null){
 input.on("input",validatingInput).addClass("is-invalid")  
  valid=false
}
userInput[input.attr("id")]=input.val()
})
return valid?userInput:valid
}
 
function validatingInput(e){
 $(e.target).removeClass("is-invalid")
}



/* binding data to table  */

bindingQuickViewList("Manager","arjun")
function bindingTableRow(){
 
 var rowElement=$("#task-table-list tbody tr:first").clone().show();
 $("[name=task-owner] input" ,rowElement).attr("disabled","disabled")[0].value="Mallik"
 $("[name=task-name] input" ,rowElement).attr("disabled","disabled")[0].value="Mallik" 
 $("[name=assigned-date] input" ,rowElement).attr("disabled","disabled")[0].value="Mallik" 
 $("[name=task-lead] input" ,rowElement).attr("disabled","disabled")[0].value="Mallik" 
 $("[name=task-status] input" ,rowElement).attr("disabled","disabled")[0].value="Mallik" 
 $("[name=actions] i.edit" ,rowElement).attr("edit","1").click(editTaskListItem)
 $("[name=actions] i.delete" ,rowElement).attr("delete","1").click(deleteTaskListItem)
 $("[name=actions] i.save" ,rowElement).attr("save","1").click(saveTaskListItem)
 $("#task-table-list tbody").append(rowElement)
}



function  bindingQuickViewList(title,name){
var quickViewList=$("<div>").addClass("row mb-2").attr("id","quick-view-list")
    quickViewList.append(quickViewListItem())
    $("#quick-view").append(quickViewList)
   function quickViewListItem(){
     return $("<div>").addClass("col-md").html("<h5>"+title+"</h5><span>"+name+"</span>")
   }
}

function editTaskListItem(e){
console.log("edit function",$(e.target).attr("edit"))
var rowele=$(e.target)[0].parentNode.parentNode.parentNode
$("button.edit ",rowele).addClass("d-none")
$("button.save ",rowele).removeClass("d-none")
$("input",rowele).each(function(i,e){
 $(e).attr({"readonly":false,
 "disabled":false})
 $(e).removeClass("border-0")
 })
 $("input",rowele)[0].focus()
}


function deleteTaskListItem(e){
  $('#task-delete-modal').modal('show');

console.log("delete function",$(e.target).attr("delete"))
}

function saveTaskListItem(e){
console.log("save function",$(e.target).attr("save"))
var rowele=$(e.target)[0].parentNode.parentNode.parentNode
$("button.edit ",rowele).removeClass("d-none")
$("button.save ",rowele).addClass("d-none")
$("input",rowele).each(function(i,e){
console.log($(e).val())
$(e).attr({"readonly":true,
 "disabled":true})
 $(e).addClass("border-0")
 })
}


$("#submit").click(function(e){
e.preventDefault()
var userData=formValidation()
if(!userData)$('#validation-modal').modal('show'); 
console.log(userData)
}) 

///form- validation
function formValidation(){
var valid=true;
var userInput={}
$("form .form-control").each(function(i,e){
var input=$(e)
if(input.val()==""||input.val()==null){
 input.on("input",validatingInput).addClass("is-invalid")  
  valid=false
}
userInput[input.attr("id")]=input.val()
})
return valid?userInput:valid
}



bindingTableRow()
bindingTableRow()
bindingTableRow()
bindingTableRow()


 ///validating inputs if the field is empty 
function validatingInput(e){
 $(e.target).removeClass("is-invalid")
}