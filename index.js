let element = document.getElementById('about')
let value2 = document.getElementById('info').style.top;
console.log(value2)

function jumpToAbout()
{
    element.scrollIntoView(true)

}

function onSCroll()
{
    if ( document.getElementById('cb').scrollTop >= 250 ) 
    { // scrollTop gives the live height of the scroll bar..    
        document.getElementById('name').className = "nameeffect"
        // document.getElementById('pic').className = ""
        document.getElementById('pic').className = "piceffect"
        document.getElementById('name').style.fontSize = "20px";
        document.getElementById('chuser').style.width = "120px"
        document.getElementById('chuser').style.transition = "0.2s ease-in"
    }
    else if( document.getElementById('cb').scrollTop < 250 )
    {
        document.getElementById('name').className = "none"
        document.getElementById('pic').className = "none"
        
        document.getElementById('name').style.fontSize = "26px";
        document.getElementById('chuser').style.width = "150px"
        document.getElementById('chuser').style.transition = "0.2s ease-out"
        }
}
function BackToHome()
{
    document.getElementById('home').scrollIntoView(true)
}
