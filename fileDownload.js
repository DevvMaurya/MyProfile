function downloadFile()
{
    let fileUrl = 'https://drive.google.com/file/d/1nb7sQOgE1uQA3y8Ud7NqvwWn9M6Zcreb/view'
    let a = document.createElement('a')
    a.href = fileUrl;
    a.download = "DevMaurya Resume.pdf"

    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}