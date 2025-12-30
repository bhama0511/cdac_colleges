const data = [
    {
        "id": "sunbeam",
        "name": "Sunbeam Infotech Pune",
        "header_text": "One of the premier CDAC authorized training centers in Pune with excellent placement records and industry-focused curriculum.",
        "about": "Sunbeam Infotech Pune is one of the most reputed CDAC authorized training centers in Pune, established in 1999. With over two decades of experience in IT education, Sunbeam has built a strong reputation for quality training and excellent placements./nSunbeam Pune is located in the heart of the city at Hinjewadi Phase I, making it easily accessible for students. The institute offers various CDAC courses including PG-DAC, PG-DBDA, PG-DITISS, and PG-DESD with state-of-the-art infrastructure and experienced faculty.",
        "image": "https://tse4.mm.bing.net/th/id/OIP.SxtVsRv-i2_7KX4pJ2bHiQHaIn?w=149&h=180&c=7&r=0&o=5&dpr=2.2&pid=1.7",
        "location": {
            "address": "Plot No. 98/3-4, Rajiv Gandhi Infotech Park, Hinjewadi Phase I, Pune - 411057, Maharashtra, India",
            "contact": [
                "info@sunbeaminfo.com",
                "admissions@sunbeaminfo.com"
            ],
            "website":"https://www.sunbeaminfo.com"
        },
        "highlights": [
            "20+ years of experience in IT education",
            "90%+ placement record",
            "Industry-experienced faculty",
            "Modern infrastructure with well-equipped labs"
        ],
        "courses": [
            {
                "code": "PG-DAC",
                "name": "Post Graduate Diploma in Advanced Computing",
                "duration": "6 months",
                "fees": "90,000",
                "placement_rate": "95"
            },
            {
                "code": "PG-DBDA",
                "name": "Post Graduate Diploma in Big Data Analytics",
                "duration": "6 months",
                "fees": "95,000",
                "placement_rate": "90"
            }
        ],
        "placements": {
            "summary": {
                "overall_rate": "95%",
                "average_package": "₹6.5 LPA",
                "highest_package": "₹18 LPA"
            }
        },
        "facilities": [
            "Computer Labs",
            "Smart Classrooms",
            "Library",
            "Seminar Hall",
            "Cafeteria"
        ]
    },
    {
        "id": "mku",
        "name": "Malkapur Infotech Pune",
        "header_text": "One of the premier CDAC authorized training centers in Pune with excellent placement records and industry-focused curriculum.",
        "about": "Sunbeam Infotech Pune is one of the most reputed CDAC authorized training centers in Pune, established in 1999. With over two decades of experience in IT education, Sunbeam has built a strong reputation for quality training and excellent placements.",
        "image": "https://tse4.mm.bing.net/th/id/OIP.SxtVsRv-i2_7KX4pJ2bHiQHaIn?w=149&h=180&c=7&r=0&o=5&dpr=2.2&pid=1.7",
        "location": {
            "address": "Plot No. 98/3-4, Rajiv Gandhi Infotech Park, Hinjewadi Phase I, Pune - 411057, Maharashtra, India",
            "email": [
                "info@sunbeaminfo.com",
                "admissions@sunbeaminfo.com"
            ]
        },
        "highlights": [
            "20+ years of experience in IT education",
            "90%+ placement record",
            "Industry-experienced faculty",
            "Modern infrastructure with well-equipped labs"
        ],
        "courses": [
            {
                "code": "PG-DAC",
                "name": "Post Graduate Diploma in Advanced Computing",
                "duration": "6 months",
                "fees": "₹90,000 + GST",
                "placement_rate": "95%"
            },
            {
                "code": "PG-DBDA",
                "name": "Post Graduate Diploma in Big Data Analytics",
                "duration": "6 months",
                "fees": "₹95,000 + GST",
                "placement_rate": "90%"
            }
        ],
        "placements": {
            "summary": {
                "overall_rate": "95%",
                "average_package": "₹6.5 LPA",
                "highest_package": "₹18 LPA"
            }
        },
        "facilities": [
            "Computer Labs",
            "Smart Classrooms",
            "Library",
            "Seminar Hall",
            "Cafeteria"
        ]
    }
];


