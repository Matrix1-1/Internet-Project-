document.addEventListener('DOMContentLoaded', () => {
    const departmentFilter = document.getElementById('department-filter');
    const levelFilter = document.getElementById('level-filter');
    const searchInput = document.getElementById('search-input');
    const courseCards = document.querySelectorAll('.course-card');

    // Function to filter courses
    function filterCourses() {
        const departmentValue = departmentFilter.value;
        const levelValue = levelFilter.value;
        const searchValue = searchInput.value.toLowerCase();

        courseCards.forEach(card => {
            const cardDepartment = card.getAttribute('data-department');
            const cardLevel = card.getAttribute('data-level');
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDescription = card.querySelector('p').textContent.toLowerCase();

            const departmentMatch = departmentValue === 'all' || cardDepartment === departmentValue;
            const levelMatch = levelValue === 'all' || cardLevel === levelValue;
            const searchMatch = searchValue === '' || 
                              cardTitle.includes(searchValue) || 
                              cardDescription.includes(searchValue);

            if (departmentMatch && levelMatch && searchMatch) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add event listeners
    departmentFilter.addEventListener('change', filterCourses);
    levelFilter.addEventListener('change', filterCourses);
    searchInput.addEventListener('input', filterCourses);

    // Add animation on hover for course cards
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Add click event for course links
    document.querySelectorAll('.course-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const courseCard = link.closest('.course-card');
            const courseInfo = courseCard.querySelector('.course-info');
            
            courseInfo.classList.toggle('expanded');
            
            if (courseInfo.classList.contains('expanded')) {
                link.textContent = 'Show Less';
                courseInfo.style.maxHeight = courseInfo.scrollHeight + 'px';
            } else {
                link.textContent = 'View Details';
                courseInfo.style.maxHeight = '150px';
            }
        });
    });

    // Initialize tooltips for course details
    document.querySelectorAll('.course-details li').forEach(item => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = item.getAttribute('title');
        item.appendChild(tooltip);

        item.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        });

        item.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });
    });
}); 