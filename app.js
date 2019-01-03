const studentListUL = document.querySelector(".student-list");
const studentListLI = studentListUL.children;
const paginationUL = document.querySelector(".pagination");

const numberOfPages = getNumberOfPages(studentListLI.length);


// Function that takes the number of names and return pages needed. 
function getNumberOfPages(students) {
    let pagesNeeded = Math.floor(students / 10);
    if ((students % 10) > 0) {
        pagesNeeded++;
    }
    return pagesNeeded;
}

function displayPagesNavigation() {
    for (let i = 1; i <= numberOfPages; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = i;
        li.appendChild(a);
        paginationUL.appendChild(li);
    }
}


function highlightPageNumber(pageNumber) {
    const navItems = paginationUL.querySelectorAll("li > a")
    for (let i = 0; i < numberOfPages; i++) {
        const a = navItems[i];
        a.classList.remove("active");
    }
    navItems[pageNumber - 1].classList.add("active");
}

function hideAllListItems() {
    for (let i = 0; i < studentListLI.length; i++) {
        studentListLI[i].style.display = "none";
    }
}

function showListItems(start, end) {
    hideAllListItems();
    for (let i = start; i < end; i++) {
        studentListLI[i].style.display = null;
    }
}

function showPage(pageNumber) {
    if (Math.ceil(studentListLI.length / 10) === parseInt(pageNumber)) {
        showListItems((pageNumber * 10) - 10, studentListLI.length);
    } else {
        showListItems((pageNumber * 10) - 10, pageNumber * 10);
    }
}

paginationUL.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        const pageNumber = e.target.textContent;
        showPage(pageNumber);
        highlightPageNumber(pageNumber);
    }
});

displayPagesNavigation();

showListItems(0, 10);
highlightPageNumber(1);