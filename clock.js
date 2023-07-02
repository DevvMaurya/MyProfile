const timeDisplay = () =>
{
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()

    h = h<10 ? '0' + h : h
    m = m<10 ? '0' + m : m
    s = s<10 ? '0' + s : s

    document.getElementById('hr').innerHTML = h + ' hrs'
    document.getElementById('min').innerHTML = m + ' min'
    document.getElementById('s').innerHTML = s + ' sec'
}
setInterval(timeDisplay,1000)