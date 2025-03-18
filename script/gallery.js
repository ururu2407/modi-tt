const data = [
  {
    id: 1,
    imgUrl:
      'https://web.archive.org/web/20241221001945/https://getorganizedyall.com/wp-content/uploads/sb-instagram-feed-images/278353302_552250933083578_5065941140932862223_nlow.jpg',
    likes: '4',
    comments: '3',
  },
  {
    id: 2,
    imgUrl:
      'https://web.archive.org/web/20241221001944/https://getorganizedyall.com/wp-content/uploads/sb-instagram-feed-images/273515358_631257004821813_2176843006746604933_nlow.jpg',
    likes: '9',
    comments: '2',
  },
  {
    id: 3,
    imgUrl:
      'https://web.archive.org/web/20221108232328/https://getorganizedyall.com/wp-content/uploads/sb-instagram-feed-images/260275632_118168837258991_4229553493636386239_nlow.jpg',
    likes: '10',
    comments: '6',
  },
  {
    id: 4,
    imgUrl:
      'https://web.archive.org/web/20221108232328/https://getorganizedyall.com/wp-content/uploads/sb-instagram-feed-images/179974349_1287947988695187_4773716806131453418_nlow.jpg',
    likes: '18',
    comments: '0',
  },
];

const gallery = document.getElementById('sbi_images');

data.forEach((item) => {
  const div = document.createElement('div');
  div.classList.add('sbi_item');
  div.classList.add('w-1/2');
  div.classList.add('sm:w-1/4');
  div.classList.add('inline-block');
  div.classList.add('align-top');
  div.innerHTML = `
    <div class="sbi_photo_wrap overflow-hidden relative">
          ${
            item.id === 1
              ? '<svg class="copy absolute top-2 right-2 w-[23px] z-[1]" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path></svg>'
              : ''
          }
          <div class="sbi_link">
            <div class="sbi_hover_top"></div>
              <div class="sbi_hover_bottom">
                <div class="sbi_meta">
                  <span class="sbi_likes">
                    <svg
                      class="svg-inline--fa fa-heart fa-w-18"
                      aria-hidden="true"
                      data-fa-processed=""
                      data-prefix="fa"
                      data-icon="heart"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                      fill="currentColor"
                      d="M414.9 24C361.8 24 312 65.7 288 89.3 264 65.7 214.2 24 161.1 24 70.3 24 16 76.9 16 165.5c0 72.6 66.8 133.3 69.2 135.4l187 180.8c8.8 8.5 22.8 8.5 31.6 0l186.7-180.2c2.7-2.7 69.5-63.5 69.5-136C560 76.9 505.7 24 414.9 24z"
                      ></path>
                    </svg>
                    ${item.likes}
                  </span>
                  <span class="sbi_comments">
                    <svg
                      class="svg-inline--fa fa-comment fa-w-18"
                      aria-hidden="true"
                      data-fa-processed=""
                      data-prefix="fa"
                      data-icon="comment"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M576 240c0 115-129 208-288 208-48.3 0-93.9-8.6-133.9-23.8-40.3 31.2-89.8 50.3-142.4 55.7-5.2.6-10.2-2.8-11.5-7.7-1.3-5 2.7-8.1 6.6-11.8 19.3-18.4 42.7-32.8 51.9-94.6C21.9 330.9 0 287.3 0 240 0 125.1 129 32 288 32s288 93.1 288 208z"
                       ></path>
                    </svg>
                    ${item.comments}
                  </span>
                </div>
              </div>
              <a href="#" class="sbi_link_area"></a>
            </div>
            <a href="#" class="sbi_photo">
              <img src=${item.imgUrl} alt="sad" />
            </a>
          </div>
      `;
  gallery.appendChild(div);
});
