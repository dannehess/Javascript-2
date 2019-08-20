/*
let course = {
    title: "JavaScript",
    info: function(){
        console.log(this);
        console.log(this.title);
    }
};
course.info();
*/

/*
let course = {
    title: "JavaScript",
    info: function(){
        function demo(){
            console.log(this);
        }
        demo();
    }
};
course.info();
*/

/*
let course = {
    title: "JavaScript",
    info: function(){
        let self = this;
        function demo(){
            console.log(self);
        }
        demo();
    }
};
course.info();
*/

/*
    Arrow-funktioner saknar this
    Fat arrow =>
    data = () => console.log("Inne i Arrow", this);
    Arrow -> (Används i PHP)
*/

/*

let course = {
    students : ["Mahmud", "Kalle", "Erik"],
    info2: function(){
        this.students.forEach(function (s){
        // OBS! Här finns en ny funktion (en callback)
        // som inte tillhör objektet course
        // this i denna funktion refererar till window
        // Utskrift i console är
        // Mahmud läser undefined
        // Kalle läser undefined
        // Erik läser undefined

        console.log(s + ' läser ' + titel);
        });
    }
};
course.info();
*/

let course = {
    title: "JavaScript",
    students : ["Mahmud", "Kalle", "Erik"],
    info: function(){
        let titel = this.title;
        this.students.forEach(function (s){
        console.log(s + ' läser ' + titel);
        });
    }
};
course.info();