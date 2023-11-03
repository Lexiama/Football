
"use strict";

window.onload = function () {

    let teams = [
        { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX", info: "The Dallas Cowboys are a professional football team..." },
        { code: "DEN", name: "Denver Broncos", plays: "Denver, CO", info: "The Denver Broncos are a professional football team..." },
        { code: "HOU", name: "Houston Texans", plays: "Houston, TX", info: "The Houston Texans are a professional football team..." },
        { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO", info: "The Kansas City Chiefs are a professional football team..." },
    ];

    const teamSelect = document.getElementById("teamSelect");
    const teamInfo = document.getElementById("teamInfo");

    let length = teams.length;
    for (let i = 0; i < length; i++) {
        let option = document.createElement("option");
        option.text = teams[i].name;
        option.value = teams[i].code;
        teamSelect.appendChild(option);
    }

    teamSelect.onchange = function () {
        let teamCode = teamSelect.value;

        
        let selectedTeam = teams.find(team => team.code === teamCode);

        
        if (selectedTeam) {
            teamInfo.textContent = selectedTeam.info;
        } else {
            teamInfo.textContent = "No team selected";
        }
    }
};

