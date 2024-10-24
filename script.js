document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lucide icons
  lucide.createIcons();

  // Sidebar collapse functionality
  const sidebar = document.querySelector(".sidebar");
  const collapseBtn = document.getElementById("collapse-btn");
  const collapseBtnText = collapseBtn.querySelector("span");
  const collapseBtnIcon = collapseBtn.querySelector("i");

  collapseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    if (sidebar.classList.contains("collapsed")) {
      collapseBtnText.textContent = "";
      collapseBtnIcon.setAttribute("data-lucide", "chevron-right");
    } else {
      collapseBtnText.textContent = "Collapse";
      collapseBtnIcon.setAttribute("data-lucide", "chevrons-left");
    }
    lucide.createIcons();
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
  });

  // Chart initialization
  const ctx = document.getElementById("registrationChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [600, 950, 800, 400, 1000, 600, 400, 900, 700, 950, 600, 600],
          backgroundColor: "#8576FF",
          barThickness: 20,
          borderRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            color: "#E5E7EB",
          },
          ticks: {
            stepSize: 200,
          },
        },
      },
    },
  });

  // Carousel functionality
  const carousel = document.querySelector(".carousel");
  const carouselItems = carousel.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  const dotsContainer = document.querySelector(".carousel-dots");
  let currentSlide = 0;

  function showSlide(index) {
    carouselItems.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
    document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function createDots() {
    for (let i = 0; i < carouselItems.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("carousel-dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
      dotsContainer.appendChild(dot);
    }
  }

  prevBtn.addEventListener("click", () => {
    currentSlide =
      (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
  });

  createDots();
  showSlide(currentSlide);
  setInterval(nextBtn, 5000); // Auto-slide every 5 seconds

  // Events table population and pagination
  const eventsData = [
    {
      name: "Cloud Innovation Summit",
      date: "2024-10-15",
      speaker: "Jane Doe",
      status: "Completed",
    },
    {
      name: "Blockchain Revolution Conference",
      date: "2024-11-05",
      speaker: "Dr. Peter Smith",
      status: "In Progress",
    },
    {
      name: "AI in Healthcare Symposium",
      date: "2024-12-01",
      speaker: "Dr. Aisha Malik",
      status: "Completed",
    },
    {
      name: "Future of Fintech Forum",
      date: "2024-10-25",
      speaker: "John Lee",
      status: "Completed",
    },
    {
      name: "Data Analytics in Business",
      date: "2024-11-12",
      speaker: "Rachel Moore",
      status: "Completed",
    },
    {
      name: "Smart Cities Forum",
      date: "2024-10-18",
      speaker: "Dr. Maria Hernandez",
      status: "In Progress",
    },
    {
      name: "Tech Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: "In Progress",
    },
    {
      name: "AI Ethics Symposium",
      date: "2024-11-25",
      speaker: "Prof. Sarah Johnson",
      status: "Completed",
    },
    {
      name: "Quantum Computing Workshop",
      date: "2024-12-05",
      speaker: "Dr. Michael Chen",
      status: "In Progress",
    },
    {
      name: "Smart Cities Forum",
      date: "2024-10-18",
      speaker: "Dr. Maria Hernandez",
      status: "In Progress",
    },
    {
      name: "Tech Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: "In Progress",
    },
    {
      name: "AI Ethics Symposium",
      date: "2024-11-25",
      speaker: "Prof. Sarah Johnson",
      status: "Completed",
    },
    {
      name: "Smart Cities Forum",
      date: "2024-10-18",
      speaker: "Dr. Maria Hernandez",
      status: "In Progress",
    },
    {
      name: "Tech Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: "In Progress",
    },
    {
      name: "AI Ethics Symposium",
      date: "2024-11-25",
      speaker: "Prof. Sarah Johnson",
      status: "Completed",
    },
    {
      name: "Quantum Computing Workshop",
      date: "2024-12-05",
      speaker: "Dr. Michael Chen",
      status: "In Progress",
    },
    {
      name: "Robotics in Manufacturing",
      date: "2024-10-20",
      speaker: "Eng. Robert Taylor",
      status: "Completed",
    },
    {
      name: "Augmented Reality Expo",
      date: "2024-11-15",
      speaker: "Lisa Wong",
      status: "In Progress",
    },
    {
      name: "Quantum Computing Workshop",
      date: "2024-12-05",
      speaker: "Dr. Michael Chen",
      status: "In Progress",
    },
    {
      name: "Robotics in Manufacturing",
      date: "2024-10-20",
      speaker: "Eng. Robert Taylor",
      status: "Completed",
    },
    {
      name: "Augmented Reality Expo",
      date: "2024-11-15",
      speaker: "Lisa Wong",
      status: "In Progress",
    },
    {
      name: "Robotics in Manufacturing",
      date: "2024-10-20",
      speaker: "Eng. Robert Taylor",
      status: "Completed",
    },
    {
      name: "Augmented Reality Expo",
      date: "2024-11-15",
      speaker: "Lisa Wong",
      status: "In Progress",
    },
    {
      name: "Sustainable Energy Expo",
      date: "2024-09-28",
      speaker: "Prof. Alan Green",
      status: "Completed",
    },
    {
      name: "Web3 Interfaces Workshop",
      date: "2024-10-10",
      speaker: "Kevin Adams",
      status: "In  Progress",
    },
    {
      name: "Cybersecurity for Startups",
      date: "2024-11-19",
      speaker: "Emily Zhang",
      status: "Completed",
    },
    {
      name: "Smart Cities Forum",
      date: "2024-10-18",
      speaker: "Dr. Maria Hernandez",
      status: "In Progress",
    },
    {
      name: "Tech Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: "In Progress",
    },
    {
      name: "AI Ethics Symposium",
      date: "2024-11-25",
      speaker: "Prof. Sarah Johnson",
      status: "Completed",
    },
    {
      name: "Quantum Computing Workshop",
      date: "2024-12-05",
      speaker: "Dr. Michael Chen",
      status: "In Progress",
    },
    {
      name: "Robotics in Manufacturing",
      date: "2024-10-20",
      speaker: "Eng. Robert Taylor",
      status: "Completed",
    },
    {
      name: "Augmented Reality Expo",
      date: "2024-11-15",
      speaker: "Lisa Wong",
      status: "In Progress",
    },
    {
      name: "Blockchain for Supply Chain",
      date: "2024-12-10",
      speaker: "David Miller",
      status: "Completed",
    },
  ];

  const tableBody = document.getElementById("events-table-body");
  const pagination = document.getElementById("pagination");
  const rowsPerPageSelect = document.getElementById("rows-per-page");
  const displayedResults = document.getElementById("displayed-results");
  const totalResults = document.getElementById("total-results");
  const sortSelect = document.querySelector(".sort-container select");
  const prevPageBtn = document.getElementById("prev-page");
  const nextPageBtn = document.getElementById("next-page");

  let currentPage = 1;
  let rowsPerPage = parseInt(rowsPerPageSelect.value);

  function displayTable(page, rows) {
    tableBody.innerHTML = "";
    let start = (page - 1) * rows;
    let end = start + rows;
    let paginatedItems = eventsData.slice(start, end);

    paginatedItems.forEach((event) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${event.name}</td>
                <td>${event.date}</td>
                <td>${event.speaker}</td>
                <td><span class="status-badge ${event.status
                  .toLowerCase()
                  .replace(" ", "-")}">${event.status}</span></td>
            `;
      tableBody.appendChild(row);
    });

    displayedResults.textContent =
      end > eventsData.length ? eventsData.length : end;
    totalResults.textContent = eventsData.length;
  }

  function setupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = "";
    let pageCount = Math.ceil(items.length / rowsPerPage);
    for (let i = 1; i < pageCount + 1; i++) {
      let btn = paginationButton(i, items);
      wrapper.appendChild(btn);
    }
  }

  function paginationButton(page, items) {
    let button = document.createElement("button");
    button.innerText = page;

    if (currentPage == page) button.classList.add("active");

    button.addEventListener("click", function () {
      currentPage = page;
      displayTable(currentPage, rowsPerPage);

      let currentBtn = document.querySelector(".pagination button.active");
      currentBtn.classList.remove("active");

      button.classList.add("active");
    });

    return button;
  }

  function updatePaginationButtons() {
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled =
      currentPage === Math.ceil(eventsData.length / rowsPerPage);
  }

  rowsPerPageSelect.addEventListener("change", function () {
    rowsPerPage = parseInt(this.value);
    currentPage = 1;
    displayTable(currentPage, rowsPerPage);
    setupPagination(eventsData, pagination, rowsPerPage);
    updatePaginationButtons();
  });

  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayTable(currentPage, rowsPerPage);
      updatePaginationButtons();
    }
  });

  nextPageBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(eventsData.length / rowsPerPage)) {
      currentPage++;
      displayTable(currentPage, rowsPerPage);
      updatePaginationButtons();
    }
  });

  sortSelect.addEventListener("change", function () {
    const sortBy = this.value;
    eventsData.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "date") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === "speaker") {
        return a.speaker.localeCompare(b.speaker);
      } else if (sortBy === "status") {
        return a.status.localeCompare(b.status);
      }
    });
    displayTable(currentPage, rowsPerPage);
    updatePaginationButtons();
  });

  displayTable(currentPage, rowsPerPage);
  setupPagination(eventsData, pagination, rowsPerPage);
  updatePaginationButtons();

  // Search functionality
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredData = eventsData.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm) ||
        event.speaker.toLowerCase().includes(searchTerm) ||
        event.status.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    displayTable(currentPage, rowsPerPage);
    setupPagination(filteredData, pagination, rowsPerPage);
    updatePaginationButtons();
  });
});
// Modal functionality
const modal = document.getElementById("event-modal");
const closeBtn = modal.querySelector(".close");

tableBody.addEventListener("click", function (e) {
  if (e.target.closest("tr")) {
    const eventName = e.target.closest("tr").cells[0].textContent;
    const eventDate = e.target.closest("tr").cells[1].textContent;
    showModal(eventName, eventDate);
  }
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

function showModal(name, date) {
  document.getElementById("modal-event-name").textContent = name;
  document.getElementById(
    "modal-event-date"
  ).textContent = `Event Date: ${date}`;
  document.getElementById("modal-event-description").textContent =
    "Event Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  document.getElementById("modal-event-speakers").textContent =
    "3 Guest Speakers";
  document.getElementById("modal-event-attendees").textContent =
    "300 Attendees";
  modal.style.display = "block";
}

// Accessibility improvement: close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});
