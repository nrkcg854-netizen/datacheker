const STORAGE_KEY = 'gigapace_state_v3';

const state = {
  plan: 50,
  used: 0
};

function init() {

  loadState();

  updateSliderMax();

  setupEventListeners();

  calculate();

  window.addEventListener('load', () => {
    document.getElementById('usedInput')?.focus();
  });
}

function setupEventListeners() {

  document.querySelectorAll('.plan-tab').forEach(btn => {

    btn.addEventListener('click', function() {

      document.querySelectorAll('.plan-tab')
        .forEach(b => b.classList.remove('active'));

      this.classList.add('active');

      state.plan = parseFloat(this.dataset.gb);

      document.getElementById('customPlan').value = '';

      updateSliderMax();

      calculate();

      saveState();

      trackPlan(state.plan);
    });
  });

  document.getElementById('customPlan')
    .addEventListener('input', function() {

      const val = parseFloat(this.value);

      if (val > 0) {

        state.plan = val;

        document.querySelectorAll('.plan-tab')
          .forEach(b => b.classList.remove('active'));

        updateSliderMax();

        calculate();

        saveState();
      }
  });

  document.getElementById('usedInput')
    .addEventListener('input', function() {

      let val = parseFloat(this.value) || 0;

      if (val < 0) val = 0;

      if (val > state.plan) val = state.plan;

      state.used = val;

      document.getElementById('slider').value = val;

      calculate();

      saveState();
  });

  // ① saveState()を追加
  document.getElementById('slider')
    .addEventListener('input', function() {

      state.used = parseFloat(this.value);

      document.getElementById('usedInput').value =
        state.used.toFixed(1);

      calculate();

      saveState();
  });

  // ダークモード
  const themeToggle = document.getElementById('themeToggle');

  function applyTheme(theme) {

    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    );

    localStorage.setItem('theme', theme);
  }

  themeToggle.addEventListener('click', () => {

    const isDark =
      document.documentElement.classList.contains('dark');

    applyTheme(isDark ? 'light' : 'dark');
  });

  // 関連記事CTR計測
  document.querySelectorAll('.related-link').forEach(link => {

    link.addEventListener('click', () => {

      if (typeof gtag !== 'undefined') {

        gtag('event', 'related_article_click', {
          article: link.href
        });
      }
    });
  });
}

function updateSliderMax() {

  document.getElementById('slider').max = state.plan;

  if (state.used > state.plan) {
    state.used = state.plan;
  }

  document.getElementById('slider').value = state.used;
}

function calculate() {

  const plan = state.plan;
  const used = state.used;

  const remain = plan - used;

  document.getElementById('remainVal').textContent =
    remain.toFixed(1);

  // ② remainMetaの更新コードを削除

  const pct = (used / plan) * 100;

  document.getElementById('pctText').textContent =
    Math.round(pct) + '%';

  const circumference = 565;

  const offset =
    circumference - (circumference * pct) / 100;

  const donutBar =
    document.getElementById('donutBar');

  requestAnimationFrame(() => {
    donutBar.style.strokeDashoffset = offset;
  });

  let color;

  if (pct <= 50) {
    color = 'var(--safe)';
  } else if (pct <= 80) {
    color = 'var(--warn)';
  } else {
    color = 'var(--danger)';
  }

  donutBar.style.stroke = color;

  document.getElementById('pctText').style.color = color;

  const now = new Date();

  const lastDay = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();

  const today = now.getDate();

  const daysLeft = lastDay - today + 1;

  document.getElementById('countdown').textContent =
    daysLeft + '日';

  const dailyAllowance = remain / daysLeft;

  document.getElementById('todayNum').textContent =
    dailyAllowance.toFixed(2);

  const dailyAvg = used / today;

  const forecast = dailyAvg * lastDay;

  document.getElementById('forecast').textContent =
    forecast.toFixed(1) + 'GB';

  let emoji;
  let text;

  if (pct <= 50) {

    emoji = '🎉';
    text = '超快適ペース';

  } else if (pct <= 70) {

    emoji = '✅';
    text = '安全なペース';

  } else if (pct <= 85) {

    emoji = '⚠️';
    text = 'やや注意';

  } else {

    emoji = '🚨';
    text = '要注意';

    if (typeof gtag !== 'undefined') {

      gtag('event', 'danger_zone', {
        percent: pct
      });
    }
  }

  document.getElementById('badgeEmoji').textContent = emoji;
  document.getElementById('badgeText').textContent = text;

  generateTips(pct);
}

function generateTips(pct) {

  const container =
    document.getElementById('tipsContainer');

  container.innerHTML = '';

  let tips = [];

  if (pct > 80) {

    tips.push({
      icon: '📵',
      title: 'バックグラウンド通信をOFF',
      desc: '設定 → データ使用量から制御'
    });

    tips.push({
      icon: '📶',
      title: 'Wi-Fi環境で動画視聴',
      desc: '動画通信量を大幅節約'
    });

  } else if (pct > 50) {

    tips.push({
      icon: '🎬',
      title: 'YouTube画質を480pへ',
      desc: '通信量をかなり削減できます'
    });

    tips.push({
      icon: '📲',
      title: 'SNS動画自動再生をOFF',
      desc: 'Instagram・TikTok対策'
    });

  } else {

    tips.push({
      icon: '🎯',
      title: 'かなり良いペースです',
      desc: '今の使い方なら安心です'
    });
  }

  tips.forEach(tip => {

    container.innerHTML += `
      <div class="tips-card">
        <div class="tips-icon">${tip.icon}</div>

        <div>
          <div class="tips-title">${tip.title}</div>
          <div class="tips-desc">${tip.desc}</div>
        </div>
      </div>
    `;
  });
}

function saveState() {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        plan: state.plan,
        used: state.used,
        month: new Date().getMonth()
      })
    );

  } catch(e) {}
}

function loadState() {

  try {

    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    const data = JSON.parse(saved);

    if (data.month !== new Date().getMonth()) {
      return;
    }

    state.plan = data.plan || 50;
    state.used = data.used || 0;

    document.getElementById('usedInput').value =
      state.used.toFixed(1);

    document.getElementById('slider').value =
      state.used;

    document.querySelectorAll('.plan-tab').forEach(btn => {

      btn.classList.toggle(
        'active',
        parseFloat(btn.dataset.gb) === state.plan
      );
    });

  } catch(e) {}
}

function trackPlan(plan) {

  if (typeof gtag !== 'undefined') {

    gtag('event', 'select_plan', {
      plan_size: plan
    });
  }
}

if (document.readyState === 'loading') {

  document.addEventListener(
    'DOMContentLoaded',
    init
  );

} else {

  init();
}
