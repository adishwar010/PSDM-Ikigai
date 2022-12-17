
const data = [
    {
        companyName: "National Chung Cheng University",
        // companyLogo: " ",
        description: "https://teep.studyintaiwan.org/program/65",
        profile: "Data Science Internship",
        type: "Internship",
        compensation: 8000,
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeHB8lT_VrYRTCBzIrm-TyyUunCZ3S-PdZ2grGaT6x7mvsfHw/viewform?usp=sf_link"

    },
    {
        companyName: "Digital India Corporation",
        companyLogo: " ",
        description: "https://dic.gov.in/images/career/Advertisement-Textile.pdf",
        profile: "Senior Developer, Developer, Designer, Software Tester cum Developer, System Administrator, Content Manager",
        type: "Job",
        compensation: "Rs 50000 to Rs 120000",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0Su7ohgpHO7DFH_wR578wi0YqiY-l4T7I8Cu4z7KGDdhRcQ/viewform?usp=sf_link"

    },
    {
        companyName: "ERNET INDIA",
        // companyLogo: " ",
        description: "https://www.meity.gov.in/writereaddata/files/Detailed-window-advertisement.pdf",
        profile: "Project Manager, Network Engineer, Documentation Engineer",
        type: "Job",
        compensation: "Rs 25000 to Rs 80000",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfRubgALW_LfWXvlw5RgJpttFLpWxwGJEytdbrX_dKO67qOUA/viewform?usp=sf_link"

    },
    {
        companyName: "Digital India Corporation",
        // companyLogo: " ",
        description: "https://dic.gov.in/images/career/Adv-DevDotnet.pdf",
        profile: "Developer (DotNet)",
        type: "Job (Contract Basis)",
        compensation: "Up to Rs.90,000/- PM (Commensurate with Qualifications, skills and experience)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfh9oTa04UjT-g5QAjJFDha9yZcick-b-QreChoxcZdbV33PA/viewform?usp=sf_link "
    },
    {
        companyName: "Airport Authority of India",
        // companyLogo: " ",
        description: "https://www.aai.aero/sites/default/files/examdashboard_advertisement/Advertisement_for_Engagement_of_Grad_and_Diploma_Apprentices_in_AAI.pdf",
        profile: "Graduate and Technical Apprentice",
        type: "Apprenticeship",
        compensation: 15000,
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdmyTei6VJL1q59BFtkUcC6QHrE8qt2skZHZ55pcXWj9jqmqg/viewform?usp=sf_link"

    }


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





