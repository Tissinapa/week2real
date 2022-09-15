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
    /*const btnRemoveTable = document.getElementById("empty-table");*/ 
    checkboxAdmin();
    btnAddData.addEventListener("click", function(){
        const table = document.getElementById("dataTable");
        const row = table.insertRow(countRowsInTable());

        let userColumn = row.insertCell(0);
        let emailColumn = row.insertCell(1);
        let addressColumn = row.insertCell(2);
        let adminColumn = row.insertCell(3);

        /*console.log("toimii");*/

        userColumn.innerHTML = document.getElementById("input-username").value;
        emailColumn.innerHTML = document.getElementById("input-email").value;
        addressColumn.innerHTML = document.getElementById("input-address").value;
        adminColumn.innerHTML = checkboxAdmin();
        
    })

    /*btnRemoveTable.addEventListener("click", function(){
        const table=document.getElementById("dataTable");
        const rows=document.getElementsByTagName("tr");
        const rowCount=rows.length;
        
        for(let i=rowCount-1; i > 0; i--){
            table.removeChild(rows[i]);
        }
    })*/
    
}
function countRowsInTable(){
    const countRows=document.getElementsByTagName("tr");
    let rows=0;

    for(let i=1; i < countRows.length; i++){
        rows=rows+1;
    }
    
    /*console.log(rows);*/
}
function checkboxAdmin(){
    const admin = document.getElementById("input-admin");
    if(admin.checked == true){
        return "X"
    }else{
        return "-"
    }
}