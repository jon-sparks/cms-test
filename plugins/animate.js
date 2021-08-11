export default (context, inject) => {

  function animate(element){

    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`animate--in`)
        } else {
          entry.target.classList.remove(`animate--in`)
        }
      })
    }, {rootMargin: "0px 0px -100px 0px"})
    obs.observe(element)
  }
  
  inject(`animate`, animate);
  context.$animate = animate;
};