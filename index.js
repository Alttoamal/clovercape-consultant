function toggleMenu() {
    var menu = document.querySelector(".child-nav-container");
    menu.classList.toggle("show-menu");
  }

  function toggleBorder(element) {
    var allLinks = document.querySelectorAll(
      ".nav-container-wrapper ul li a"
    );
    allLinks.forEach(function (link) {
      link.parentNode.classList.remove("active");
    });
    element.parentNode.classList.add("active");
  }

  function toggleBorders(element) {
    var allLinks = document.querySelectorAll(
      ".child-nav-container ul li a"
    );
    allLinks.forEach(function (link) {
      link.parentNode.classList.remove("active");
    });
    element.parentNode.classList.add("active");
  }

  function toggleMenus() {
    var navContainer = document.querySelector(".child-nav-container");
    navContainer.style.display =
      navContainer.style.display === "none" ? "block" : "none";
  }

  function hideMenuOnLargeScreens() {
    var screenWidth = window.innerWidth;
    var navContainer = document.querySelector(".child-nav-container");
    if (screenWidth > 768) {
      navContainer.style.display = "none";
    }
  }
  window.addEventListener("resize", hideMenuOnLargeScreens);
  hideMenuOnLargeScreens();
  const accSingleTriggers = document.querySelectorAll(
    ".js-acc-single-trigger"
  );
  function updateTextColor(selectElement) {
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var dropdown = document.getElementById("service");
    dropdown.style.color = "black"; // Set the desired color here
    selectedOption.style.color = "black"; // Set the desired color here
  }
  //scroll top
  let mybutton = document.getElementById("myBtn");
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  const currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(topScroll);
  }
}

function topScroll() {
  const currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  const newScroll = currentScroll - currentScroll / 8;

  window.scrollTo(0, newScroll);

  if (newScroll > 0) {
    window.requestAnimationFrame(topScroll);
  }
}

// nav scroll down
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    var sectionOffset = section.offsetTop;
    window.scrollTo({
      top: sectionOffset,
      behavior: "smooth"
    });
  } else {
    window.location.href = "index.html#" + sectionId;
  }
}

  
  

  const testimonials = [
    {
      text: "*Rohini's talent and experience as a recruitment agency assistant immediately shined. She quickly learned our process and became integral to our company's functionality. Being an aviation recruitment agency, there is usually a learning curve to learning aircraft names and codes. Still, Rohini learned them very quickly and spoke of them with tremendous confidence. I cannot recommend Rohini enough; her positive attitude and wide range of knowledge will be an asset to any organization. We will be working with Rohini again very soon.\"",
      author: "Burke Mckenzie",
      image: "assets/Burke.png",
    },
    {
      text: '*Rohini is attentive, honest, and works with integrity. She takes great pride in her work and wants to make sure the job is done well. Her work is detail oriented and her attention to detail is unmatched. Great hire!"',
      author: "Eden Broggie",
      image: "assets/Eden.png",
    },
    {
      text: "*Rohini is one of the best freelancers I've had the opportunity to work with. Very professional at her work, trustworthy, good English skills, great communication - very happy with our collaboration. I highly recommend her!\"",
      author: "Ian Klein",
      image: "assets/Ian Klein.png",
    },

    {
      text: '*Rohini worked diligently to find and apply for jobs in my field. Most of these jobs were perfect! She utilized my resume and cover letters. I received so many job interviews based on her hard work. I didn’t require her to keep a regular schedule, but she did on her own and informed me if she wouldn’t be able to work or work an extended amount of time. I’d recommend her for good work and excellent communication."',
      author: "Thelma Syed",
      image: "assets/Klein.png",
    },

    {
      text: "*It was a pleasure working with Rohini on QuickBooks task. She was fast, professional and completed the job well. Looking forward to working with her again soon",
      author: "Perry Kemp",
      image: "assets/Klein.png",
    },

    {
      text: "*Rohini was hired to rewrite resumes which she did so well, succinctly, and on time. Would rehire her in a heartbeat!",
      author: "Al Youn",
      image: "assets/Klein.png",
    },
  ];

  let currentTestimonialIndex = 0;

  const testimonialTextElement =
    document.getElementById("testimonial-text");
  const testimonialAuthorElement =
    document.getElementById("testimonial-author");
  const testimonialImageElement = document.querySelector(".klein-img");

  function showTestimonial(index) {
    const testimonial = testimonials[index];
    const testimonialContainer = document.querySelector(
      ".testimonial-container"
    );

    // Fade out the testimonial container
    testimonialContainer.style.opacity = 0;

    // Wait for a short delay before updating testimonial content and fading it back in
    setTimeout(() => {
      testimonialTextElement.textContent = testimonial.text;
      testimonialAuthorElement.textContent = testimonial.author;
      testimonialImageElement.src = testimonial.image;

      // Update the slide number
      const slideNumber = index + 1;
      const totalSlides = testimonials.length;
      const slideNumberText = `${slideNumber}/${totalSlides}`;
      document.querySelector(".centered-text span").textContent =
        slideNumberText;

      // Fade in the testimonial container
      testimonialContainer.style.opacity = 1;
    }, 300); // Adjust this delay as needed for the transition speed
  }
  function nextTestimonial() {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonials.length) {
      currentTestimonialIndex = 0;
    }
    showTestimonial(currentTestimonialIndex);
  }

  function prevTestimonial() {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
      currentTestimonialIndex = testimonials.length - 1;
    }
    showTestimonial(currentTestimonialIndex);
  }

  // Show initial testimonial
  showTestimonial(currentTestimonialIndex);
  let autoplayInterval;

  function startAutoplay() {
    autoplayInterval = setInterval(nextTestimonial, 3000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
  }

  // Start autoplay when the page loads
  startAutoplay();