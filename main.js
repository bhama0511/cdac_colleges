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
      genrateUI(1); 
})();

function genrateUI(id){
    const data = sessionStorage.getItem('sheetData');
    const allData = data ? JSON.parse(data) : null;
    const headerContainer = document.getElementById('header_content');
    const headerImage = document.getElementById('header_image');
    const topHeading = document.getElementById('top_heading');
    const ratings = document.getElementById('ratings');
    const enquiry_button = document.getElementById('enq_btn');
    const about_container = document.getElementById('abt_cnt');
    const key_highLights = document.getElementById('key_hls');
    const addr_dlt = document.getElementById('addr');
    const contactDtl = document.getElementById('cnt_dtl');
    const emailAddr = document.getElementById('email_addr');
    const galleryImgs = document.getElementById('img_gal');

    const paragraphs = allData[0].about.split('\n\n').map(p => `<p class="text-gray-600 mb-4">${p}</p>`).join('');

    if (allData) {
    headerContainer.innerHTML = `
      <h1 class="text-3xl md:text-4xl font-bold mb-2">${allData[0].header_title}</h1>
      <p class="text-lg md:text-xl opacity-90">${allData[0].header_subtitle}</p>
    `;
    headerImage.innerHTML = `
    <img src="${allData[0].display_image_url}" alt="instiute_image"></img>    
    `;
    ratings.innerHTML = `<p>${allData[0].rating}/5 (${allData[0].reviews_count})</p>`;
    topHeading.innerHTML = `${allData[0].header_title}`;
    enquiry_button.innerHTML = `
    <a href="#enquiry" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">Enquire Now</a>
    <a href="${allData[0].contact_website}" target="_blank" class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-300">Visit Website</a>
    `;
    about_container.innerHTML = `
     <h3 class="text-xl font-bold mb-4 text-gray-800">About ${allData[0].header_title}</h3>
       ${paragraphs}
    `;
    let keyHighLights = JSON.parse(allData[0].key_highlights);
    let highlights = '';
    keyHighLights.forEach(ele => {
       highlights += `<div class="flex items-start">
        <div class="flex-shrink-0 mt-1">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
        </div>
        <div class="ml-3">
            <p class="text-gray-700 font-medium">${ele}</p>
        </div>
      </div>`
    });
    key_highLights.innerHTML = highlights;

    addr_dlt.innerHTML = `<h4 class="font-medium text-gray-800 mb-2">Address:</h4><p class="text-gray-600">
                         ${allData[0].address} </p>`;

    contactNumbers = JSON.parse(allData[0].contact_number);
    let numbers = '';
    contactNumbers.forEach(num => {
        numbers += `<p class="text-gray-600">${num}</p>`;
    });
    contactDtl.innerHTML = numbers;
    emailAddress = JSON.parse(allData[0].contact_email);
    let email = '';
    emailAddress.forEach(mail => {
        email += `<p class="text-grey-600">${mail}</p>`;
    })
    emailAddr.innerHTML = email;
    imageGal = JSON.parse(allData[0].gallery_image);
    console.log(imageGal)
    let imgs = '';
    imageGal.forEach(img => {
         imgs += `<div class="gallery-item h-40 bg-gray-200 rounded-lg overflow-hidden">
                    <div class="w-full h-full flex items-center justify-center">
                            <img src="${img}"></img>
                    </div>
                </div>
                `;
    });
    galleryImgs.innerHTML = imgs;
  }
}




