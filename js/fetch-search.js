/*------------------------------------------------------------------------------------------------------------Injected By Dchans-------------------------------------*/
const data=[
    {
        id:1213,
        unit:0,
        tag:"2LC306AA005XB04",
        area:"BRL",
        equipment:"Deser overflow bypass viv",
        priority:"slow",
        division: "computer server",
    },
    {
        id:1214,
        unit:1,
        tag:"3LC306AA005XB04",
        area:"BRL",
        equipment:"Deser didn't flow bypass viv",
        priority:"normal",
        division:"boiler",
        
    },
    {
        id:1215,
        unit:2,
        tag:"4LC306AA005XB05",
        area:"ARL",
        equipment:"Mechanical flow error",
        priority:"shutdown",
        division: "computer server",
    },
    {
        id:1216,
        unit:3,
        tag:"5LC306AA005XB05",
        area:"DF",
        equipment:"Chemical leakage",
        priority:"slow",
        division:"boiler",
    },
    {
        id:1217,
        unit:4,
        tag:"6LC306AA005XB05",
        area:"BRL",
        equipment:"Computer server error",
        priority:"normal",
        division: "computer server",
    },
    {
        id:1218,
        unit:5,
        tag:"7LC306AA005XB04",
        area:"BRL",
        equipment:" Data miss communication",
        priority:"normal",
        division: "computer server",
    }
]
const query=document.getElementById("tag-search")
query.focus()
function display_data(){
    var  table_row_content=""
    for(const c of data){
        if(query.value) if(c.tag!=query.value) continue;
        table_row_content+=`<tr>
        <td>${c.id}</td>
        <td>${c.unit}</td>
        <td>${c.division}</td>
        <td>${c.equipment}</td>
        <td>Details of Defect</td>
        <td></td>
        <td>${c.priority}</td>
        </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML=table_row_content;
}
document.getElementsByClassName("search_button")[0].addEventListener("click",()=>display_data())
display_data();