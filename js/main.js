$(function () {
    var patientsList = [
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Piotr", lastName: "Piotrowski" },
        { firstName: "Kamil", lastName: "Kamilowski" },
        { firstName: "Kama", lastName: "Kamowska" },
        { firstName: "Piotr", lastName: "Piotro" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Pacjent", lastName: "Pacjentowski" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Test", lastName: "Testowy" },
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