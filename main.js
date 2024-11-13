const close = document.querySelector("#close");
const menu = document.querySelector("#menu");
const sidebar = document.querySelector(".sidebar");

const products = [
  {
      image: "./assets/section3-images/f1.jpg",
      company: "Adidas",
      price: 78,
      description: "Cartoon Astronaut T-Shirt"
  },
  {
      image: "./assets/section3-images/f2.jpg",
      company: "Nike",
      price: 95,
      description: "Classic Running T-Shirt"
  },
  {
      image: "./assets/section3-images/f3.jpg",
      company: "Puma",
      price: 85,
      description: "Vintage Graphic Tee"
  },
  {
      image: "./assets/section3-images/f4.jpg",
      company: "Reebok",
      price: 72,
      description: "Urban Fit T-Shirt"
  },
  {
      image: "./assets/section3-images/f5.jpg",
      company: "Under Armour",
      price: 90,
      description: "Compression Sports Shirt"
  },
  {
      image: "./assets/section3-images/f6.jpg",
      company: "New Balance",
      price: 88,
      description: "Athletic Essentials T-Shirt"
  },
  {
      image: "./assets/section3-images/f7.jpg",
      company: "Fila",
      price: 80,
      description: "Retro Stripe Tee"
  },
  {
      image: "./assets/section3-images/f8.jpg",
      company: "Champion",
      price: 75,
      description: "Champion Logo T-Shirt"
  },
];

const NewProducts = [
    {
      image: "./assets/Electronics/1.png",
      company: "Sony",
      price: 299,
      description: "Wireless Noise-Canceling Headphones"
    },
    {
      image: "./assets/Electronics/2.png",
      company: "Samsung",
      price: 1200,
      description: "Galaxy Tab S8 Ultra"
    },
    {
      image: "./assets/Electronics/3.png",
      company: "Apple",
      price: 999,
      description: "iPhone 14 Pro Max"
    },
    {
      image: "./assets/Electronics/4.png",
      company: "Dell",
      price: 850,
      description: "Inspiron 15 Laptop"
    },
    {
      image: "./assets/Electronics/5.png",
      company: "HP",
      price: 750,
      description: "Pavilion x360 Convertible"
    },
    {
      image: "./assets/Electronics/6.png",
      company: "Apple",
      price: 999,
      description: "iPhone 14 Pro Max"
    },
    {
      image: "./assets/Electronics/7.png",
      company: "Bose",
      price: 249,
      description: "SoundLink Revolve+ Speaker"
    },
    {
      image: "./assets/Electronics/8.png",
      company: "Sony",
      price: 599,
      description: "Sony Bravia Curve Tv"
    }
];
  

const showCards = () => {
  let clutter = "";
  products.forEach((product) => {
    
    clutter += `<a href="#">
        <div class="card">
            <div class="photo">
                <img src="${product.image}">
            </div>
            <div class="desc">
                <p>${product.company}</p>
                <h4>${product.description}</h4>
                <div>
                    <h4 id="price">$ ${product.price}</h4>
                    <i class="ri-shopping-cart-2-line"></i>
                </div>
            </div>
        </div>
    </a>`;
  })
  document.querySelector(".section3 .card-section").innerHTML = clutter;            
}
showCards();

const ElectronicProducts = () => {
  let clutter = "";
  NewProducts.forEach((product) => {
    
    clutter += `<a href="#">
                    <div class="card">
                        <div class="photo">
                            <img src="${product.image}">
                        </div>
                        <div class="desc">
                            <p>${product.company}</p>
                            <h4>${product.description}</h4>
                            <div>
                                <h4 id="price">$ ${product.price}</h4>
                                <i class="ri-shopping-cart-2-line"></i>
                            </div>
                        </div>
                    </div>
                </a>`;
  })
  document.querySelector(".section5 .card-section").innerHTML = clutter;    
}
ElectronicProducts();



























const navAnimation = () => {
    let mm = gsap.matchMedia();
    mm.add("(min-width:500px)",()=>{
    let tl = gsap.timeline();
    tl.from("nav h2",{
        opacity:0,
        duration:0.5,
        x:-100
    })
    tl.from("nav a",{
        opacity:0,
        stagger:0.1,
        x:-100
    })
})
}
// navAnimation();

