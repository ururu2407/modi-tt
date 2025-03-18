const dataa = [
  {
    id: 1,
    text: '“I truly underestimated the impact this process, led by Lindsey, would have on my life . . . I have more time for reading, cooking, and spending time with my friends – the things that bring me true joy.”',
    author: 'Nicole',
    jobTitle: 'Nonprofit Fundraiser',
  },
  {
    id: 2,
    text: 'Lindsey provided a safe, comfortable space for us to articulate our dreams for why we wanted to get organized . . . This process really taught us the value of what we owned and changed how we wanted to live. There is absolutely no way we could have achieved our dream without Lindsey. We will forever be grateful for all of her help!!',
    author: 'Shana & Mike',
    jobTitle: 'IT Consultant and Mechanic',
  },
  {
    id: 3,
    text: 'Lindsey helped me put everything into perspective and helped me separate the emotional attachments (and sometimes guilt) for things I was holding on to but no longer needed or were mentally weighing me down . . . I can’t thank Lindsey enough for helping me over the mental hurdles.',
    author: 'Alicia',
    jobTitle: 'Event Planner',
  },
  {
    id: 4,
    text: 'The task can seem daunting, but Lindsey helps break it down into bite-sized attainable goals. The task can be hard mentally, but Lindsey brings beautiful patience and compassion to the project. I appreciated her guidance, her understanding and patience, and the sharing of the true joy she finds in helping others.',
    author: 'Becca',
    jobTitle: 'Nonprofit Fundraiser',
  },
  {
    id: 5,
    text: 'Lindsey has helped me get in touch with my why. My goal is to let go of everything I’m holding onto that I “should do” or “could do” so that I embrace inner peace.',
    author: 'Client',
  },
];

const sliderCon = document.getElementById('testimonials');

dataa.forEach((item) => {
  const div = document.createElement('div');
  div.classList.add('slide');
  div.classList.add('flex');
  div.classList.add('flex-col');
  div.innerHTML = `
   <div class="entry-content mt-[18px]">
      <p class="text-xl italic tracking-[1px]">${item.text}</p>
    </div>
    <div class="entry-header pt-3">
      <span class="entry-title font-bold text-[1.2rem]">${item.author}</span>
      ${item.jobTitle ? `<span class="entry-job-title">${item.jobTitle}</span>` : ''}
    </div>
`;
  sliderCon.appendChild(div);
});

$('.slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><</button>',
  nextArrow: '<button type="button" class="slick-next">></button>',
});
