/* GSC Fukushima Hub - Script
 * Global Shapers Community Fukushima Hub
 */

// Language toggle
const body = document.body;
document.querySelectorAll('.lt-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const lang = this.dataset.lang;
    body.className = 'lang-' + lang;
    document.querySelectorAll('.lt-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.documentElement.lang = lang;
  });
});

// Mobile menu
function closeMob() {
  document.getElementById('mobile-menu').style.display = 'none';
  document.getElementById('hamburger').classList.remove('open');
}
document.getElementById('hamburger').addEventListener('click', function() {
  var menu = document.getElementById('mobile-menu');
  var open = menu.style.display === 'flex';
  menu.style.display = open ? 'none' : 'flex';
  this.classList.toggle('open', !open);
});

// Scroll animations
const io = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      setTimeout(() => el.target.classList.add('visible'), 70 * (el.target.dataset.i || 0));
      io.unobserve(el.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up, .value-row, .cstat, .mcard').forEach((el, i) => {
  el.dataset.i = i % 5;
  io.observe(el);
});

// Member modal
const memberData = {
  'rika-nomura': {
    badges: [{year:'FY2025', role:'Curator', cls:'curator'}, {role:'Founding Curator', cls:'founding'}],
    name: '野村吏花 (Rika Nomura)',
    nickname: 'りかまんぼう',
    role: 'Founding Curator & Curator',
    country: '福島市',
    affiliation: 'ファミリーホームまる家 / 福島県庁観光交流課 国際担当\nGlobal Shapers Community 沖縄Hub Outgoing-Vice Curator 2023',
    speciality: '観光・国際交流、子どもの社会的養護',
    hobby: 'イモリウム（アカハライモリ、苔、シダ植物）',
    hashtags: ['#イモリ'],
    message: '福島の魅力を世界に発信することで、福島の人の暮らしがよくなるように工夫したいです。グローバルな視点を持って、福島と向き合える人を増やしていきたいです。',
    sns: [['Facebook','https://www.facebook.com/nomurarika22/'],['Instagram','https://www.instagram.com/rika_manbo/']]
  },
  'chihiro-ando': {
    badges: [{year:'FY2025', role:'Vice Curator', cls:'curator'}],
    name: 'Chihiro Ando',
    role: 'Vice Curator',
    country: 'From Koriyama city, Fukushima, JAPAN',
    affiliation: 'Japan Social Innovation Center JSIC / i.school\nWIRED Sci-fi prototyping research lab (Design researcher)\nGlobal Shapers Community Yokohama Hub, Vice Curator 2024',
    speciality: 'Art Urbanism, Design Research, Education',
    hobby: 'Taking a walk, Farm hopping, Ramen eater 🍜',
    hashtags: ['#innovationeducation','#urban','#public&art'],
    message: "I work as a design researcher and planner in several educational institutions and research labs. I'm interested in creating an environment full of creativity related to art and design, such as civic art activities, artist residency. I am a member of Fukushima-bu. Looking forward to seeing you all!",
    sns: [['Facebook','https://www.facebook.com/andochihiro1011/'],['Instagram','https://www.instagram.com/chihiroando_1011/?hl=ja']]
  },
  'airi-shirado': {
    badges: [{role:'Global Shaper'}],
    name: 'Airi Shirado',
    role: 'Global Shaper',
    country: 'Iwaki city, Fukushima, Japan',
    affiliation: 'SYSTEM FORWARD INC. (CS)',
    speciality: 'Dialogue, Community',
    hobby: '吹奏楽 (B.sax 🎷), かぎ編み 🧶, 短歌 📜',
    hashtags: [],
    message: '福島が、県内外に限らず多くの人が当事者性を感じながら誇りを持てる場所になれば嬉しいです。皆様と繋がれるのもとても楽しみです👏',
    sns: [['Facebook','https://www.facebook.com/airidolidle']]
  },
  'akane-sawasato': {
    badges: [{year:'FY2026', role:'Curator', cls:'curator'}],
    name: 'Akane Sawasato',
    role: 'Global Shaper',
    country: 'Yokohama',
    affiliation: 'The Japanese Clinical Integrative Medicine Society and few more',
    speciality: 'Medicine, Public Health',
    hobby: 'Travel',
    hashtags: [],
    message: "My passion is using science and healthcare to help communities heal, grow, and reconnect—especially in places like Fukushima, where resilience and innovation can shape a better future. I'm excited to join you all!",
    sns: [['LinkedIn','https://www.linkedin.com/in/akane-sawasato-796a98216?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOV6uZR22Q9O%2BIiaAt2Bh1A%3D%3D']]
  },
  'hiroki-yanagida': {
    badges: [{role:'Global Shaper'}],
    name: 'Hiroki Yanagida',
    nickname: 'Hiroki',
    role: 'Global Shaper',
    country: 'Kawasaki City, Kanagawa / Father from Nihonmatsu, Fukushima',
    affiliation: 'Founder & CEO of Aizunoaitsu Co., Ltd. / Sales at Sansan Inc.',
    speciality: 'Cultural Branding, Local Revitalization, Project Design',
    hobby: 'Driving, Talking by the irori, Making rice balls, Night walks by rivers, Mahjong',
    hashtags: [],
    message: "I'm excited to collaborate with all of you to bridge local culture and global innovation.",
    sns: [['Facebook','https://www.facebook.com/profile.php?id=100014841465281'],['Instagram','https://www.instagram.com/_hiroki_0707/']]
  },
  'kazuki-koma': {
    badges: [{role:'Global Shaper'}],
    name: 'Kazuki Koma',
    role: 'Global Shaper',
    country: 'Tokyo, Japan',
    affiliation: 'Rikkyo University',
    speciality: 'SMEs (Small and Medium Enterprises)',
    hobby: 'Reading books, Music, Cycling',
    hashtags: ['#Foods'],
    message: "I have been involved in Odaka, Minami Soma City, for a year now. Odaka has a unique energy and vibe. Such like India. Through this experience, I would like to get to know other areas and people in Fukushima. I'm looking forward to see you!!",
    sns: [['Facebook','https://www.facebook.com/share/16Yw6RfEB8/?mibextid=wwXIfr'],['Instagram','https://www.instagram.com/koma_0413?igsh=MWFhY20zdGRqMm0zbA%3D%3D&utm_source=qr']]
  },
  'kensho-sotome': {
    badges: [{role:'Global Shaper'}],
    name: 'Kensho Sotome',
    role: 'Global Shaper',
    country: 'Grew up across the U.S., Shanghai, and Japan — currently based in Kawagoe, Saitama',
    affiliation: 'CONCENT Inc. (Strategic Design Group)',
    speciality: 'Design Research, Prototyping, Human-centered Design',
    hobby: '',
    hashtags: [],
    message: "Growing up across the U.S., China, and Japan, I learned to see the world through many lenses. I'm passionate about using design as a tool to connect people across boundaries — cultural, generational, or emotional — and to shape futures together, one dialogue at a time. I'm excited to shape new narratives with the people of Fukushima.",
    sns: [['Facebook','https://www.facebook.com/profile.php?id=100085722982517'],['Instagram','https://www.instagram.com/unaponnn/']]
  },
  'minami-nakamura': {
    badges: [{role:'Global Shaper'}],
    name: 'Minami Nakamura',
    nickname: 'Minami',
    role: 'Global Shaper',
    country: 'Tokyo, U.S., Barcelona',
    affiliation: 'UTokyo College of Design / Laere inc.',
    speciality: 'Systemic Design, Education, Art, Design Research',
    hobby: '',
    hashtags: [],
    message: "I'm interested in exploring how narratives and co-creation can help shape better conditions for both society and the environment. I'm especially drawn to regional areas in Japan and around the world, and to the often overlooked stories of the people who live there. I'm really looking forward to getting to know Fukushima and all of you!",
    sns: [['LinkedIn','https://www.linkedin.com/in/minami-nakamura-795669204/']]
  },
  'takuto-kodama': {
    badges: [{role:'Global Shaper'}],
    name: '児玉拓人 (Takuto Kodama)',
    nickname: 'たくと',
    role: 'Global Shaper',
    country: '広島市',
    affiliation: '双葉町役場 復興推進課',
    speciality: '文学、人事',
    hobby: '旅行 ✈️、カメラ 📷',
    hashtags: [],
    message: '様々な人々が福島という場所に集い、何かを生み出す・生み出される環境を作っていきたいなと思っています！よろしくお願いします🙌',
    sns: [['Facebook','https://www.facebook.com/share/1EUtD4Z4pp/?mibextid=wwXIfr'],['Instagram','https://www.instagram.com/takuto_dama']]
  },
  'yu-inoue': {
    badges: [{year:'FY2026', role:'Impact Officer', cls:'curator'}],
    name: 'Yu Inoue',
    nickname: 'Yu',
    role: 'Global Shaper',
    country: 'Fukushima city, Fukushima, Japan',
    affiliation: 'Fukushima Medical University Hospital',
    speciality: 'Medicine',
    hobby: 'Playing musical instruments, Engaging in dialogue, Watching movies',
    hashtags: ['#Medicine','#dialogue','#movie'],
    message: 'As a former evacuee and a current physician, I wish to take action for the sake of my hometown. I will live my life together with this land.',
    sns: [['Facebook','https://www.facebook.com/profile.php?id=100004892656316'],['Instagram','https://www.instagram.com/yu_ohanabatake/']]
  },
  'yuya-takahashi': {
    badges: [{year:'FY2026', role:'Vice Curator', cls:'curator'}],
    name: 'Yuya Takahashi',
    nickname: 'Yuya',
    role: 'Global Shaper',
    country: 'Otama village, Fukushima',
    affiliation: 'Representative Director of Spread From Fukushima (general incorporated association)',
    speciality: 'Business administration, Education, Start-up, Regional Revitalization',
    hobby: 'Sports, Reading, Travel, Talk',
    hashtags: [],
    message: "I'm really excited to meet new people, run various projects, and create a better Fukushima! Also I'm looking forward to seeing you all!",
    sns: [['Facebook','https://www.facebook.com/share/1Ba7u8pDTX/?mibextid=wwXIfr'],['Instagram','https://www.instagram.com/yuya.t.3128?igsh=MTIxYTRoc25qdWF1ZQ%3D%3D&utm_source=qr']]
  },
  'yingmei-lin': {
    badges: [{role:'Global Shaper'}],
    name: 'Yingmei Lin (Lin-chan)',
    role: 'Global Shaper',
    country: 'China & Japan',
    affiliation: 'Graduate student of GSFS, UTokyo',
    speciality: 'Architecture, Community, Urban',
    hobby: 'Orchestra (flute), Town walk',
    hashtags: ['#architecture','#autonomy','#eastasia'],
    message: "Fukushima is a place that holds special meaning for me. Although I first visited only two years ago, it now feels like a hometown to me. Let's bring new energy and vitality to Fukushima!",
    sns: [['Facebook','https://www.facebook.com/eimi.yingmei.lin/'],['Instagram','https://www.instagram.com/_lineimi/']]
  },
  'yuta-noji': {
    badges: [{year:'FY2025', role:'Impact Officer', cls:'curator'}],
    name: 'Yuta Noji',
    role: 'Alumni',
    country: 'from Fukushima, JAPAN',
    affiliation: 'Beyond Lab Inc. CEO / U Share Inc. (Community Manager)\nGlobal Shapers Community Yokohama Hub, Outgoing-Impact Officer 2023',
    speciality: 'Education, Intercultural Communication, Study abroad',
    hobby: 'Camping, Traveling, Making costume',
    hashtags: ['#halloween','#fukushima','#minnesota','#outdoor'],
    message: "I have organized international exchange program for teenagers in Fukushima. I'd like to build intercultural environment in local school. I moved to Tokyo last year from Namie Town. I'm also a member of Fukushima-bu.",
    sns: [['Facebook','https://www.facebook.com/yuta.noji.12'],['Instagram','https://www.instagram.com/yuta_noji95/']]
  }
};


