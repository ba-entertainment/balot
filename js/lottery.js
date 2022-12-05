const TICKETSOLDOUT  = 91;

const MODAL = [
    {   id: 'history-modal', 
        title: 'History Data',
        content: 'No data' },
    {   id: 'rule',
        title: 'Rule To Play',
        content: `
        <p>Players may pick three numbers from two separate pools of numbers from 1 to 99. You win the first prize by matching all three winning numbers in a drawing and consolation prize if matching one numbers.</p>
        <p>Prize value will increase by the number of ticket have been sold out.</p>
        <ul>
            <li>90 tickets - 300.000đ</li>
            <li>60 tickets - 200.000đ</li>
            <li>Under 30 tickets - 100.000đ</li>
        </ul>`}
]



const loadingData = (sold) => {
    console.log(sold)
    if(sold > 90) {
        return [sold, '50,000', '300,000']
    } else if(sold > 60) {
        return [sold, '30,000', '200,000']
    } else {
        return [sold, '20,000', '100,000']
    }
}

const showData = (Data, idTicket, idSecondPrize, idFirstPrize) => {
    let idLoading = [idTicket, idSecondPrize, idFirstPrize]
    for(let id in idLoading) {
        document.getElementById(idLoading[id]).innerHTML = Data[id]
    } 
}

showData(loadingData(TICKETSOLDOUT), 'sold-out', 'second-prize', 'first-prize') 

const closeModal = (tagID) => {
    document.getElementById(tagID).style.display = "none"; 
}

const openModal = (tagID) => {
    document.getElementById(tagID).style.display = "block";
    console.log("ok")
}


const displayAllModel = () => {
    let code = ''
    for(let i of MODAL) {
        code += `
        <div id="${i.id}" class="_modal" style="display:none;">
        <div class="_modal-fade">
            <div class="_modal-container">
                <div class="_modal-header">
                    <div class="_modal-title">
                        ${i.title}
                    </div>
                </div>
                <div class="_modal-content">
                    ${i.content}
                </div>
                <div class="_modal-footer">
                    <div class="button button-primary" onclick="closeModal('${i.id}')">Close</div>
                </div>
            </div>            
        </div>
        </div>
        `
    }

    console.log(code)
    document.getElementById('all-modal').innerHTML = code;
}

displayAllModel()