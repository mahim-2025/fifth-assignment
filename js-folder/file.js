const hearts = document.getElementsByClassName('heart')
const heartCount = document.getElementById('heart-count')
let count = 0

for(const heartBtn of hearts){
    heartBtn.addEventListener('click', function(){
        count++
        document.getElementById('heart-count').innerText = count
    })

}


// Reuseable functions



function callBtnClicked (callBtnId, serviceId, numberId){
    const callBtn = document.getElementById(callBtnId)
    const serviceBtn = document.getElementById(serviceId).innerText
    const numberBtn = document.getElementById(numberId).innerText
    
    callBtn.addEventListener('click', function (){
        alert(`Calling ${serviceBtn} at ${numberBtn}`)
    })
}

callBtnClicked('call-btn-1', 'service-name-1', 'number-1')
callBtnClicked('call-btn-2', 'service-name-2', 'number-2')
callBtnClicked('call-btn-3', 'service-name-3', 'number-3')
callBtnClicked('call-btn-4', 'service-name-4', 'number-4')
callBtnClicked('call-btn-5', 'service-name-5', 'number-5')
callBtnClicked('call-btn-6', 'service-name-6', 'number-6')