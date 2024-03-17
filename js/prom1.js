var id = document.getElementById('input_id')
var midterm = document.getElementById('midterm_')
var final = document.getElementById('final_')
var all_student;
var a = Boolean
if (localStorage.getItem('deg') != null) {
    all_student = JSON.parse(localStorage.getItem('deg'))
    show()
}
else {
    all_student = []
}


function add_student() {
    var data = {
        id_data: id.value,
        mid_data: midterm.value,
        final_data: final.value
    }
    if (id_data != '' && mid_data != '' && final_data != '') {
        all_student.push(data)
        localStorage.setItem('deg', JSON.stringify(all_student))
        console.log(all_student)
        clear()
        show()
    }

}
function clear() {
    id.value = ""
    midterm.value = ""
    final.value = ""
}
function show() {
    var all_data = ``;
    for (var i = 0; i < all_student.length; i++) {
        all_data +=
            `
            <tr>
            <th class="text-center">${i}</th>
            <td>
              <div class="text-center fs-5">${all_student[i].id_data}</div>
            </td>
            <td>
              <div class="text-center fs-5">${all_student[i].mid_data}</div>
            </td>
            <td>
              <div class="text-center fs-5">${all_student[i].final_data}</div>
            </td>
            <td>
              <div class="text-center fs-5 text-danger fw-bold">${parseInt(all_student[i].mid_data) + parseInt(all_student[i].final_data)}</div>
            </td>
          </tr>`
    }
    document.getElementById('body').innerHTML = all_data
}