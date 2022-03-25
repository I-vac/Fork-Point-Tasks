function addRow(){
    let row = document.getElementById("sampleTable").insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML="New Row Cell 1"
    cell2.innerHTML="New Row Cell 2"
}