// console.log('Phone Hunting!');
const loadPhone=async(searchText=13,isShowAll)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data= await res.json();
    // console.log(data);
    const phones=data.data;
    // console.log(data.data);
    if(data.status==false){
        noResult()
    }
    else{
        displayPhones(phones,isShowAll);
    }
}


const displayPhones=(phones,isShowAll)=>{
    // console.log(phones);
    //1  get the element by id 
    const phoneContainer=document.getElementById('phone-container');
    //clear phone cards   before cards before adding new cards
    phoneContainer.textContent='';
    // console.log(phones.length)

    //display show all button if there are more than 12 phones
    const showAllContainer=document.getElementById('show-all-container')
    if(phones.length>12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    // console.log('Is show all',isShowAll);

    //display only first 12 phones if not show all
    if(!isShowAll){
        phones=phones.slice(0,12);

    }    
    phones.forEach(phone=>{
        // console.log(phone);
        // 2 create a div
        const phoneCard= document.createElement('div');
        phoneCard.classList=`card bg-gray-100 p-4 shadow-xl`;
        //3  set inner html
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `
        //4 append child
        phoneContainer.appendChild(phoneCard);
    })


    //hide loading spinner
    toggleLoadingSpinner(false)

}

//handleShowDetail
const handleShowDetail=async(id)=>{
    // console.log('Clicked show details',id);
    //load single data
    const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data=await res.json();
    const phone=data.data;
    showPhoneDetails(phone);
}


const showPhoneDetails=(phone)=>{
    console.log(phone)
    const phoneName=document.getElementById('phone-name');
    phoneName.innerText=phone.name;
    const showDetailContainer=document.getElementById('show-detail-container');
    showDetailContainer.innerHTML=`
    <img src="${phone.image}" alt="" class="justify-center" />
    <p><span>Storage: </span>${phone?.mainFeatures.storage}</p>
    <p><span>Display Size: </span>${phone?.mainFeatures.displaySize}</p>
    <p><span>Chipset: </span>${phone?.mainFeatures.chipSet}</p>
    <p><span>Memory: </span>${phone?.mainFeatures.memory}</p>
    <p><span>Slug: </span>${phone?.slug}</p>
    <p><span>Release Date: </span>${phone?.releaseDate}</p>
    <p><span>Brand: </span>${phone?.brand}</p>
    <p><span>GPS: </span>${phone?.others?.GPS}</p>
    
    
    `
    //show the modal
    show_details_modal.showModal();
}


//handle search button
const handleSearch=(isShowAll)=>{
    toggleLoadingSpinner(true)
    console.log('Search Clicked');
    const searchField= document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText);
    loadPhone(searchText,isShowAll);
}

// const handleSearch2=()=>{
//     toggleLoadingSpinner(true)
//     const searchField=document.getElementById('search-field2');
//     const searchText=searchField.value;
//     loadPhone(searchText);
// }


const toggleLoadingSpinner=(isLoading)=>{
    const loadingSpinner=document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

//handle show all
const handleShowAll=()=>{
    handleSearch(true);
}

//display no result
const noResult=()=>{
    const resultNone=document.getElementById('none-result-container');
    resultNone.innerHTML=`
       <h2>Opssss!!!!!!</h2>
       <p>There is no product in this name</p>
    `    
    noneResult.showModal();
}

loadPhone();


//pagination
//1|2|3|4|5|6|7|8|9|10........|Last