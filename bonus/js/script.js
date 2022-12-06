/**
 * Return the element created by the params
 * @param {*} tag the tag of the element; mandatory
 * @param {*} className the whole class list in a string
 * @param {*} content a list content to append at the end of the element
 * @param {*} attributes a list of literal object attributes; {type: 'string' ,value: 'string'}
 * @returns the element
 */
function createEle(tag, className = '', content = [], attributes = []){
    const element = document.createElement(tag);
    element.className = className;
    for(let i = 0; i < content.length; i++){
        element.append(content[i]);
    }
    if(!attributes.includes({type : '', values : ''})){
        //if there are attributes to set 
        for(let i = 0; i < attributes.length; i++){
            element.setAttribute(attributes[i].type, attributes[i].value);
        }
    }
    return element;
}

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
const bonus2 = document.getElementById('bonus2');


for (let i = 0; i < team.length; i++) {
    const member = team[i];

    //milestone 2: display as table
    //create tr element
    const tr = createEle('tr', 'align-middle');
    
    const imgAttrs = [{type : 'src', value: './img/' + member.imgName}];
    //inner card
    const cardImg = createEle('img', 'card-img-top', [], imgAttrs);
    const cardTitle = createEle('h5', 'card-title', [member.firstName, member.surname]);
    const cardDesc = createEle('p', 'card-text', [member.role]);
    const cardBody = createEle('div', 'card-body', [cardTitle, cardDesc]);
    
    //create card
    const card = createEle('div', 'card', [cardImg, cardBody]);
    const col = createEle('div', 'col-12 col-sm-6 col-md-4 col-lg-3', [card]);
    for(let keyMember in member){
        //td content to append
        let tdContent = createEle('img', 'w-25', [], imgAttrs);
        
        if(keyMember !== 'imgName'){
            tdContent = member[keyMember];
        }

        const td = createEle('td','', [tdContent]);
        tr.append(td);
        //milestone 1: print all info of all members
        console.log(member[keyMember]);
    }
    
    bonus2.append(col);
    tbody.append(tr);
    console.log('--------------');
}