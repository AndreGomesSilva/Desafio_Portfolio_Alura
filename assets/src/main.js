function app(){
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('nav ul li');

  if (window.matchMedia("(min-width:700px)").matches){
    window.addEventListener('scroll', () => {
      let current = '';
      let color = 'white'
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id')
        }
      })
  
      switch (current) {
        case 'home':
          color = "deepskyblue";
          break;
        case 'about':
          color = "orange";
          break;
        case 'skills':
          color = "firebrick";
          break;
        case 'project':
          color = "gold";
          break;
        case 'hobbies':
          color = "magenta";
          break;
        case 'contact':
          color = "darkblue";
          break;
      }
  
      navLi.forEach(li => {
  
        li.classList.remove("active");
  
        if (li.classList.contains(current)) {
  
          li.classList.add('active')
        }
        if (!li.classList.contains('active')) {
          li.style.opacity = "0.25"
          li.style.borderBottom = "thick solid #262626";
        } else {
          li.style.borderBottom = `2px solid ${color}`;
          li.style.opacity = "1"
        }
  
      })
    })
  }
 
}; app();