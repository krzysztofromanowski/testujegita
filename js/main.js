$(function () {
    var patientsList = [
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Piotr", lastName: "Piotrowski" },
        { firstName: "Kamil", lastName: "Kamilowski" },
        { firstName: "Kama", lastName: "Kamowska" },
        { firstName: "Piotr", lastName: "Piotro" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { fi

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
        { firstName: "KAMIL", lastName: "Kamilowski" },
    ];



