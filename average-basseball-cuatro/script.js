const playerForm = document.querySelector('#player-form'); 
const playerNameInput = document.querySelector('#player-name'); 
const playerHitsInput = document.querySelector('#player-hits'); 
const playerAtBatsInput = document.querySelector('#player-at-bats');  
const pitcherForm = document.querySelector('#pitcher-form'); 
const pitcherNameInput = document.querySelector('#pitcher-name'); 
const pitcherInningsInput = document.querySelector('#pitcher-innings'); 
const pitcherEarnedRunsInput = document.querySelector('#pitcher-earned-runs');  
const playerTable = document.querySelector('#player-data');  
let playerData = []; let pitcherData = [];  
function calculateAverage(hits, atBats) {   
    const average = hits / atBats;   
    return average.toFixed(3); }  
    function calculateERA(earnedRuns, innings) {   
        const era = (earnedRuns * 9) / innings;   
        return era.toFixed(2); }  
        function updatePlayerTable() {   
            playerTable.innerHTML = '';    
            playerData.forEach((player) => {     
                const row = document.createElement('tr');     
                const nameCell = document.createElement('td');     
                const averageCell = document.createElement('td');
nameCell.textContent = player.name;     
averageCell.textContent = calculateAverage(player.hits, player.atBats);      
row.appendChild(nameCell);     row.appendChild(averageCell);      
playerTable.appendChild(row);   });    
pitcherData.forEach((pitcher) => {     
    const row = document.createElement('tr');     
    const nameCell = document.createElement('td');     
    const eraCell = document.createElement('td');      
    nameCell.textContent = pitcher.name;     
    eraCell.textContent = calculateERA(pitcher.earnedRuns, pitcher.innings);      
    row.appendChild(nameCell);     row.appendChild(eraCell);      
    playerTable.appendChild(row);   }); }  
    playerForm.addEventListener('submit', (e) => {   
        e.preventDefault();    
        const playerName = playerNameInput.value.trim();   
        const playerHits = parseInt(playerHitsInput.value);   
        const playerAtBats = parseInt(playerAtBatsInput.value);    
        if (playerName && !isNaN(playerHits) && !isNaN(playerAtBats)) {     
            const player = {       
                name: playerName,       
                hits: playerHits,       
                atBats: playerAtBats,     };      
                playerData.push(player);     
                updatePlayerTable();      
                // Limpiar los campos del formulario     
                playerNameInput.value = '';     
                playerHitsInput.value = '';     
                playerAtBatsInput.value = '';   } });  
                pitcherForm.addEventListener('submit'), (e) => {   
                    e.preventDefault();    
                    const pitcherName = pitcherNameInput.value.trim();   
                    const pitcherInnings = parseInt(pitcherInningsInput.value);   
                    const pitcherEarnedRuns = parseInt(pitcherEarnedRunsInput.value);  
                    if (pitcherName && !isNaN(pitcherInnings) && !isNaN(pitcherEarnedRuns)) {     
                        const pitcher = {       
                            name: pitcherName,       
                            innings: pitcherInnings,       
                            earnedRuns: pitcherEarnedRuns,     };      
                            pitcherData.push(pitcher);     
                            updatePlayerTable();      
                            // Limpiar los campos del formulario     
                            pitcherNameInput.value = '';     
                            pitcherInningsInput.value = '';     
                            pitcherEarnedRunsInput.value = '';   
                        } };
