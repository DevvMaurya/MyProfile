const back_imgs = ['back.jpg','pexels-fox.jpg','t.jpg','pexels-daniel-putzer-633409.jpg','zenitsu_3.jpg','zenitsu_4.jpg']
let i = 0
function changeBackImg()
{
    // cb.className = "newpic"
    document.getElementById('cb').style.backgroundImage = "url('pexels-fox.jpg')";

    
}
function change_bgpic()
{
     // alert(i)
   document.getElementById('cb').style.backgroundImage = "url("+ back_imgs[i] +")";
   document.getElementById('cb').style.transition = ' 2s ease-in'
   if( i<5 )
   {
       i = i +1
   }
   else
   {
    i = 0
   }

}
setInterval(change_bgpic,5000)