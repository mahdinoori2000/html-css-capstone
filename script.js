const featureEl = document.querySelector('.feature-boxes');
const speakerEl = document.querySelector('.speakers');
const closeBtn = document.querySelector('.close-icon');
const menuBtn = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('.nav-list');

const mobileNav = () => {
  menuBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
  navMenu.classList.toggle('hidden');
};

menuBtn.addEventListener('click', mobileNav);
closeBtn.addEventListener('click', mobileNav);

const features = [
  {
    image: 'images/program_icon_01.png',
    title: 'Lecture',
    description:
      'Listen to the speakers from various countries about the messages of sharing and opening.',
  },
  {
    image: 'images/program_icon_02.png',
    title: 'CC Exhibition',
    description:
      'Listen to the speakers fro various countries about the messages of sharing and opening.',
  },
  {
    image: 'images/program_icon_03.png',
    title: 'Forum',
    description:
      'Listen to the speakers fro various countries about the messages of sharing and opening.',
  },
  {
    image: 'images/program_icon_04.png',
    title: 'Workshop',
    description:
      'Listen to the speakers fro various countries about the messages of sharing and opening.',
  },
  {
    image: 'images/program_icon_05.png',
    title: 'CC Ignite',
    description:
      'Listen to the speakers fro various countries about the messages of sharing and opening.',
  },
];
// const speaskers = [{}];
let featureTemp = '';
features.forEach((element) => {
  const featureCode = `<div class="feature-box">
          <img
            class="feature-logo"
            src="${element.image}"
            alt="Program icon"
          />
          <h3 class="feature-title">${element.title}</h3>
          <p class="feature-desc">
            ${element.description}
          </p>
        </div>`;
  featureTemp += featureCode;
});
featureEl.innerHTML = featureTemp;

// SPEAKERS
const speakers = [
  {
    image: 'images/speaker_01.png',
    fullName: 'Yochai Benkler',
    position:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    description:
      'Bankler studies commons-based peer production, and published his seminal book The Wealth of Neworks in 2006',
  },
  {
    image: 'images/speaker_02.png',
    fullName: 'Seong Noh',
    position:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    description:
      'Bankler studies commons-based peer production, and published his seminal book The Wealth of Neworks in 2006',
  },
  {
    image: 'images/speaker_03.png',
    fullName: 'Lila Tretikov',
    position:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    description:
      'Bankler studies commons-based peer production, and published his seminal book The Wealth of Neworks in 2006',
  },
  {
    image: 'images/speaker_04.png',
    fullName: 'Kilnam Chon',
    position:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    description:
      'Bankler studies commons-based peer production, and published his seminal book The Wealth of Neworks in 2006',
  },
  {
    image: 'images/speaker_05.png',
    fullName: 'Julia Leda',
    position:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    description:
      'Bankler studies commons-based peer production, and published his seminal book The Wealth of Neworks in 2006',
  },
  {
    image: 'images/speaker_06.png',
    fullName: 'Ryan Merkley',
    position:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    description:
      'Bankler studies commons-based peer production, and published his seminal book The Wealth of Neworks in 2006',
  },
];

let speakerTemp = '';
speakers.forEach((speaker) => {
  const speakerCode = `
  <div class="speaker-box">
  <img
    class="speaker-img"
    src="${speaker.image}"
    alt="Speaker Image"
  />
  <div class="speaker-details">
    <h3 class="speaker-name">${speaker.fullName}</h3>
    <p class="speaker-position">
      ${speaker.position}
    </p>
    <p class="speaker-desc">
      ${speaker.description}
    </p>
  </div>
</div>
    `;
  speakerTemp += speakerCode;
});
speakerEl.innerHTML = speakerTemp;