// Shared badge renderer (used by both cards and modal)
function renderBadges(badges, container) {
  container.innerHTML = '';
  if (!badges || !badges.length) return;
  badges.forEach(function(b) {
    if (b.year) {
      var y = document.createElement('div');
      y.className = 'myear';
      var yn = b.year.replace('FY', '');
      y.innerHTML = '<span class="ja">' + yn + '年度</span><span class="en">' + b.year + '</span>';
      container.appendChild(y);
    }
    var r = document.createElement('div');
    r.className = 'mrole' + (b.cls ? ' ' + b.cls : '');
    r.textContent = b.role;
    container.appendChild(r);
  });
}

// Render badges on member cards from memberData (single source of truth)
function initCardBadges() {
  document.querySelectorAll('.mcard[data-member]').forEach(function(card) {
    var key = card.dataset.member;
    var d = memberData[key];
    if (!d || !d.badges) return;
    var info = Array.from(card.children).find(function(el) { return !el.classList.contains('mavatar'); });
    if (!info) return;
    info.querySelectorAll('.myear, .mrole').forEach(function(el) { el.remove(); });
    var bc = document.createElement('div');
    bc.className = 'mbadges';
    renderBadges(d.badges, bc);
    info.appendChild(bc);
  });
}

function openMemberModal(key) {
  const d = memberData[key];
  if (!d) return;
  const modal = document.getElementById('member-modal');

  const card = document.querySelector('[data-member="' + key + '"]');
  const avatarSrc = card ? card.querySelector('.mavatar img, .mavatar svg') : null;
  const avatarEl = document.getElementById('mmodal-avatar');
  avatarEl.innerHTML = '';
  if (avatarSrc) avatarEl.appendChild(avatarSrc.cloneNode(true));

  document.getElementById('mmodal-name').textContent = d.name;
  var roleEl = document.getElementById('mmodal-role');
  roleEl.innerHTML = '';
  if (d.badges) {
    var bc = document.createElement('div');
    bc.className = 'mbadges mbadges--modal';
    renderBadges(d.badges, bc);
    roleEl.appendChild(bc);
  } else {
    roleEl.textContent = d.role;
  }
  document.getElementById('mmodal-country').textContent = d.country || '';

  const body = document.getElementById('mmodal-body');
  body.innerHTML = '';

  function row(label, val) {
    if (!val) return;
    const r = document.createElement('div');
    r.className = 'mmodal-row';
    r.innerHTML = '<div class="mmodal-label">' + label + '</div><div class="mmodal-val">' + val + '</div>';
    body.appendChild(r);
  }

  if (d.nickname) row('呼び名 / Nickname', d.nickname);
  if (d.affiliation) row('Affiliation', d.affiliation.replace(/\n/g,'<br>'));
  if (d.speciality) row('Speciality', d.speciality);
  if (d.hobby) row('Hobby', d.hobby);
  if (d.hashtags && d.hashtags.length) {
    row('Hashtags', d.hashtags.map(h => '<span class="mmodal-tag">' + h + '</span>').join(''));
  }

  if (d.message) {
    const msg = document.createElement('div');
    msg.className = 'mmodal-message';
    msg.textContent = d.message;
    body.appendChild(msg);
  }

  if (d.sns && d.sns.length) {
    const sns = document.createElement('div');
    sns.className = 'mmodal-sns';
    d.sns.forEach(function(item) {
      const a = document.createElement('a');
      a.href = item[1];
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = item[0];
      sns.appendChild(a);
    });
    body.appendChild(sns);
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMemberModal() {
  document.getElementById('member-modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.mcard[data-member]').forEach(function(card) {
  card.addEventListener('click', function() { openMemberModal(card.dataset.member); });
});
initCardBadges();


document.getElementById('mmodal-close').addEventListener('click', closeMemberModal);
document.getElementById('mmodal-overlay').addEventListener('click', closeMemberModal);
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeMemberModal(); });


/* ── TADAIMA FUKUSHIMA PHOTO GALLERY ── */
(function() {
  var PROXY = 'https://api.allorigins.win/get?url=';
  var TARGET = 'https://tadaima-fukushima.jp/';
  var allImages = [];

  function extractImages(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var imgs = [];
    doc.querySelectorAll('img').forEach(function(img) {
      var src = img.src || img.getAttribute('src') || '';
      // resolve relative URLs against target origin
      if (src && !src.startsWith('data:')) {
        try {
          var abs = new URL(src, TARGET).href;
          // filter out tiny icons/logos (need meaningful photos)
          if (/\.(jpe?g|png|webp)/i.test(abs) &&
              !/logo|icon|avatar|banner|noimage|placeholder|dummy|blank/i.test(abs)) {
            imgs.push(abs);
          }
        } catch(e) {}
      }
    });
    // also check srcset
    doc.querySelectorAll('[srcset]').forEach(function(el) {
      el.getAttribute('srcset').split(',').forEach(function(part) {
        var url = part.trim().split(/\s+/)[0];
        if (url) {
          try {
            var abs = new URL(url, TARGET).href;
            if (/\.(jpe?g|png|webp)/i.test(abs)) imgs.push(abs);
          } catch(e) {}
        }
      });
    });
    // deduplicate
    return imgs.filter(function(v, i, a) { return a.indexOf(v) === i; });
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  function renderGallery(images) {
    var grid = document.getElementById('tadaima-gallery-grid');
    if (!grid) return;
    var candidates = shuffle(images.slice());
    var idx = 0;
    function tryNext() {
      if (idx >= candidates.length) {
        showError('画像を取得できませんでした / Could not load images');
        return;
      }
      var src = candidates[idx++];
      grid.innerHTML = '';
      var item = document.createElement('div');
      item.className = 'gallery-item';
      var img = document.createElement('img');
      img.alt = 'Tadaima Fukushima';
      img.onload = function() { img.classList.add('loaded'); };
      img.onerror = tryNext;
      img.src = src;
      item.appendChild(img);
      grid.appendChild(item);
    }
    tryNext();
  }

  function showError(msg) {
    var grid = document.getElementById('tadaima-gallery-grid');
    if (grid) grid.innerHTML = '<div class="gallery-error">' + msg + '</div>';
  }

  function loadGallery() {
    if (allImages.length > 0) { renderGallery(allImages); return; }
    var grid = document.getElementById('tadaima-gallery-grid');
    if (grid) grid.innerHTML = '<div class="gallery-loading"><span class="gallery-spinner"></span></div>';

    fetch(PROXY + encodeURIComponent(TARGET))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var html = data.contents || '';
        allImages = extractImages(html);
        if (allImages.length === 0) {
          showError('画像を取得できませんでした / Could not load images');
        } else {
          renderGallery(allImages);
        }
      })
      .catch(function() {
        showError('読み込みに失敗しました / Failed to load');
      });
  }

  document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
    var btn = document.getElementById('gallery-shuffle');
    if (btn) btn.addEventListener('click', function() { renderGallery(allImages); });
    // auto-shuffle every hour
    setInterval(function() { renderGallery(allImages); }, 60 * 60 * 1000);
  });
})();
