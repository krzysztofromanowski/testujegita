$(function () {
    var patientsList = [
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Piotr", lastName: "Piotrowski" },
        { firstName: "Kamil", lastName: "Kamilowski" },
    ];

    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});

function addPatient(patient) {
    $("#patients-list")
        .append(
        $("<li/>")
            .text(patient.firstName + " " + patient.lastName)
        );
}

$(function () {
    var doctorList = [
        { firstName: "drAdam", lastName: "Nowak" },
        { firstName: "drAndrzej", lastName: "Kielcz" },
        { firstName: "Piotr", lastName: "Piotrowski" },
        { firstName: "Kamil", lastName: "Kamilowski" },
    ];



