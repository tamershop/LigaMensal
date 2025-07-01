const tables = {
    'pokemonStandard': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0g6mVYbb7jncScxB0dFuNJbYOAqiF9_qJogFsLf-6soeQ6tA2amFE1cF5EEDa10Aw4VPw07B_F1xd/pubhtml?widget=true&amp;headers=false',
    'pokemonGlc': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTbASjR110JYV7JWupgKTZYD55c2EZ2P4IyLAyJLQImNkfY2Vlzz29oMHOu_xyIPO2a0o1X114UV-db/pubhtml?widget=true&amp;headers=false',
    'digimonSabado': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQM-MHPHvbzVji-1xpVp6pB8JKUdE1T4e8ImSxtMFjWY_kVOfxkTg0FYhUHqHH6s54Hd2YaiO7fy7gx/pubhtml?widget=true&amp;headers=false',
    'digimonQuinta': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTLfmCs3onjWbgjjbQb5-ickZ-oIroNkiyuq3jZFh1VqeVU55TOxtycTcNpE56IRU9XxeQmk0CZCwKz/pubhtml?widget=true&amp;headers=false'
};

function setCurrentTable(table){
    if (tables[table]) {
        return document.getElementById('table-iframe').src = tables[table];
    } else {
        setCurrentTable('pokemonGlc');
        return console.warn(`No table found for key: ${table}`);
    }
}

document.querySelectorAll('.tab-link').forEach(element => {
    element.addEventListener("click", () => setCurrentTable(element.dataset.tabValue));
});

setCurrentTable('pokemonGlc');
