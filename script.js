"use strict";


//  SERVICES 

const serviceItem = document.querySelectorAll(".service-item");

const serviceArr = [
    {img:"./images/web-design.jpg" , txtContent: "Website design is an important matter and should not be taken lightly. A well-designed website can help you form a good impression on your prospective customers. It can also help you nurture your leads and get more conversions.But, more importantly, it provides good user experience and helps your website visitors access and navigate your website with ease. So, if you are looking for designers to create your website, vet them well and ensure that they are capable of designing user-friendly and accessible websites"},
    {img:"./images/graphic-design.png" , txtContent: "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience"},
    {img:"./images/service-support.png" , txtContent: "Your customer support has a significant impact on customer satisfaction. Customers usually reach out to the customer support team when they are experiencing a problem with their purchased product or service. How your support team handles complaints can affect the level of customer satisfaction. "},
    {img:"./images/app-design.png" , txtContent: "App design is an ongoing process comprising user experience (UX) and user interface (UI) elements. Designers ideate, define solutions, create the app’s flow and structure, and make stylistic choices from colors to fonts. Designers base choices on user research and feedback. The result is an app that looks nice and is easy to use."},
    {img:"./images/online-marketing.png" , txtContent: "Online marketing connects organizations with qualified potential customers and takes business development to a much higher level than traditional marketing.Online marketing combines the internet’s creative and technical tools, including design, development, sales and advertising, while focusing on the following primary business models:E-commerce, Lead-based websites, Affiliate marketing, Local search, Social media"},
    {img:"./images/seo-services.jpg" , txtContent: "A few examples SEO services include: <br>Get help in specialized areas of SEO, like off-page, local, and technical SEO <br>Save time by outsourcing SEO tasks like keyword research, content creation, and link building <br>Improve return on investment (ROI) tracking with platforms like MarketingCloudFX <br>Optimize marketing budget (SEO services cost four times less annually than in-house teams)"},
]


function serviceActive(serviceArr) {
    document.querySelector('.service-list-text').innerHTML = serviceArr.txtContent;
    document.querySelector('.service-list-img').setAttribute("src", serviceArr.img);
}

serviceItem.forEach((item, index)=>{
    item.addEventListener('click', (event) => {
        
        serviceActive(serviceArr[index]);

    if (event.target.classList.contains('service-item')) {
      const activeItem = document.querySelector('.service-item-active');
      if (activeItem) {
        activeItem.classList.remove('service-item-active');
      }
      event.target.classList.add('service-item-active');
    }
  });
})




// Section "Our works"
let workList = document.querySelectorAll('.work-item');
let workItem = document.querySelectorAll('.work-info-item');

for(let i = 0; i < workList.length; i++){

workList[i].addEventListener('click', function() {
        workList.forEach(function(item){
            item.classList.remove('active');
        });

        this.classList.add('active');
        let dataWork = this.getAttribute('data-work');


    workItem.forEach(function(item){

        if(dataWork === "all"){
            document.querySelectorAll(".all").forEach(function(item){
                item.style.display = 'block';
            });
            hideItem();
        } else if(dataWork === 'graphic-design'){
            document.querySelectorAll(".all").forEach(function(item){
                item.style.display = 'none';
            })
            document.querySelectorAll("." + dataWork).forEach(function(item){
                item.style.display = 'block';
            });
        }
        else if(dataWork === 'web-design'){
            document.querySelectorAll(".all").forEach(function(item){
                item.style.display = 'none';
            })
            document.querySelectorAll("." + dataWork).forEach(function(item){
                item.style.display = 'block';
            });
        }
        else if(dataWork === 'landing-pages'){
            document.querySelectorAll(".all").forEach(function(item){
                item.style.display = 'none';
            })
            document.querySelectorAll("." + dataWork).forEach(function(item){
                item.style.display = 'block';
            });
        }
        else if(dataWork === 'wordpress'){
            document.querySelectorAll(".all").forEach(function(item){
                item.style.display = 'none';
            })
            document.querySelectorAll("." + dataWork).forEach(function(item){
                item.style.display = 'block';
            });
        }
      
    })
    })
}

// hide 12 items

let loadMore = document.querySelectorAll('.load-more');

function hideItem(){
    loadMore.forEach(function(item){
        item.style.display = 'none'
    })
}

hideItem();


// button load

let btnLoad = document.getElementById('load-more-btn');

btnLoad.addEventListener('click' , (function(){
    btnLoad.textContent = "Loading..."
    btnLoad.classList.add('loading');

    setTimeout(function(){
        btnLoad.classList.remove('loading');

        loadMore.forEach(function(item){
            item.style.display = 'block';
        });

            btnLoad.style.display = 'none';

    }, 3000)

    
}));




//  slider 

// member info array
const memberArr = [
    {name: "Anna Brien", position: "UX Designer", img: "./images/member-1.jfif"},
    {name: "Max Mettew", position: "Graphic Designer", img: "./images/member-2.jpg"},
    {name: "Jenifer Piers", position: "Landing Designer", img: "./images/member-3.jpg"},
    {name: "Axel Roundy", position: "Wordpress Designer", img: "./images/member-4.jpg"},
]

// gallery content = main member info
function chooseAnotherMember(memberArr){
    document.querySelector('.member-name').textContent = memberArr.name;
    document.querySelector('.member-position').textContent = memberArr.position;
    document.querySelector('.member-photo-main').setAttribute("src", memberArr.img);
}


let memberIndex = 0;

//slider click
const prevButton = document.querySelector('#btn-prev');
prevButton.addEventListener('click', () => {
    memberIndex--;
  if (memberIndex < 0) {
    memberIndex = memberArr.length - 1;
  }
  chooseAnotherMember(memberArr[memberIndex]);
});

const nextButton = document.querySelector('#btn-next');
nextButton.addEventListener('click', () => {
    memberIndex++;
  if (memberIndex >= memberArr.length) {
    memberIndex = 0;
  }
  chooseAnotherMember(memberArr[memberIndex]);
});


// choose with small photo
let smallMemberGallery = document.querySelectorAll('.member-gallery');

smallMemberGallery.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        memberIndex = index;
        chooseAnotherMember(memberArr[memberIndex]);
    })
})




// masonry

$(document).ready(function(){
    jQuery('.grid-item').hover(
        function(){
            $(this).find('.cover-item-grid').fadeIn();
        },
        function(){
            $(this).find('.cover-item-grid').fadeOut();

        });


$(document).ready(function(){
    let gallery = $('#gallery');
    gallery.masonry({
      itemSelector: '.size-gallery',
      columnWidth: gallery.width() / 3,
    });
  });
  
 
})


// Cover on the screen

$('.cover-item-grid a').on('click', function(event) {
    event.preventDefault();
    
    let imgSrc = $(this).closest('.grid-item').find('img').attr('src');
    
    let $fullImg = $('<img>').attr('src', imgSrc).addClass('full-image');
    $('body').append($fullImg);
    
    $fullImg.on('click', function() {
      $(this).remove();
    });
  });


//   load more gallery 

const btnLoadGallery = document.getElementById('load-gallery-btn');
const loadGallery = document.querySelectorAll('.load-gallery');

// btnLoadGallery.addEventListener('click' , (function(){


    
//     btnLoadGallery.textContent = "Loading..."
//     btnLoadGallery.classList.add('loading');

//     setTimeout(function(){
//         btnLoadGallery.classList.remove('loading');

//         loadGallery.forEach((item)=>
//         item.classList.remove('load-gallery')
//     );

//         btnLoadGallery.style.display = 'none';

//     }, 2000)

//     })  
// );

  