const sidebarAnimation = () => {
    gsap.set(sidebar, { x: '100%' });
    menu.addEventListener("click", () => {
        gsap.to(sidebar, {
            duration: 0.5, // Adjust duration for speed
            x: '0%', // Slide into view from the right
            display: 'block', // Make sidebar visible
            ease: 'power2.out' // Ease type for smooth transition
        });
    });
    close.addEventListener("click", () => {
        gsap.to(sidebar, {
            duration: 0.5,
            x: '100%', // Slide out of view to the right
            display: 'none',
            ease: 'power2.in' // Ease type for smooth transition
        });
    });
}
// sidebarAnimation();

const section1Animation = () =>{
    let mm = gsap.matchMedia();

    mm.add("(min-width:501px)",()=>{
        let tl = gsap.timeline();
        tl.from(".section1 h2",{
            delay:1.3,
            opacity:0,
            duration:0.3,
            y:30
        })
        tl.from(".section1 h1",{
            opacity:0,
            duration:0.3,
            y:30
        })
        tl.from(".section1 p",{
            opacity:0,
            duration:0.3,
            y:30
        })
        tl.from(".section1 button",{
            opacity:0,
            duration:0.3,
            y:30
        })
    })
    mm.add("(max-width:500px)",()=>{
        let tl = gsap.timeline();
        tl.from(".section1 h2",{
            opacity:0,
            duration:0.3,
            x:-30
        })
        tl.from(".section1 h1",{
            opacity:0,
            duration:0.3,
            x:-30
        })
        tl.from(".section1 p",{
            opacity:0,
            duration:0.3,
            x:-30
        })
        tl.from(".section1 button",{
            opacity:0,
            duration:0.3,
            x:-30
        })
        tl.from(".section1 img",{
            opacity:0,
            duration:0.3,
            scale:0
        })
    })
    
}
// section1Animation();

const cardAnimations = () => {
    let mm = gsap.matchMedia();
    mm.add("(min-width:500px)",()=>{
        gsap.from(".section2 .box",{
            opacity:0,
            scale:0,
            duration:1,
            scrollTrigger:{
                trigger:".section2 .box",
                scroller:"body",
                scrub:1
            }
        })
        gsap.from(".section3 .card",{
            opacity:0,
            scale:0,
            duration:1,
            stagger:1,
            scrollTrigger:{
                trigger:".section2 .box",
                // markers:true,
                start:"top 15%",
                scroller:"body",
                scrub:5
            }
        })
        gsap.from(".section5 .card",{
            opacity:0,
            scale:0,
            duration:1,
            stagger:1,
            scrollTrigger:{
                trigger:".section5 .card",
                start:"top 100%",
                end:"bottom 60%",
                scroller:"body",
                scrub:5
            }
        })

    })
    let mn = gsap.matchMedia();
    mn.add("(max-width:500px)",()=>{
        gsap.from(".section2 .box",{
            opacity:0,
            scale:0,
            duration:1,
            scrollTrigger:{
                trigger:".section2 .box",
                scroller:"body",
                scrub:1
            }
        })
        gsap.utils.toArray(".section3 .card").forEach((card, i) => {
            gsap.fromTo(card, 
                { opacity: 0, scale: 0.5 }, // initial state
                { 
                    opacity: 1, 
                    scale: 1, 
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%", // when the top of the card hits 80% of the viewport height
                        end: "top 30%", // when the top of the card reaches 30% of the viewport height
                        markers: true,
                        toggleActions: "play none none reverse", // play forward on enter, reverse on exit
                    }
                }
            );
        });
        gsap.utils.toArray(".section5 .card").forEach((card, i) => {
            gsap.fromTo(card, 
                { opacity: 0, scale: 0.5 }, // initial state
                { 
                    opacity: 1, 
                    scale: 1, 
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%", // when the top of the card hits 80% of the viewport height
                        end: "top 30%", // when the top of the card reaches 30% of the viewport height
                        markers: true,
                        toggleActions: "play none none reverse", // play forward on enter, reverse on exit
                    }
                }
            );
        });
        
        
    })
    
}
// cardAnimations();


