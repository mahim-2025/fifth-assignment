const callHistoryData = []



const hearts = document.getElementsByClassName('heart')
const heartCount = document.getElementById('heart-count')
let count = 0

for(const heartBtn of hearts){
    heartBtn.addEventListener('click', function(){
        count++
        document.getElementById('heart-count').innerText = count
    })

}



// coin count function

let coinCount = 100
const coinCountDisplay = document.getElementById('coin-count')


function callBtnClicked (callBtnId, serviceId, numberId){
    const callBtn = document.getElementById(callBtnId)
    const serviceBtn = document.getElementById(serviceId).innerText
    const numberBtn = document.getElementById(numberId).innerText
      const callHistoryContainer = document.getElementById('call-history-container')
    callBtn.addEventListener('click', function (){
        if(coinCount < 20){
            alert('you do not have enough coins to make the call')
            return
        }
        
            alert(`Calling ${serviceBtn} at ${numberBtn}`)
        
        coinCount -= 20
        coinCountDisplay.innerText = coinCount
        const data = {
            name : serviceBtn,
            number: numberBtn,
            date : new Date().toLocaleString()
        }
        callHistoryData.push(data)
        
       

       
            const div = document.createElement('div')
           
            div.innerHTML = ` <div class="flex items-center gap-8 px-4 py-4">
                <div>
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.number}</p>
                </div>
                <div>
                    ${data.date}
                </div>
            </div>
            `
        callHistoryContainer.prepend(div)
           
 });

}

    


callBtnClicked('call-btn-1', 'service-name-1', 'number-1')
callBtnClicked('call-btn-2', 'service-name-2', 'number-2')
callBtnClicked('call-btn-3', 'service-name-3', 'number-3')
callBtnClicked('call-btn-4', 'service-name-4', 'number-4')
callBtnClicked('call-btn-5', 'service-name-5', 'number-5')
callBtnClicked('call-btn-6', 'service-name-6', 'number-6')


// cleare button

document.getElementById('clear-btn').addEventListener('click', function (){
    document.getElementById('call-history-container').innerHTML = ''
})



// copy functions


let copyCount = 0
const copyCountDisplay = document.getElementById('nav-copy-btn')

const copyBtns = document.getElementsByClassName('copy-btn')

for (const copyBtn of copyBtns){
    copyBtn.addEventListener('click', function(){
        const numberElement = this.closest('.card').querySelector('.my-4 h1')
        const numberToCopy = numberElement.innerText

        navigator.clipboard.writeText(numberToCopy)
            .then(() => {
                alert(`The number ${numberToCopy} has been copied!`)
                copyCount++
                copyCountDisplay.innerText = `${copyCount} Copy`
            })
            .catch(err => {
                console.error('Failed to copy text: ', err)
                alert('Failed to copy the number. Please try again.')
            })
    })
}