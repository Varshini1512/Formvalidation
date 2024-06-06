
const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const confirmpassword=document.querySelector('#confirmpassword')

form.addEventListener('submit',(e)=>
{
  if(!ValidInputs())
   e.preventDefault()
})

function ValidInputs()
{
    let usernamevalue=username.value.trim()
    let emailvalue=email.value.trim()
    let passwordvalue=password.value.trim()
    let confirmpasswordvalue=confirmpassword.value.trim()

    let success=true

    if(usernamevalue=='')
    {
        success=false
        setError(username,'Username is required')
    }
    else
    {
        setSuccess(username)
    }
    if(emailvalue=='')
    {
        success=false
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailvalue))
    {
        success=false
        setError(email,'Email is not valid')
    }
    else
    {
        setSuccess(email)
    }

    if(passwordvalue=='')
    {
        success=false
        setError(password,'Password is required')
    }
    else if(passwordvalue.length<8)
    {
        success=false
        setError(password,'Password must contain atleast 8 character')
    }
    else
    {
        setSuccess(password)
    }
    if(confirmpasswordvalue=='')
    {
        success=false
        setError(confirmpassword,'Password is required')
    }
    else if(confirmpasswordvalue!==passwordvalue)
    {
        success=false
        setError(confirmpassword,'Password doesnt match')
    }
    else
    {
        setSuccess(confirmpassword)
    }

    return success
}



function setSuccess(element,message)
{
    let inputGroup=element.parentElement
    let errormessage=inputGroup.querySelector('.error')

    errormessage.textContent=''
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
function setError(element,message)
{
    let inputGroup=element.parentElement
    let errormessage=inputGroup.querySelector('.error')

    errormessage.textContent=message
    inputGroup.classList.add('error')

    inputGroup.classList.remove('success')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );}
