
const data = [
    {
        companyName: "Ikgiai Lab",
        companyLogo: "ikigai",
        description: "Link to nay pdf or document containing the jd if given",
        profile: "Data Science Internship",
        type: "Internship",
        compensation: 8000,
        formLink: "goggle form link to be present"
    },
    {
        companyName: "Algo 8",
        companyLogo: "algo",
        description: "Link to nay pdf or document containing the jd if given",
        profile: "Data Science Internship",
        type: "Full Time",
        compensation: 15000,
        formLink: "goggle form link to be present"
    },
    {
        companyName: "Algo 8",
        companyLogo: "algo",
        description: "Link to nay pdf or document containing the jd if given",
        profile: "Full Stack Development Internship",
        type: "Part Time",
        compensation: 25000,
        formLink: "goggle form link to be present"
    },

];

data.forEach((element, i) => {

    const career = document.querySelector('.career');
    console.log(career);

    const card = document.createElement('div');
    card.classList = 'card';

    const jobCard = `
        <h3 class="card-title">${data[i].companyName}</h3>
                    <div class="card-body">
                        <p class="card-text">Description : ${data[i].description}</p>
                        <p class="card-text">Profile : ${data[i].profile}</p>
                        <p class="card-text">Type : ${data[i].type}</p>
                        <p class="card-text">Compensation : ${data[i].compensation}</p>
                        <button><a href="${data[i].formLink}">Apply Now</a></button>
                    </div>
`;

    card.innerHTML += jobCard;
    career.appendChild(card);
})





