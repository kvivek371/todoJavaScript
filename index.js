function callPopup()

{

    const blurMainScreenTop = document.getElementById("topPop");
    blurMainScreenTop.style.filter = "blur(5px)";

    const blurMainScreenCenter =document.getElementById("cardPop");
    blurMainScreenCenter.style.filter = "blur(5px)";

    const showPopUpForm =document.getElementById("form");
    showPopUpForm.style.display = "block";

    const showParentOnMainAdd = document.getElementById("parent")
    showParentOnMainAdd.style.filter = "blur(5px)";

}

const taskListMain = []

function changeHere()

{

    const name = document.getElementById("name").value;


    const tempObject = {
        taskname : name
    }

    taskListMain.push(tempObject);

    addtaskonScreen();

}

function addtaskonScreen()

{

    const elementMain = document.createElement("div");
    elementMain.setAttribute("id","tripBoxMain");
    elementMain.setAttribute("class","tripBoxMain");
    elementMain.innerText=taskListMain[taskListMain.length-1].taskname
    elementMain.onclick = tripDetails;

    const addToParentDiv = document.getElementById("parent");
    addToParentDiv.appendChild(elementMain);

    const hrElement = document.createElement("hr");
    hrElement.setAttribute("id","hrChild");
    elementMain.appendChild(hrElement);

    const addButtonChild = document.createElement("i");
    addButtonChild.setAttribute("class","fa-solid fa-circle-plus icon");
    addButtonChild.setAttribute("id","plusInsideChildDiv");
    elementMain.appendChild(addButtonChild);
    addButtonChild.onclick = addButtonChildClick;

    const deleCardButton = document.createElement("i")
    deleCardButton.setAttribute("class","fa-solid fa-circle-minus");
    deleCardButton.setAttribute("id","deleCardButton")
    elementMain.appendChild(deleCardButton)

    deleCardButton.onclick = deleItemInsideTripBox

    hidePopup();

}

function tripDetails()

{

    console.log("MY NAME IS TRIP")

}

function deleItemInsideTripBox()
{

    console.log("working Inside----deleItemInsideTripBox")

}



function addButtonChildClick()

{

    const formCardView = document.getElementById("formCard");
    formCardView.style.display="block";

    const blurMainScreenTop = document.getElementById("topPop");
    blurMainScreenTop.style.filter = "blur(5px)";

    const blurMainScreenCenter =document.getElementById("cardPop");
    blurMainScreenCenter.style.filter = "blur(5px)";

    const showPopUpForm =document.getElementById("form");
    showPopUpForm.style.display = "none";

    const showParentOnMainAdd = document.getElementById("parent")
    showParentOnMainAdd.style.filter = "blur(5px)";

}

const newTaskListForChild =[]

function changeHereForChildDiv()
    
{
    console.log("changeHereForChildDiv");
    const nameTask = document.getElementById("nameCard").value;
    console.log(nameTask);

    const newTempObj = {
        newName:nameTask
    }

    newTaskListForChild.push(newTempObj);

    addChildDataOnScreen()
}

function addChildDataOnScreen()

{

    const elementChild = document.createElement("div");
    elementChild.setAttribute("id","tripBoxChild");
    elementChild.setAttribute("class","tripBoxChild");
    elementChild.innerText=newTaskListForChild[newTaskListForChild.length-1].newName

    const existingChildBox = document.getElementById("tripBoxMain");
    existingChildBox.appendChild(elementChild);

    const taskDoneSign = document.createElement("button")
    taskDoneSign.setAttribute("id","taskDoneSign");
    taskDoneSign.innerText="Mark Done"
    elementChild.appendChild(taskDoneSign)

    taskDoneSign.onclick = lineThroughFunction;

    hidePopup()


}


function lineThroughFunction()

{

    const elementChildText = document.getElementById("tripBoxChild");
    
    elementChildText.style.textDecoration = "line-through";


}


function hidePopup()

{

    const blurMainScreenTop = document.getElementById("topPop");
    blurMainScreenTop.style.filter = "none";

    const blurMainScreenCenter =document.getElementById("cardPop");
    blurMainScreenCenter.style.display = "none";

    const showPopUpForm =document.getElementById("form");
    showPopUpForm.style.display = "none";

    const showPopUpformCard =document.getElementById("formCard");
    showPopUpformCard.style.display = "none";

    const showParentOnMainAdd = document.getElementById("parent")
    showParentOnMainAdd.style.filter = "none";

}


function backButton()

{
    console.log("backButton-----working")

    const blurMainScreenTop = document.getElementById("topPop");
    blurMainScreenTop.style.filter = "none";

    const blurMainScreenCenter =document.getElementById("cardPop");
    blurMainScreenCenter.style.filter = "none";

    const showPopUpForm =document.getElementById("form");
    showPopUpForm.style.display = "none";

    const showParentOnMainAdd = document.getElementById("parent")
    showParentOnMainAdd.style.filter = "none";

    const showFormCarOnMainAdd = document.getElementById("formCard")
    showFormCarOnMainAdd.style.display = "none";

}