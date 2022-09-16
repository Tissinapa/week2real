if(document.readyState !== "loading") {
    console.log("Document is ready")
    initializeCode();
} else{
    document.addEventListener("DOMcontentLoaded", function(){
        console.log("Document is ready after waiting")
        initializeCode();
    })
}


function initializeCode() {
    countRowsInTable();
    const btnAddData = document.getElementById("submit-data");
    const btnRemoveTable = document.getElementById("empty-table");
    checkboxAdmin();
    btnAddData.addEventListener("click", function(){
        const table = document.getElementById("dataTable");
        const row = table.insertRow(countRowsInTable());

        let userColumn = row.insertCell(0);
        let emailColumn = row.insertCell(1);
        let addressColumn = row.insertCell(2);
        let adminColumn = row.insertCell(3);
        /*let imageColumn = row.insertCell(4);*/

       

        userColumn.innerHTML = document.getElementById("input-username").value;
        emailColumn.innerHTML = document.getElementById("input-email").value;
        addressColumn.innerHTML = document.getElementById("input-address").value;
        adminColumn.innerHTML = checkboxAdmin();
        /*imageColumn.innerHTML = displayImage();*/
        
    })

    btnRemoveTable.addEventListener("click", function(){
        const table=document.getElementById("dataTable");      
        for(let i=table.rows.length -1 ; i> 0 ; i--){
            table.deleteRow(i);
        } 

    })
    
}
function countRowsInTable(){
    const countRows=document.getElementsByTagName("tr");
    let rows=0;

    for(let i=1; i < countRows.length; i++){
        rows=rows+1;
    }
    
}
function checkboxAdmin(){
    const admin = document.getElementById("input-admin");
    if(admin.checked == true){
        return "X"
    }else{
        return "-"
    }
}
/*function displayImage(){
    const img = document.createElement("img");
    const userImage = document.getElementById("input-image").files[0];
    img.src = URL.createObjectURL(userImage);
    img.height = 64;
    img.width = 64;
    userImage.appendChild(img);
    


}*/