async function loadPageData() {
    const params = new URLSearchParams(location.search);
    let id = params.get("id");

    if (!id) {
        console.error("No id parameter in URL");
        return;
    }

    // remove accidental quotes if present
    id = id.replace(/^['"]|['"]$/g, "");

    // data is already loaded in your script
    const institute = data.find(item => item.id === id);

    if (!institute) {
        console.error("No institute found with id:", id);
        document.body.innerHTML = "<h2>Institute not found</h2>";
        return;
    }

    console.log("Loaded institute:", institute);
    renderPage(institute);
}

function renderPage(data) {
    const elems = document.getElementsByClassName("instName");
    for (const el of elems) {
        el.textContent = data.name;
    }

    document.getElementById("about").innerHTML = data.about;
    document.getElementById("header-text").innerHTML = data.header_text;

    const container = document.getElementById("highlightsContainer");
    //highlights
    data.highlights.forEach(text => {
        const div = document.createElement("div");
        div.className = "flex items-start";

        div.innerHTML = `
    <div class="flex-shrink-0 mt-1">
      <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"></path>
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-gray-700 font-medium">${text}</p>
    </div>
  `;

        container.appendChild(div);
    });
    // document.getElementById("header-text").innerHTML = data.header_text;
    document.getElementById("address").innerHTML = data.location.address;


    const contactContainer = document.getElementById("contactContainer");
    data.location.contact.forEach(text => {
        const div = document.createElement("div");
        div.className = "flex items-start";

        div.innerHTML = `
    ${text}<br>
  `;

        contactContainer.appendChild(div);
    });

    // document.getElementById("image").innerHTML =  <img src={data.image} alt="Icon" class="w-full h-full object-contain" />
    // …render other sections…

    //courses
    const coursesContainer = document.getElementById("coursesContainer");
    data.courses.forEach(course => {
        const div = document.createElement('div');
        div.className = "flex items-start";

        div.innerHTML = `
         <div
                                        class="course-card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                        <div class="bg-indigo-600 text-white py-3 px-4">
                                            <h4 class="font-bold text-lg">${course.code}</h4>
                                            <p class="text-sm text-indigo-100">${course.name}</p>
                                        </div>
                                        <div class="p-4">
                                            <div class="mb-4">
                                                <div class="flex justify-between mb-1">
                                                    <span class="text-sm font-medium text-gray-700">Popularity</span>
                                                    <span class="text-sm font-medium text-gray-700">85%</span>
                                                </div>
                                                <div class="progress-bar">
                                                    <div class="progress-bar-fill bg-blue-500" style="width: 85%"></div>
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <p class="text-gray-600 text-sm mb-2">Duration: <span
                                                        class="font-medium">${course.duration}</span></p>
                                                <p class="text-gray-600 text-sm mb-2">Fees: <span
                                                        class="font-medium">₹${course.fees}+ GST</span></p>
                                                <p class="text-gray-600 text-sm mb-2">Batch Size: <span
                                                        class="font-medium">40 students</span></p>
                                                <p class="text-gray-600 text-sm">Placement Rate: <span
                                                        class="font-medium">${course.placement_rate}%</span></p>
                                            </div>
                                            
                                            <!-- <a href="#enquiry" class="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-300">Enquire Now</a> -->
                                        </div>
                                    </div>
    `
        coursesContainer.appendChild(div);
    });

     const siteContainer = document.getElementById("instituteSite");

        siteContainer.innerHTML = `
    <a href='${data.location.website}' target="_blank"
                        class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-300">Visit
                        Institute Website</a>
  `;

   const imageContainer = document.getElementById("imageContainer");

        imageContainer.innerHTML = `
    <img src='${data.image}'
                            alt="Icon" class="w-full h-full object-contain" />
  `;
    
}

loadPageData();
