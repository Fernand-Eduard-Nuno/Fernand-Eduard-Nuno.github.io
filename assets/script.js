document.addEventListener("DOMContentLoaded", function() {
    fetch("education.json")
    .then(response => response.json())
    .then(data => {
        let timeline = document.querySelector(".timeline");
        timeline.innerHTML = ""; // Clear static content

        data.forEach(item => {
            let html = `
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h2>${item.degree} <span>${item.year}</span></h2>
                        <p><strong>${item.institution}</strong></p>
                        <p>Field: ${item.field}</p>
                        <h3>Thesis</h3>
                        <p><i>"${item.thesis}"</i></p>
                        <h3>Awards & Recognition</h3>
                        ${item.awards.map(award => `<span class="award">${award}</span>`).join("")}
                    </div>
                </div>
            `;
            timeline.innerHTML += html;
        });
    });
});
