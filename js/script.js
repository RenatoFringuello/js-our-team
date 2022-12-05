//milestone 0: import all data of members in a array of "oggetto letterale"
const team = [
    {
        firstName: 'Wayne', 
        surname : 'Barnett',
        role : 'Founder & CEO',
        imgName : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        firstName: 'Angela', 
        surname : 'Caroll',
        role : 'Chief Editor',
        imgName : 'angela-caroll-chief-editor.jpg'
    },
    {
        firstName: 'Walter', 
        surname : 'Gordon',
        role : 'Office Manager',
        imgName : 'walter-gordon-office-manager.jpg'
    },
    {
        firstName: 'Angela', 
        surname : 'Lopez',
        role : 'Social Media Manager',
        imgName : 'angela-lopez-social-media-manager.jpg'
    },
    {
        firstName: 'Scott', 
        surname : 'Estrada',
        role : 'Developer',
        imgName : 'scott-estrada-developer.jpg'
    },
    {
        firstName: 'Barbara', 
        surname : 'Ramos',
        role : 'Graphic Designer',
        imgName : 'barbara-ramos-graphic-designer.jpg'
    }
];
const tbody = document.getElementById('table-tbody');

//milestone 1: print all info of all members
for (let i = 0; i < team.length; i++) {
    const member = team[i];

    //milestone 2: display the table
    //create tr element
    const tr = document.createElement('tr');

    for(let keyMember in member){
        //create element td
        const td = document.createElement('td');
        td.innerText = member[keyMember];
        tr.append(td);
        console.log(member[keyMember]);
    }
    tbody.append(tr);
    console.log('--------------');
}