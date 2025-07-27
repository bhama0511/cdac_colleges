const sheetURL = 'https://script.google.com/macros/s/AKfycbyK1jY_Kd13eIud79FoAZi7-JrmTcw1j3Cr1_MWioBZOR4Ng4Du9rx7GMBaRP-rMROrqA/exec';
async function fetchData(){
    try{
        const res = await fetch(sheetURL);
        const data = await res.json();
         console.log("done"); 
        return data && data.length ? data : null;  
    }catch(err){
        console.error('Error loading data:', err);
        return null;
    }
}

(async () => {
      data = await fetchData();
      console.log('taking from async');
      sessionStorage.setItem('sheetData',JSON.stringify(data)); 
      getData()
    //   genrateUI(1); 
})();

    function getData(params) {
        const data = sessionStorage.getItem('sheetData');
    const allData = data ? JSON.parse(data) : null;
    const instituteGrid = document.getElementById('institutes-grid');
    instituteGrid.innerHTML=''
        allData.forEach(institute => {        
            console.log(institute.id);
            const card = createInstituteCard(institute);
                instituteGrid.appendChild(card);
            
                // const card = createInstituteCard(institute);
                // instituteGrid.appendChild(card);
            });
    }

// Function to create a single institute card
    function createInstituteCard(institute) {
        
        const card = document.createElement('div');
        card.classList.add('institute-card', 'bg-white', 'rounded-lg', 'overflow-hidden', 'shadow-md');

        // Create the inner structure of the card
        card.innerHTML = `
            <div class="h-48 bg-gray-200 relative">
                <div class="absolute inset-0 flex items-center justify-center">
                    <img src="${institute.display_image_url || "images/default_insti.png"}" alt="${institute.name}" class="absolute inset-0 w-full h-full object-cover scale-[1.05]">
                </div>
            </div>
            <div class="p-5">
                <div class="flex items-center justify-between mb-3">
                    <h3 class="font-bold text-xl text-gray-800">${institute.display_name}</h3>
                
                </div>
                <p class="text-gray-600 mb-4">${institute.header_subtitle}</p>
                <div class="mb-4">
                    <div class="flex items-center mb-2">
                        <svg class="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span class="text-gray-600 text-sm">${institute.display_location}</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <svg class="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        <span class="text-gray-600 text-sm">${institute.display_courses}</span>
                    </div>
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-gray-600 text-sm">Placement Rate: ${institute.display_courses}%</span>
                    </div>
                </div>
                <a href="https://know-your-college.prepwizard.in/Institutes/sunbeam.html?${institute.id}" class="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-300">View Details</a>
            </div>
        `;

        return card;
    }

function genrateUI(id){
    const data = sessionStorage.getItem('sheetData');
    const allData = data ? JSON.parse(data) : null;
    const headerContainer = document.getElementById('header_content');
    const headerImage = document.getElementById('header_image');
    
    const ratings = document.getElementById('ratings');

    if (allData) {
    headerContainer.innerHTML = `
      <h1 class="text-3xl md:text-4xl font-bold mb-2">${allData[0].header_title}</h1>
      <p class="text-lg md:text-xl opacity-90">${allData[0].header_subtitle}</p>
    `;
    headerImage.innerHTML = `
    <img src="${allData[0].display_image_url}" alt="instiute_image"></img>    
    `;
    ratings.innerHTML = `<p>${allData[0].rating}/5 (${allData[0].reviews_count})</p>`
    console.log("this done");
  }
}




