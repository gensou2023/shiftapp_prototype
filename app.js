/* ===== Sample Data (85名 — 実データの構造を再現、名前はすべてダミー) ===== */
// Compact format: [id, name, dept, skill, daysStr, slotsStr, rate, weight, note]
// dept: A=出荷・検品, B=入荷・仕分け, C=物流・加工, D=夜間作業
const _raw = [
  // === A: 出荷・検品（日勤）37名 ===
  ['a01','佐藤 浩司','A',5,'月火水木金','早遅',1200,2.0,'班長・フォークリフト資格'],
  ['a02','加藤 隆太','A',2,'土日','早',1000,0.7,'シフト制・不定期'],
  ['a03','鈴木 真理','A',4,'月火水木金','早',1100,1.4,'週5（土日祝休）'],
  ['a04','高橋 ナオミ','A',4,'月火水木金','早遅',1100,1.5,'週5（土日休）'],
  ['a05','伊藤 光男','A',1,'','',1000,0.3,'退職予定'],
  ['a06','マリア ロサ','A',3,'月火水木金土','早',1050,1.1,'シフト制'],
  ['a07','中村 亜希','A',3,'月火水木','早',1050,1.2,'週4（金土日祝休）'],
  ['a08','小林 和子','A',3,'月火水木金','早',1050,1.2,'週5（土日祝休）'],
  ['a09','松本 幸子','A',2,'月火水土','早',1000,0.9,'扶養内・シフト制'],
  ['a10','井上 恵美','A',3,'月水金','遅',1050,1.1,'週3（火木土日休）'],
  ['a11','木村 凛','A',2,'月火水','遅',1000,0.8,'扶養内・シフト制'],
  ['a12','林 奈美','A',3,'月火木金','早',1050,1.2,'週4（水土日祝休）'],
  ['a13','清水 修一','A',4,'月火木金','遅',1150,1.5,'週4（水土日休）'],
  ['a14','阿部 昌也','A',2,'木金','遅',1000,0.7,'週2（月火水土日休）'],
  ['a15','池田 龍','A',2,'月火水木','遅',1000,0.8,'扶養内・シフト制'],
  ['a16','橋本 聖月','A',1,'月火水','遅',1000,0.5,'扶養内・シフト制'],
  ['a17','小川 啓介','A',3,'月火水','遅',1050,1.0,'週3（木金土日休）'],
  ['a18','岡田 康介','A',2,'','遅',1000,0.7,'シフト制・不定期'],
  ['a19','後藤 壮太','A',3,'月火木金','遅',1050,1.1,'シフト制'],
  ['a20','近藤 優梨','A',3,'月火水木金土','早遅',1050,1.2,'シフト制'],
  ['a21','斎藤 美智代','A',4,'月火水木金','早',1100,1.4,'週5（土日休）'],
  ['a22','遠藤 房代','A',4,'月火水木金土','早遅',1100,1.5,'シフト制OK'],
  ['a23','太田 良有','A',4,'月火水金土日','早遅',1100,1.4,'週5（水木休）'],
  ['a24','三浦 怜美','A',2,'月火木金','早',1000,0.9,'週3-4（土日祝休）'],
  ['a25','原田 義一','A',4,'月火水木金','早遅',1150,1.6,'週5（土日祝休）'],
  ['a26','中川 明宣','A',3,'月火水木金','早遅',1050,1.3,'週5（土日祝休）'],
  ['a27','小野 健太','A',2,'火水木土','早',1000,0.8,'シフト制OK'],
  ['a28','グエン コンホア','A',3,'水木金','早遅',1050,1.1,'週3（月火土日祝休）'],
  ['a29','横山 理起','A',3,'月火水木金','早遅',1050,1.3,'週5（土日祝休）'],
  ['a30','千葉 真希','A',2,'火水木','早',1000,0.9,'週3（月金土日休）'],
  ['a31','菅原 將浩','A',3,'月木金','遅',1050,1.0,'週3（火水土日休）'],
  ['a32','市川 秀雄','A',4,'月火水木金土','早遅',1150,1.6,'週5（土日休）'],
  ['a33','水野 享子','A',3,'月火木金','早',1050,1.2,'週4（水土日祝休）'],
  ['a34','小松 裕香','A',4,'月火水木金','早遅',1100,1.4,'週5（土日祝休）'],
  ['a35','岩田 愛','A',3,'月火水木金','早遅',1050,1.3,'週5（土日祝休）'],
  ['a36','高木 衿香','A',2,'木金','早',1000,0.8,'週4-5（シフト制）'],
  ['a37','中島 藤子','A',1,'木','早',1000,0.4,'単発'],
  // === B: 入荷・仕分け（日勤）12名 ===
  ['b01','大野 貴之','B',5,'月火水木金','早遅',1200,2.0,'リーダー・フォークリフト'],
  ['b02','河野 絵里香','B',4,'月火水木金土','早遅',1100,1.5,'週5（日月休）'],
  ['b03','丸山 一希','B',4,'火水木金土','早遅',1100,1.5,'週5（日月休）'],
  ['b04','内田 智之','B',4,'月火水木金','早遅',1100,1.5,'週5（土日休）'],
  ['b05','杉山 和恵','B',2,'火水金','早',1000,0.9,'週3（月木土日休）'],
  ['b06','今井 早希','B',2,'月水木金','早',1000,0.9,'週4（水土日休）'],
  ['b07','永田 泰葉','B',2,'月水金','早',1000,0.8,'週3（火木土日休）'],
  ['b08','野口 雅彰','B',4,'月火水木金','早遅',1150,1.6,'週5（土日休）'],
  ['b09','片山 浩一','B',4,'月火水木金','早遅',1100,1.4,'週5（土日休）'],
  ['b10','大石 久仁子','B',3,'月水木金土','遅',1050,1.2,'週5（火日休）'],
  ['b11','柳田 和彦','B',3,'月木金','遅',1050,1.0,'週3（火木土日休）'],
  ['b12','平野 正和','B',3,'月火水木金','早遅',1050,1.3,'週5（土日休）'],
  // === C: 物流・加工 23名 ===
  ['c01','堀内 真司','C',4,'月火水木金土','遅',1150,1.5,'週5（土日休）'],
  ['c02','日野 雅則','C',4,'月火水木金','早遅',1100,1.5,'週5（金土休）'],
  ['c03','赤木 茂','C',5,'月水木金土日','早遅',1200,1.8,'週6（火休）'],
  ['c04','黒田 香','C',3,'月水木日','早',1050,1.1,'週4（火金土休）'],
  ['c05','白石 涼','C',3,'月水木日','早',1050,1.1,'週4（火金土休）'],
  ['c06','相田 恵里','C',3,'月水木日','早',1050,1.0,'週4（火金土休）'],
  ['c07','星野 雪江','C',3,'月水木日','早',1050,1.0,'週4（火金土休）'],
  ['c08','望月 章人','C',4,'月火水木金','早遅',1100,1.4,'週5（土日休）'],
  ['c09','宮内 遼太','C',3,'月火水木金土','早',1050,1.2,'週4（月土日休）'],
  ['c10','手塚 裕貴','C',3,'月水木日','早',1050,1.0,'週4（火金土休）'],
  ['c11','相沢 照美','C',3,'月火水木','早遅',1050,1.1,'週5（金土休）'],
  ['c12','吉川 みちよ','C',3,'月火水木','早遅',1050,1.0,'週5（金土休）'],
  ['c13','野村 健太郎','C',3,'月火木金','早',1050,1.1,'週4（水土日休）'],
  ['c14','栗原 仁志','C',2,'火土日','早',1000,0.8,'週3'],
  ['c15','戸田 幸治','C',3,'火水木土','早',1050,1.1,'週3-4（月金土休）'],
  ['c16','須藤 彩香','C',3,'月火木日','早',1050,1.1,'週4（月水土休）'],
  ['c17','金子 誠','C',4,'水木金日','早遅',1100,1.4,'水木金（日=月2回）'],
  ['c18','宇野 篤','C',4,'月火水木金土','早遅',1150,1.6,'週5-6（土休）'],
  ['c19','矢野 直人','C',3,'月火水木金','早遅',1050,1.3,'週5（土日休）'],
  ['c20','川村 尚記','C',3,'月火水木','早遅',1050,1.2,'週5（金土休）'],
  ['c21','植田 昭男','C',3,'月火水木','早遅',1050,1.2,'週5（金土休）'],
  ['c22','塚本 章賢','C',3,'月火水木','早遅',1050,1.1,'週3-4（金土休）'],
  ['c23','奥村 知之','C',2,'火木日','早',1000,0.8,'週3（月水金土休）'],
  // === D: 夜間作業 13名 ===
  ['d01','柏木 太輔','D',3,'金土','夜',1250,1.1,'週2（金土出勤）'],
  ['d02','新井 梓','D',4,'月火水木金','夜',1300,1.5,'週5（金土休）'],
  ['d03','土井 優','D',4,'月火水木金','夜',1300,1.5,'週5（金土休）'],
  ['d04','梅田 彩','D',3,'月火金木','夜',1250,1.2,'週4（水木土休）・隔週木出勤'],
  ['d05','栄 裕嗣','D',3,'火木日','夜',1250,1.1,'週3（火木日出勤）'],
  ['d06','桜井 均','D',2,'','夜',1200,0.6,'不定期'],
  ['d07','根本 ヒロノブ','D',2,'','夜',1200,0.6,'不定期'],
  ['d08','梶山 美幸','D',4,'月火水木金','夜',1300,1.5,'週5（土日休）'],
  ['d09','芦田 都','D',3,'月水木日','夜',1250,1.1,'週4（火金土休）'],
  ['d10','石橋 豊','D',2,'','夜',1200,0.6,'不定期'],
  ['d11','真田 秀人','D',4,'月火水木','夜',1300,1.4,'週5（金土休）'],
  ['d12','福島 弥生','D',3,'月水木日','夜',1250,1.1,'週4（火金土休）'],
  ['d13','桐山 宏','D',3,'','夜',1250,0.9,'不定期']
];

const deptMap = { A:'出荷・検品', B:'入荷・仕分け', C:'物流・加工', D:'夜間作業' };
const deptClassMap = { '出荷・検品':'badge-dept-a', '入荷・仕分け':'badge-dept-b', '物流・加工':'badge-dept-c', '夜間作業':'badge-dept-d' };
const slotExpand = { '早':'早番', '遅':'遅番', '夜':'夜勤', '通':'通し' };

const staffData = _raw.map(r => {
  const days = r[4] ? r[4].split('').reduce((a,c) => { if('月火水木金土日'.includes(c)) a.push(c); return a; }, []) : [];
  const slots = r[5] ? r[5].split('').reduce((a,c) => { if(slotExpand[c] && !a.includes(slotExpand[c])) a.push(slotExpand[c]); return a; }, []) : [];
  return { id:r[0], name:r[1], dept:deptMap[r[2]], skillLevel:r[3], availableDays:days, availableSlots:slots, hourlyRate:r[6], weight:r[7], note:r[8] };
});

/* ===== Staff Tenure Data ===== */
function staffHash(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) { h = ((h << 5) - h + id.charCodeAt(i)) | 0; }
  return Math.abs(h);
}

function generateHireDate(staff) {
  const now = new Date();
  const hash = staffHash(staff.id);
  const ranges = { 5:[60,96], 4:[36,60], 3:[12,36], 2:[6,12], 1:[1,6] };
  const [minM, maxM] = ranges[staff.skillLevel] || [12,36];
  const monthsAgo = minM + (hash % (maxM - minM + 1));
  const d = new Date(now.getFullYear(), now.getMonth() - monthsAgo, 1 + (hash % 28));
  const maxDay = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
  if (d.getDate() > maxDay) d.setDate(maxDay);
  return d;
}

function calcTenure(hireDate) {
  const now = new Date();
  let y = now.getFullYear() - hireDate.getFullYear();
  let m = now.getMonth() - hireDate.getMonth();
  if (now.getDate() < hireDate.getDate()) m--;
  if (m < 0) { y--; m += 12; }
  if (y > 0 && m > 0) return y + '年' + m + 'ヶ月';
  if (y > 0) return y + '年';
  return m + 'ヶ月';
}

function calcTenureShort(hireDate) {
  const now = new Date();
  let y = now.getFullYear() - hireDate.getFullYear();
  let m = now.getMonth() - hireDate.getMonth();
  if (now.getDate() < hireDate.getDate()) m--;
  if (m < 0) { y--; m += 12; }
  return y >= 1 ? '勤続' + y + '年' : '勤続' + m + 'ヶ月';
}

function formatDateJP(d) {
  return d.getFullYear() + '/' + String(d.getMonth()+1).padStart(2,'0') + '/' + String(d.getDate()).padStart(2,'0');
}

function monthsBetween(d1, d2) {
  return (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
}

function generateSkillHistory(staff) {
  const hireDate = staff.hireDate;
  const hash = staffHash(staff.id);
  const history = [{ date: new Date(hireDate), level: 1 }];
  if (staff.skillLevel >= 2) {
    const totalMonths = Math.max(1, monthsBetween(hireDate, new Date()));
    const intervalBase = Math.floor(totalMonths / staff.skillLevel);
    let accMonths = 0;
    for (let lv = 2; lv <= staff.skillLevel; lv++) {
      const variation = ((hash + lv * 7) % 3) - 1;
      accMonths += Math.max(1, intervalBase + variation);
      const changeDate = new Date(hireDate.getFullYear(), hireDate.getMonth() + accMonths, 1);
      if (changeDate <= new Date()) history.push({ date: changeDate, level: lv });
    }
  }
  return history;
}

function generateDeptHistory(staff) {
  const hash = staffHash(staff.id);
  const history = [];
  const hadTransfer = (hash % 5) === 0 && staff.skillLevel >= 3;
  if (hadTransfer) {
    const allDepts = ['出荷・検品', '入荷・仕分け', '物流・加工', '夜間作業'];
    const otherDepts = allDepts.filter(d => d !== staff.dept);
    const prevDept = otherDepts[hash % otherDepts.length];
    const transferMonths = Math.floor(monthsBetween(staff.hireDate, new Date()) * 0.4);
    const transferDate = new Date(staff.hireDate.getFullYear(), staff.hireDate.getMonth() + transferMonths, 1);
    history.push({ date: staff.hireDate, dept: prevDept, current: false });
    history.push({ date: transferDate, dept: staff.dept, current: true });
  } else {
    history.push({ date: staff.hireDate, dept: staff.dept, current: true });
  }
  return history;
}

staffData.forEach(function(s) {
  s.hireDate = generateHireDate(s);
  s.tenure = calcTenure(s.hireDate);
  s.tenureShort = calcTenureShort(s.hireDate);
  s.skillHistory = generateSkillHistory(s);
  s.deptHistory = generateDeptHistory(s);
});

let currentDeptFilter = 'all';

const shipmentLevels = {
  '軽量': { minScore: 20,  desc: '出荷少なめ' },
  '通常': { minScore: 40,  desc: '平均的な出荷量' },
  '繁忙': { minScore: 60, desc: '出荷多め' },
  '超繁忙': { minScore: 80, desc: '最大出荷' }
};

const dayNames = ['日','月','火','水','木','金','土'];
let currentMonth = new Date();

// Pre-generated calendar shift data
const calendarShifts = {};

// State for absence panel & confirm
let lastPrimaryResult = null;
let lastAvailableStaff = null;
let lastMinScore = null;
let lastDateStr = null;
let lastSelectedDate = null;
let lastSelectedSlot = null;
let currentView = 'daily';

/* ===== Navigation ===== */
const screenLabels = {
  dashboard: 'DEMO: ダッシュボード',
  staff: 'DEMO: スタッフ一覧',
  generate: 'DEMO: AIシフト生成',
  calendar: 'DEMO: シフトカレンダー'
};

function switchPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.dataset.page === page) t.classList.add('active');
  });
  document.getElementById('screen-label').textContent = screenLabels[page] || 'DEMO';
}

document.querySelectorAll('.nav-tab').forEach(t => {
  t.addEventListener('click', () => switchPage(t.dataset.page));
});

/* ===== Staff Rendering ===== */
function renderStars(level) {
  let html = '<span class="skill-stars">';
  for (let i = 1; i <= 5; i++) {
    html += '<span class="skill-star' + (i <= level ? ' filled' : '') + '">&#9733;</span>';
  }
  return html + '</span>';
}

function filterDept(el) {
  document.querySelectorAll('.dept-filter').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  currentDeptFilter = el.dataset.dept;
  renderStaffGrid();
}

let staffSearchQuery = '';

function searchStaff() {
  var input = document.getElementById('staff-search');
  staffSearchQuery = input ? input.value.trim().toLowerCase() : '';
  renderStaffGrid();
}

function getFilteredStaff() {
  var list = currentDeptFilter === 'all' ? staffData : staffData.filter(function(s) { return s.dept === currentDeptFilter; });
  if (staffSearchQuery) {
    list = list.filter(function(s) {
      return s.name.toLowerCase().indexOf(staffSearchQuery) !== -1 ||
             s.dept.toLowerCase().indexOf(staffSearchQuery) !== -1 ||
             (s.note && s.note.toLowerCase().indexOf(staffSearchQuery) !== -1);
    });
  }
  return list;
}

function updateDeptCounts() {
  document.getElementById('count-all').textContent = staffData.length;
  const counts = {};
  staffData.forEach(s => { counts[s.dept] = (counts[s.dept] || 0) + 1; });
  document.getElementById('count-a').textContent = counts['出荷・検品'] || 0;
  document.getElementById('count-b').textContent = counts['入荷・仕分け'] || 0;
  document.getElementById('count-c').textContent = counts['物流・加工'] || 0;
  document.getElementById('count-d').textContent = counts['夜間作業'] || 0;
}

function renderStaffGrid() {
  const filtered = getFilteredStaff();
  const grid = document.getElementById('staff-grid');
  document.getElementById('staff-count-info').textContent = '表示: ' + filtered.length + '名 / 全' + staffData.length + '名';
  grid.innerHTML = filtered.map(s => {
    const deptClass = deptClassMap[s.dept] || 'badge-dept-a';
    const dayBadges = s.availableDays.map(d => '<span class="badge badge-primary" style="font-size:11px;">' + d + '</span>').join('');
    const slotBadges = s.availableSlots.map(sl => '<span class="badge badge-muted" style="font-size:11px;">' + sl + '</span>').join('');
    const tenureBadge = s.tenureShort ? '<span class="tenure-badge">' + s.tenureShort + '</span>' : '';
    return '<div class="staff-card" onclick="openStaffModal(\'' + s.id + '\')">' +
      '<div class="staff-card-header">' +
        '<div class="staff-avatar">' + s.name.charAt(0) + '</div>' +
        '<div><div class="staff-name">' + s.name + ' <span class="badge-dept ' + deptClass + '">' + s.dept + '</span> ' + tenureBadge + '</div>' +
        '<div class="staff-meta">' + renderStars(s.skillLevel) + ' Lv.' + s.skillLevel + '</div></div>' +
      '</div>' +
      '<div class="staff-badges">' + dayBadges + '</div>' +
      '<div class="staff-badges">' + slotBadges + '</div>' +
      '<div class="staff-rate">&#165;' + s.hourlyRate.toLocaleString() + '/時 &#12288;貢献度: ' + s.weight + '</div>' +
      (s.note ? '<div class="staff-note">' + s.note + '</div>' : '') +
    '</div>';
  }).join('');
  document.getElementById('stat-staff').textContent = staffData.length;
  updateDeptCounts();
}

/* ===== Staff Modal ===== */
function openStaffModal(id) {
  const modal = document.getElementById('staff-modal');
  const detailPanel = document.getElementById('staff-detail-panel');
  if (id) {
    const s = staffData.find(x => x.id === id);
    if (!s) return;
    document.getElementById('modal-title').textContent = 'スタッフ編集';
    document.getElementById('edit-staff-id').value = s.id;
    document.getElementById('edit-name').value = s.name;
    document.getElementById('edit-dept').value = s.dept || '出荷・検品';
    document.getElementById('edit-skill').value = s.skillLevel;
    document.getElementById('edit-rate').value = s.hourlyRate;
    document.getElementById('edit-weight').value = s.weight;
    document.getElementById('edit-note').value = s.note || '';
    document.querySelectorAll('#edit-days input').forEach(cb => { cb.checked = s.availableDays.includes(cb.value); });
    document.querySelectorAll('#edit-slots input').forEach(cb => { cb.checked = s.availableSlots.includes(cb.value); });
    // Populate detail panel
    if (detailPanel) {
      detailPanel.style.display = 'block';
      document.getElementById('detail-hire-date').textContent = s.hireDate ? formatDateJP(s.hireDate) : '-';
      document.getElementById('detail-tenure').textContent = s.tenure || '-';
      // Skill timeline
      const timelineEl = document.getElementById('detail-skill-timeline');
      if (s.skillHistory && s.skillHistory.length > 0) {
        timelineEl.innerHTML = s.skillHistory.map((entry, i) => {
          const dateStr = entry.date.getFullYear() + '/' + String(entry.date.getMonth()+1).padStart(2,'0');
          if (i === 0) return '<div class="skill-timeline-item"><span class="skill-timeline-date">' + dateStr + '</span><span class="skill-timeline-change">入社 Lv.1</span></div>';
          const prev = s.skillHistory[i-1].level;
          return '<div class="skill-timeline-item"><span class="skill-timeline-date">' + dateStr + '</span><span class="skill-timeline-change">Lv.' + prev + ' &rarr; Lv.' + entry.level + '</span></div>';
        }).join('');
      } else { timelineEl.innerHTML = '<div style="font-size:13px;color:var(--color-on-surface-variant);">データなし</div>'; }
      // Dept history
      const deptHistEl = document.getElementById('detail-dept-history');
      if (s.deptHistory && s.deptHistory.length > 0) {
        deptHistEl.innerHTML = s.deptHistory.map(h => {
          const dStr = h.date.getFullYear() + '/' + String(h.date.getMonth()+1).padStart(2,'0');
          return '<li><span class="skill-timeline-date">' + dStr + '〜</span><span' + (h.current ? ' class="dept-history-current"' : '') + '>' + h.dept + (h.current ? ' (現在)' : '') + '</span></li>';
        }).join('');
      } else { deptHistEl.innerHTML = '<li>' + s.dept + ' (現在)</li>'; }
    }
  } else {
    document.getElementById('modal-title').textContent = 'スタッフ追加';
    document.getElementById('edit-staff-id').value = '';
    document.getElementById('edit-name').value = '';
    document.getElementById('edit-dept').value = '出荷・検品';
    document.getElementById('edit-skill').value = 3;
    document.getElementById('edit-rate').value = 1050;
    document.getElementById('edit-weight').value = 1.0;
    document.getElementById('edit-note').value = '';
    document.querySelectorAll('#edit-days input').forEach(cb => { cb.checked = false; });
    document.querySelectorAll('#edit-slots input').forEach(cb => { cb.checked = false; });
    if (detailPanel) detailPanel.style.display = 'none';
  }
  modal.classList.add('active');
}

function closeStaffModal() {
  document.getElementById('staff-modal').classList.remove('active');
}

function saveStaff() {
  const id = document.getElementById('edit-staff-id').value;
  const name = document.getElementById('edit-name').value.trim();
  if (!name) { alert('名前を入力してください'); return; }
  const days = [];
  document.querySelectorAll('#edit-days input:checked').forEach(cb => days.push(cb.value));
  const slots = [];
  document.querySelectorAll('#edit-slots input:checked').forEach(cb => slots.push(cb.value));
  const obj = {
    name: name,
    dept: document.getElementById('edit-dept').value,
    skillLevel: parseInt(document.getElementById('edit-skill').value) || 3,
    availableDays: days,
    availableSlots: slots,
    hourlyRate: parseInt(document.getElementById('edit-rate').value) || 1050,
    weight: parseFloat(document.getElementById('edit-weight').value) || 1.0,
    note: document.getElementById('edit-note').value.trim()
  };
  if (id) {
    const idx = staffData.findIndex(x => x.id === id);
    if (idx >= 0) Object.assign(staffData[idx], obj);
  } else {
    obj.id = 's' + (staffData.length + 1) + '_' + Date.now();
    staffData.push(obj);
  }
  closeStaffModal();
  renderStaffGrid();
  updateShiftInfo();
}

/* ===== Shift Generation ===== */
let selectedSlot = '早番';
let selectedLevel = '通常';

function selectSlot(el) {
  document.querySelectorAll('.slot-toggle').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  selectedSlot = el.dataset.slot;
  updateShiftInfo();
}

function selectLevel(el) {
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  selectedLevel = el.dataset.level;
  document.getElementById('info-required-score').textContent = shipmentLevels[selectedLevel].minScore;
  updateShiftInfo();
}

function getSelectedDate() {
  const val = document.getElementById('shift-date').value;
  return val ? new Date(val) : new Date();
}

function getDayName(date) {
  return dayNames[date.getDay()];
}

function getAvailableStaff(date, slot) {
  const day = getDayName(date);
  return staffData.filter(s => s.availableDays.includes(day) && s.availableSlots.includes(slot));
}

function updateShiftInfo() {
  const date = getSelectedDate();
  const available = getAvailableStaff(date, selectedSlot);
  document.getElementById('info-available-count').textContent = available.length + '名';
}

// Algorithm A: Efficiency (skill*weight descending)
function algoEfficiency(available, minScore) {
  const sorted = [...available].sort((a, b) => (b.skillLevel * b.weight) - (a.skillLevel * a.weight));
  const selected = [];
  let total = 0;
  for (const s of sorted) {
    if (total >= minScore) break;
    selected.push(s);
    total += s.skillLevel * s.weight;
  }
  return { staff: selected, totalScore: total, status: total >= minScore ? '充足' : '人員不足' };
}

// Algorithm B: Cost-minimum (hourly rate ascending)
function algoCostMin(available, minScore) {
  const sorted = [...available].sort((a, b) => a.hourlyRate - b.hourlyRate);
  const selected = [];
  let total = 0;
  for (const s of sorted) {
    if (total >= minScore) break;
    selected.push(s);
    total += s.skillLevel * s.weight;
  }
  return { staff: selected, totalScore: total, status: total >= minScore ? '充足' : '人員不足' };
}

// Algorithm C: Balanced (1 veteran + skill-diversified)
function algoBalanced(available, minScore) {
  const sorted = [...available].sort((a, b) => (b.skillLevel * b.weight) - (a.skillLevel * a.weight));
  const selected = [];
  let total = 0;
  // Pick top veteran first
  if (sorted.length > 0) {
    selected.push(sorted[0]);
    total += sorted[0].skillLevel * sorted[0].weight;
  }
  // Fill remaining by alternating high/low skill
  const remaining = sorted.slice(1);
  const low = remaining.filter(s => s.skillLevel <= 3);
  const high = remaining.filter(s => s.skillLevel > 3);
  let useHigh = false;
  while (total < minScore && (low.length > 0 || high.length > 0)) {
    const pool = useHigh ? (high.length > 0 ? high : low) : (low.length > 0 ? low : high);
    if (pool.length === 0) break;
    const pick = pool.shift();
    selected.push(pick);
    total += pick.skillLevel * pick.weight;
    useHigh = !useHigh;
  }
  return { staff: selected, totalScore: total, status: total >= minScore ? '充足' : '人員不足' };
}

function calcCost(staff, slot) {
  const hours = slot === '通し' ? 8 : 4;
  return staff.reduce((sum, s) => sum + s.hourlyRate * hours, 0);
}

/* ===== Staff Hours & Timeline ===== */
function getStaffHours(staff, slot) {
  const isFulltime = staff.availableDays.length >= 5;
  const isFuyounai = (staff.note && staff.note.includes('扶養内')) || (staff.hourlyRate <= 1000 && staff.availableDays.length <= 3);
  switch(slot) {
    case '早番':
      if (isFulltime && staff.skillLevel >= 4) return { start: 7.75, end: 16.75 };
      if (isFulltime) return { start: 8, end: 17 };
      if (isFuyounai) return { start: 9.5, end: 13.5 };
      return { start: 9, end: 15 };
    case '遅番':
      if (isFuyounai) return { start: 17, end: 21 };
      if (isFulltime) return { start: 15, end: 22 };
      return { start: 17, end: 22 };
    case '夜勤':
      if (staff.weight >= 1.4) return { start: 22, end: 31 }; // 翌7:00
      if (staff.weight >= 1.0) return { start: 22.5, end: 30.5 }; // 翌6:30
      return { start: 23, end: 30 }; // 翌6:00
    case '通し':
      return { start: 8, end: 22 };
    default:
      return { start: 8, end: 17 };
  }
}

function formatHour(h) {
  const hour = Math.floor(h % 24);
  const min = Math.round((h % 1) * 60);
  return hour + ':' + String(min).padStart(2, '0');
}

function getTimelineRange(slot) {
  switch(slot) {
    case '早番': return { min: 6, max: 18 };
    case '遅番': return { min: 14, max: 25 };
    case '夜勤': return { min: 20, max: 32 };
    case '通し': return { min: 6, max: 24 };
    default: return { min: 6, max: 18 };
  }
}

function buildTimelineHTML(staffList, slot) {
  const range = getTimelineRange(slot);
  const span = range.max - range.min;

  // Build axis labels
  let axisHTML = '';
  for (let h = range.min; h <= range.max; h += 2) {
    const pct = ((h - range.min) / span) * 100;
    const label = h >= 24 ? formatHour(h - 24) : formatHour(h);
    axisHTML += '<span style="left:' + pct + '%">' + label + '</span>';
  }

  // Build rows
  let rowsHTML = '';
  staffList.forEach(s => {
    const hours = getStaffHours(s, slot);
    const leftPct = Math.max(((hours.start - range.min) / span) * 100, 0);
    const widthPct = Math.min(((hours.end - hours.start) / span) * 100, 100 - leftPct);
    const startLabel = formatHour(hours.start);
    const endLabel = hours.end >= 24 ? formatHour(hours.end - 24) : formatHour(hours.end);

    rowsHTML += '<div class="timeline-row">' +
      '<div class="timeline-label">' + s.name + '</div>' +
      '<div class="timeline-track">' +
        '<div class="timeline-bar" data-dept="' + s.dept + '" style="left:' + leftPct + '%;width:' + widthPct + '%;">' +
          '<div class="timeline-bar-tooltip">' + s.name + ' ' + startLabel + '-' + endLabel + '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  });

  return '<div class="shift-timeline">' +
    '<div class="timeline-section-title"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M1 6h12M4 3v8M8 3v8" stroke="currentColor" stroke-width="1" opacity="0.4"/></svg> タイムライン</div>' +
    '<div class="timeline-inner">' +
      '<div class="timeline-axis">' + axisHTML + '</div>' +
      rowsHTML +
    '</div>' +
  '</div>';
}

/* ===== Dev Popup (共通) ===== */
function showDevPopup(message) {
  closeDevPopup();
  var msg = message || 'この機能は現在開発中です。正式版リリース時にご利用可能になります。';
  var overlay = document.createElement('div');
  overlay.className = 'dev-popup-overlay';
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeDevPopup(); });
  var popup = document.createElement('div');
  popup.className = 'dev-popup';
  popup.innerHTML = '<div style="font-size:36px;margin-bottom:var(--space-3);">&#128679;</div>' +
    '<div style="font-size:16px;font-weight:700;margin-bottom:var(--space-2);">開発中の機能です</div>' +
    '<div style="font-size:13px;color:var(--color-on-surface-variant);margin-bottom:var(--space-6);">' + msg + '</div>' +
    '<button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="closeDevPopup()">閉じる</button>';
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}

function closeDevPopup() {
  document.querySelectorAll('.dev-popup-overlay').forEach(function(el) { el.remove(); });
}

function generateShift() {
  const btn = document.getElementById('btn-generate');
  const results = document.getElementById('shift-results');
  const date = getSelectedDate();
  const minScore = shipmentLevels[selectedLevel].minScore;
  const available = getAvailableStaff(date, selectedSlot);

  // Pulse animation
  btn.classList.add('animating');
  btn.disabled = true;
  setTimeout(() => btn.classList.remove('animating'), 600);

  // Show analyzing
  results.innerHTML = '<div class="analyzing-overlay active"><div class="analyzing-spinner"></div><div style="font-weight:600;">AIが最適シフトを分析中...</div></div>';

  setTimeout(() => {
    const resultA = algoEfficiency(available, minScore);
    const resultB = algoCostMin(available, minScore);
    const resultC = algoBalanced(available, minScore);
    const costA = calcCost(resultA.staff, selectedSlot);
    const costB = calcCost(resultB.staff, selectedSlot);
    const costC = calcCost(resultC.staff, selectedSlot);

    const dateStr = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate() + ' (' + getDayName(date) + ')';

    // Store state for absence panel and confirm
    lastPrimaryResult = resultA;
    lastAvailableStaff = available;
    lastMinScore = minScore;
    lastDateStr = dateStr;
    lastSelectedDate = new Date(date);
    lastSelectedSlot = selectedSlot;

    // Show view toggle
    document.getElementById('view-toggle').style.display = 'flex';

    results.innerHTML = buildResultHTML('A', '推奨案（効率重視）', resultA, costA, minScore, dateStr, true) +
      '<div class="alt-results" style="opacity:0;transform:translateY(10px);transition:all 0.4s ease;">' +
        '<button class="alt-toggle" onclick="toggleAlt(this)">代替案を表示（コスト最小・バランス重視）<span class="arrow">&#9660;</span></button>' +
        '<div class="alt-content">' +
          buildResultHTML('B', 'コスト最小案', resultB, costB, minScore, dateStr, false) +
          buildResultHTML('C', 'バランス重視案', resultC, costC, minScore, dateStr, false) +
        '</div>' +
      '</div>';

    // Stagger animations
    setTimeout(() => {
      // Score gauge fill
      const gauge = results.querySelector('.score-gauge-fill');
      if (gauge) {
        const pct = Math.min((resultA.totalScore / minScore) * 100, 100);
        gauge.style.width = pct + '%';
        gauge.style.background = resultA.status === '充足' ? 'var(--color-success)' : 'var(--color-danger)';
      }
    }, 200);

    // Staff chips appear one by one
    const chips = results.querySelectorAll('.primary-result .result-staff-chip');
    chips.forEach((chip, i) => {
      setTimeout(() => chip.classList.add('visible'), 300 + i * 150);
    });

    // Timeline bars animate in after chips
    const bars = results.querySelectorAll('.primary-result .timeline-bar');
    const chipsEnd = 300 + chips.length * 150;
    bars.forEach((bar, i) => {
      setTimeout(() => bar.classList.add('visible'), chipsEnd + i * 200);
    });
    const barsEnd = chipsEnd + bars.length * 200;

    // Status badge pop
    setTimeout(() => {
      const statusBadge = results.querySelector('.primary-result .status-pop');
      if (statusBadge) statusBadge.classList.add('visible');
    }, barsEnd + 200);

    // Cost fade in
    setTimeout(() => {
      const costEl = results.querySelector('.primary-result .result-cost');
      if (costEl) { costEl.style.opacity = '0'; costEl.style.transition = 'opacity 0.4s ease'; setTimeout(() => costEl.style.opacity = '1', 50); }
    }, barsEnd + 400);

    // Alt results slide in
    setTimeout(() => {
      const altResults = results.querySelector('.alt-results');
      if (altResults) { altResults.style.opacity = '1'; altResults.style.transform = 'translateY(0)'; }
    }, barsEnd + 700);

    btn.disabled = false;
  }, 800);
}

function buildResultHTML(label, title, result, cost, minScore, dateStr, isPrimary) {
  const pct = Math.min((result.totalScore / minScore) * 100, 100);
  const statusClass = result.status === '充足' ? 'badge-success' : 'badge-danger';
  const gaugeColor = result.status === '充足' ? 'var(--color-success)' : 'var(--color-danger)';
  const targetPct = (minScore / (minScore * 1.5)) * 100;
  const hours = selectedSlot === '通し' ? 8 : 4;

  const staffChips = result.staff.map(s =>
    '<div class="result-staff-chip' + (isPrimary ? ' clickable' : ' visible') + '"' +
      (isPrimary ? ' onclick="showAbsencePanel(\'' + s.id + '\')"' : '') + '>' +
      '<span class="chip-avatar">' + s.name.charAt(0) + '</span>' +
      '<span>' + s.name + '</span>' +
      '<span style="font-size:11px;color:var(--color-on-surface-variant);">Lv.' + s.skillLevel + '</span>' +
    '</div>'
  ).join('');

  // Labor warnings (primary only)
  let warningsHTML = '';
  if (isPrimary) {
    const date = getSelectedDate();
    const warnings = checkLaborRisks(result.staff, date, selectedSlot);
    if (warnings.length > 0) {
      warningsHTML = '<div class="labor-warnings">' +
        warnings.map(w => '<div class="labor-warning-item">&#9888; ' + w.name + ': ' + w.message + '</div>').join('') +
      '</div>';
    }
  }

  const confirmBtn = isPrimary ?
    '<button class="btn btn-sm btn-confirm" id="btn-confirm-shift" onclick="confirmShift()">このシフトを確定する</button>' : '';

  return '<div class="result-card' + (isPrimary ? ' primary primary-result' : '') + '">' +
    '<div class="result-card-header">' +
      '<div class="result-card-title">' +
        '<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:var(--color-primary);color:#fff;font-size:12px;font-weight:700;">' + label + '</span> ' +
        title +
      '</div>' +
      '<span class="badge ' + statusClass + ' status-pop' + (isPrimary ? '' : ' visible') + '">' + result.status + '</span>' +
    '</div>' +
    '<div class="result-card-body">' +
      '<div style="font-size:12px;color:var(--color-on-surface-variant);margin-bottom:var(--space-3);">' + dateStr + ' / ' + selectedSlot + ' / ' + selectedLevel + '</div>' +
      '<div class="result-score-section">' +
        '<div style="display:flex;justify-content:space-between;margin-bottom:var(--space-1);font-size:13px;">' +
          '<span>スコア: <strong>' + result.totalScore.toFixed(1) + '</strong> / ' + minScore + '</span>' +
          '<span>' + result.staff.length + '名配置</span>' +
        '</div>' +
        '<div class="score-gauge-bg">' +
          '<div class="score-gauge-fill" style="width:' + (isPrimary ? '0' : pct + '%') + ';background:' + gaugeColor + ';"></div>' +
          '<div class="score-gauge-target" style="left:' + targetPct + '%;"></div>' +
        '</div>' +
      '</div>' +
      warningsHTML +
      '<div class="result-staff-grid">' + staffChips + '</div>' +
      (isPrimary ? '<div id="absence-panel-container"></div>' : '') +
      (isPrimary ? buildTimelineHTML(result.staff, selectedSlot) : '') +
      '<div class="result-cost">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-2);">' +
          '<span>人件費概算（' + hours + '時間）: <strong>&#165;' + cost.toLocaleString() + '</strong></span>' +
          '<div style="display:flex;gap:var(--space-2);">' +
            (isPrimary ? '<button class="btn btn-sm btn-secondary" onclick="showDevPopup()"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 12h8M5 8v4M9 8v4M3 4l4-2 4 2v4H3V4z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Excel出力</button>' : '') +
            confirmBtn +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function toggleAlt(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}

/* ===== Absence Panel ===== */
function showAbsencePanel(staffId) {
  closeAbsencePanel();
  const container = document.getElementById('absence-panel-container');
  if (!container || !lastPrimaryResult) return;

  const staff = staffData.find(s => s.id === staffId);
  if (!staff) return;

  const currentScore = lastPrimaryResult.totalScore;
  const staffScore = staff.skillLevel * staff.weight;
  const newScore = currentScore - staffScore;
  const impact = -staffScore;

  const replacements = getReplacements(staff, lastPrimaryResult.staff, lastSelectedDate, lastSelectedSlot);

  let replacementHTML = replacements.map(r => {
    const recovery = r.skillLevel * r.weight;
    return '<div class="replacement-candidate">' +
      '<div style="display:flex;align-items:center;gap:var(--space-2);">' +
        '<span style="font-weight:600;">' + r.name + '</span>' +
        '<span style="font-size:11px;color:var(--color-on-surface-variant);">Lv.' + r.skillLevel + ' / ' + r.dept + '</span>' +
      '</div>' +
      '<span class="recovery">スコア回復: +' + recovery.toFixed(1) + '</span>' +
    '</div>';
  }).join('');

  if (replacements.length === 0) {
    replacementHTML = '<div style="font-size:13px;color:var(--color-on-surface-variant);padding:var(--space-2);">代替候補が見つかりません</div>';
  }

  container.innerHTML = '<div class="absence-panel">' +
    '<div class="absence-panel-header">' +
      '<div class="absence-panel-title">' + staff.name + ' が欠勤した場合</div>' +
      '<button class="absence-panel-close" onclick="closeAbsencePanel()">&times;</button>' +
    '</div>' +
    '<div class="absence-impact">' +
      'スコア: ' + currentScore.toFixed(1) + ' → ' + newScore.toFixed(1) + ' <span class="impact-value">(' + impact.toFixed(1) + ')</span>' +
    '</div>' +
    '<div style="font-size:13px;font-weight:600;margin-bottom:var(--space-2);">代替候補</div>' +
    replacementHTML +
  '</div>';
}

function closeAbsencePanel() {
  const container = document.getElementById('absence-panel-container');
  if (container) container.innerHTML = '';
}

function getReplacements(absentStaff, currentStaff, date, slot, limit) {
  limit = limit || 3;
  const available = getAvailableStaff(date, slot);
  const currentIds = currentStaff.map(s => s.id);
  const candidates = available.filter(s => !currentIds.includes(s.id) && s.id !== absentStaff.id);
  candidates.sort((a, b) => (b.skillLevel * b.weight) - (a.skillLevel * a.weight));
  return candidates.slice(0, limit);
}

/* ===== Confirm Shift ===== */
function confirmShift() {
  if (!lastPrimaryResult || !lastSelectedDate) return;
  const key = formatDateKey(lastSelectedDate);
  calendarShifts[key] = {
    status: '確定',
    people: lastPrimaryResult.staff.length,
    score: lastPrimaryResult.totalScore,
    level: selectedLevel,
    staff: lastPrimaryResult.staff
  };

  const btn = document.getElementById('btn-confirm-shift');
  if (btn) {
    btn.textContent = '確定済み ✓';
    btn.className = 'btn btn-sm btn-confirmed';
    btn.disabled = true;
    btn.onclick = null;
  }

  const dayName = getDayName(lastSelectedDate);
  const dateStr = lastSelectedDate.getFullYear() + '/' + (lastSelectedDate.getMonth()+1) + '/' + lastSelectedDate.getDate() + '（' + dayName + '）';
  showToast(dateStr + selectedSlot + 'のシフトを確定しました');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3000);
}

/* ===== Labor Risk Check ===== */
function checkLaborRisks(staff, date, slot) {
  const warnings = [];
  staff.forEach(s => {
    if (s.availableDays.length >= 6) {
      warnings.push({ name: s.name, message: s.availableDays.length + '連勤目の可能性（要確認）' });
    }
    if (slot === '夜勤') {
      const prevDate = new Date(date);
      prevDate.setDate(prevDate.getDate() - 1);
      const prevKey = formatDateKey(prevDate);
      if (calendarShifts[prevKey] && calendarShifts[prevKey].staff) {
        const workedEarly = calendarShifts[prevKey].staff.some(ps => ps.id === s.id);
        if (workedEarly) {
          warnings.push({ name: s.name, message: '前日早番→夜勤（インターバル不足の恐れ）' });
        }
      }
    }
  });
  return warnings;
}

/* ===== Weekly View ===== */
function switchView(view) {
  currentView = view;
  document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector('.view-toggle-btn[data-view="' + view + '"]');
  if (activeBtn) activeBtn.classList.add('active');

  if (view === 'weekly') {
    generateWeeklyShifts();
  } else {
    if (lastPrimaryResult) {
      generateShift();
    } else {
      document.getElementById('shift-results').innerHTML =
        '<div class="result-placeholder"><div class="result-placeholder-icon">&#128197;</div>' +
        '<div style="font-size:16px;font-weight:600;margin-bottom:var(--space-2);">シフトを生成してください</div>' +
        '<div>左の条件を設定し「AIでシフト生成」ボタンをクリック</div></div>';
    }
  }
}

function generateWeeklyShifts() {
  const date = getSelectedDate();
  const dayOfWeek = date.getDay();
  const monday = new Date(date);
  monday.setDate(date.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

  const results = document.getElementById('shift-results');
  const days = [];
  const weekLevels = ['通常', '繁忙', '通常', '軽量', '通常', '繁忙'];

  for (let i = 0; i < 6; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dayName = dayNames[d.getDay()];
    const level = weekLevels[i];
    const minScore = shipmentLevels[level].minScore;
    const available = getAvailableStaff(d, selectedSlot);
    const result = algoEfficiency(available, minScore);

    days.push({ date: d, dayName: dayName, dateStr: (d.getMonth()+1) + '/' + d.getDate(), level: level, result: result, minScore: minScore });
  }

  let html = '<div class="weekly-grid">';
  days.forEach((day, i) => {
    const statusClass = day.result.status === '充足' ? 'badge-success' : 'badge-danger';
    const dateKey = formatDateKey(day.date);
    const isConfirmed = calendarShifts[dateKey] && calendarShifts[dateKey].status === '確定';

    html += '<div class="weekly-cell" onclick="selectWeeklyDay(\'' + formatDateKey(day.date) + '\')">' +
      '<div class="weekly-cell-date">' + day.dayName + ' ' + day.dateStr + '</div>' +
      '<div class="weekly-cell-level">' + day.level + '</div>' +
      '<div style="margin-bottom:var(--space-1);">' +
        '<span class="badge ' + statusClass + '" style="font-size:11px;">' + day.result.status + '</span>' +
        (isConfirmed ? ' <span class="badge badge-success" style="font-size:10px;">確定済</span>' : '') +
      '</div>' +
      '<div class="weekly-cell-info">' + day.result.staff.length + '名 / ' + day.result.totalScore.toFixed(1) + 'pt</div>' +
    '</div>';
  });
  html += '</div>';

  results.innerHTML = html;
}

function selectWeeklyDay(dateKey) {
  document.getElementById('shift-date').value = dateKey;
  currentView = 'daily';
  document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
  const dailyBtn = document.querySelector('.view-toggle-btn[data-view="daily"]');
  if (dailyBtn) dailyBtn.classList.add('active');
  generateShift();
}

/* ===== Calendar ===== */
function generateCalendarData() {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Seeded pseudo-random (mulberry32) — consistent per month
  function mulberry32(seed) {
    return function() {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const rand = mulberry32(year * 100 + month);

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const key = formatDateKey(date);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0) {
      calendarShifts[key] = { status: '休み', people: 0, score: 0, level: '-' };
      continue;
    }

    // Shipment level based on day-of-week with variation
    let level;
    const r1 = rand();
    if (dayOfWeek === 1 || dayOfWeek === 5) {
      level = r1 < 0.65 ? '繁忙' : (r1 < 0.85 ? '通常' : '超繁忙');
    } else if (dayOfWeek === 3) {
      level = r1 < 0.55 ? '軽量' : (r1 < 0.85 ? '通常' : '繁忙');
    } else if (dayOfWeek === 2 || dayOfWeek === 4) {
      level = r1 < 0.60 ? '通常' : (r1 < 0.80 ? '繁忙' : '軽量');
    } else {
      level = r1 < 0.40 ? '通常' : (r1 < 0.70 ? '軽量' : '繁忙');
    }

    const minScore = shipmentLevels[level].minScore;
    const available = getAvailableStaff(date, '早番');
    const result = algoEfficiency(available, minScore);
    let actualScore = result.totalScore;
    let staffList = result.staff;

    const r2 = rand();
    const r3 = rand();

    // Realistic status distribution
    let forcedStatus = null;
    if (dayOfWeek === 6) {
      forcedStatus = r2 < 0.40 ? '確定' : (r2 < 0.75 ? '仮' : '人員不足');
    } else {
      if (r2 < 0.50) forcedStatus = '確定';
      else if (r2 < 0.70) forcedStatus = '仮';
      else if (r2 < 0.80) forcedStatus = '人員不足';
    }

    let finalStatus, finalScore, finalPeople = staffList.length;

    if (forcedStatus === '確定') {
      finalScore = r3 < 0.3 ? minScore + (r3 * 3.0) : Math.max(actualScore, minScore + r3 * 0.25 * minScore);
      finalStatus = '確定';
    } else if (forcedStatus === '仮') {
      finalScore = r3 > 0.6 ? minScore - (0.5 + r3 * 2.5) : minScore * (0.70 + r3 * 0.29);
      finalStatus = '仮';
      finalPeople = Math.max(1, finalPeople - Math.floor(r3 * 2 + 1));
    } else if (forcedStatus === '人員不足') {
      finalScore = minScore * (0.35 + r3 * 0.34);
      finalStatus = '人員不足';
      finalPeople = Math.max(1, Math.floor(finalPeople * (0.3 + r3 * 0.3)));
    } else {
      if (actualScore >= minScore) {
        finalStatus = '確定';
        finalScore = actualScore + (r3 - 0.5) * 2;
      } else if (actualScore >= minScore * 0.7) {
        finalStatus = '仮';
        finalScore = actualScore;
      } else {
        finalStatus = '人員不足';
        finalScore = actualScore;
      }
    }

    calendarShifts[key] = {
      status: finalStatus,
      people: finalPeople,
      score: Math.round(finalScore * 10) / 10,
      level: level,
      staff: staffList.slice(0, Math.min(finalPeople, staffList.length))
    };
  }
}

function formatDateKey(date) {
  return date.getFullYear() + '-' + String(date.getMonth()+1).padStart(2,'0') + '-' + String(date.getDate()).padStart(2,'0');
}

function renderCalendar() {
  generateCalendarData();
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  document.getElementById('calendar-month').textContent = year + '年 ' + (month+1) + '月';

  const grid = document.getElementById('calendar-grid');
  let html = '';

  // Day headers
  dayNames.forEach(d => { html += '<div class="calendar-day-header">' + d + '</div>'; });

  // First day offset
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();
  const today = new Date();

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    html += '<div class="calendar-day other-month"><div class="calendar-day-num">' + (prevMonthDays - i) + '</div></div>';
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const key = formatDateKey(date);
    const shift = calendarShifts[key];
    const isToday = date.toDateString() === today.toDateString();

    let statusClass = 'cal-off';
    let statusText = '休み';
    if (shift) {
      if (shift.status === '確定') { statusClass = 'cal-ok'; statusText = '充足'; }
      else if (shift.status === '仮') { statusClass = 'cal-warn'; statusText = '不足気味'; }
      else if (shift.status === '人員不足') { statusClass = 'cal-danger'; statusText = '人員不足'; }
      else { statusClass = 'cal-off'; statusText = '休み'; }
    }

    html += '<div class="calendar-day' + (isToday ? ' today' : '') + '" onclick="showCalendarDetail(\'' + key + '\',' + d + ')">' +
      '<div class="calendar-day-num">' + d + '</div>' +
      '<div class="calendar-day-status ' + statusClass + '">' + statusText + '</div>' +
      (shift && shift.people > 0 ? '<div class="calendar-day-people">' + shift.people + '名</div>' : '') +
    '</div>';
  }

  // Next month days
  const totalCells = firstDay + daysInMonth;
  const remaining = (7 - totalCells % 7) % 7;
  for (let i = 1; i <= remaining; i++) {
    html += '<div class="calendar-day other-month"><div class="calendar-day-num">' + i + '</div></div>';
  }

  grid.innerHTML = html;

  // Render mobile list
  renderCalendarList(year, month, daysInMonth);
}

function renderCalendarList(year, month, daysInMonth) {
  const list = document.getElementById('calendar-list');
  let html = '';

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const key = formatDateKey(date);
    const shift = calendarShifts[key];
    const dayName = dayNames[date.getDay()];

    let statusBadge = '<span class="badge badge-muted">休み</span>';
    if (shift && shift.status === '確定') statusBadge = '<span class="badge badge-success">充足</span>';
    else if (shift && shift.status === '仮') statusBadge = '<span class="badge badge-warning">不足気味</span>';
    else if (shift && shift.status === '人員不足') statusBadge = '<span class="badge badge-danger">人員不足</span>';

    html += '<div class="calendar-list-item" onclick="showCalendarDetail(\'' + key + '\',' + d + ')">' +
      '<div class="calendar-list-date"><div class="day-num">' + d + '</div><div class="day-name">' + dayName + '</div></div>' +
      '<div class="calendar-list-info">' +
        '<div style="display:flex;align-items:center;gap:8px;">' + statusBadge +
          (shift && shift.people > 0 ? '<span style="font-size:13px;">' + shift.people + '名 / ' + shift.level + '</span>' : '') +
        '</div>' +
      '</div>' +
    '</div>';
  }

  list.innerHTML = html;
}

function showCalendarDetail(key, day) {
  const shift = calendarShifts[key];
  const detail = document.getElementById('calendar-detail');
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth() + 1;

  calendarDetailDateKey = year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');

  document.getElementById('detail-date').textContent = year + '/' + month + '/' + day + ' のシフト詳細';

  // Show "go to shift gen" button
  var genBtn = document.getElementById('detail-gen-btn');
  if (genBtn) genBtn.style.display = 'inline-flex';

  if (!shift || shift.status === '休み') {
    document.getElementById('detail-body').innerHTML = '<p style="color:var(--color-on-surface-variant);">この日は休業日です。</p>';
  } else {
    let staffHTML = '';
    if (shift.staff && shift.staff.length > 0) {
      staffHTML = '<div style="margin-top:var(--space-3);"><strong>配置スタッフ:</strong></div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:var(--space-2);margin-top:var(--space-2);">' +
        shift.staff.map(s => '<span class="badge badge-primary" style="padding:4px 12px;">' + s.name + ' (Lv.' + s.skillLevel + ')</span>').join('') +
        '</div>';
    }

    var recruitBtn = shift.status === '人員不足'
      ? '<div style="margin-top:var(--space-4);"><button class="btn btn-sm btn-dev-feature" onclick="showDevPopup()" style="font-size:12px;">追加人員を募集</button></div>'
      : '';

    document.getElementById('detail-body').innerHTML =
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);">' +
        '<div><div class="stat-label">出荷レベル</div><div style="font-weight:600;font-size:16px;">' + shift.level + '</div></div>' +
        '<div><div class="stat-label">ステータス</div><div><span class="badge ' + (shift.status === '確定' ? 'badge-success' : shift.status === '仮' ? 'badge-warning' : 'badge-danger') + '">' + shift.status + '</span></div></div>' +
        '<div><div class="stat-label">配置人数</div><div style="font-weight:600;font-size:16px;">' + shift.people + '名</div></div>' +
        '<div><div class="stat-label">スコア</div><div style="font-weight:600;font-size:16px;">' + shift.score.toFixed(1) + '</div></div>' +
      '</div>' +
      staffHTML + recruitBtn;
  }

  detail.classList.add('active');
}

function changeMonth(delta) {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + delta, 1);
  document.getElementById('calendar-detail').classList.remove('active');
  renderCalendar();
}

/* ===== Dashboard Today Summary (3-Slot + Timeline) ===== */
function renderTodaySummary() {
  const today = new Date();
  const minScore = 40; // 通常レベル

  const slots = [
    { name: '早番', time: '8:00〜17:00', cssClass: 'card-early', barClass: 'slot-early', color: 'var(--color-primary)' },
    { name: '遅番', time: '15:00〜22:00', cssClass: 'card-late', barClass: 'slot-late', color: '#7c3aed' },
    { name: '夜勤', time: '22:00〜翌7:00', cssClass: 'card-night', barClass: 'slot-night', color: '#1e3a5f' }
  ];

  // Generate results for each slot (exclude already-assigned staff from later slots)
  var assignedIds = {};
  const slotResults = slots.map(slot => {
    const available = getAvailableStaff(today, slot.name).filter(function(s) { return !assignedIds[s.id]; });
    const result = algoEfficiency(available, minScore);
    result.staff.forEach(function(s) { assignedIds[s.id] = true; });
    return { ...slot, result, available };
  });

  // ---- Render 3-Slot Summary Cards ----
  var summariesHTML = '';
  slotResults.forEach(function(sr) {
    var r = sr.result;
    var pct = Math.min((r.totalScore / minScore) * 100, 100);
    var statusBadge = r.status === '充足'
      ? '<span class="badge badge-success">' + r.status + '</span>'
      : '<span class="badge badge-danger">' + r.status + '</span>';
    var shown = r.staff.slice(0, 6);
    var remaining = r.staff.length - shown.length;
    var chipsHTML = shown.map(function(s) {
      return '<span class="slot-summary-chip"><span class="chip-name">' + s.name + '</span> Lv.' + s.skillLevel + '</span>';
    }).join('');
    if (remaining > 0) {
      chipsHTML += '<span class="slot-summary-chip" style="background:var(--color-primary-container);color:var(--color-primary);">+' + remaining + '名</span>';
    }
    var fillColor = r.status === '充足' ? 'var(--color-success)' : 'var(--color-danger)';

    summariesHTML += '<div class="slot-summary-card ' + sr.cssClass + '">' +
      '<div class="slot-summary-header">' +
        '<div><div class="slot-summary-slot-name">' + sr.name + '</div>' +
        '<div class="slot-summary-time">' + sr.time + '</div></div>' +
        statusBadge +
      '</div>' +
      '<div class="slot-summary-chips">' + chipsHTML + '</div>' +
      '<div class="slot-summary-score-row">' +
        '<div class="slot-summary-score-bar">' +
          '<div class="slot-summary-score-fill" data-width="' + pct + '" style="width:0;background:' + fillColor + ';"></div>' +
        '</div>' +
        '<span class="slot-summary-score-text">' + r.totalScore.toFixed(1) + '/' + minScore + ' (' + r.staff.length + '名)</span>' +
      '</div>' +
    '</div>';
  });
  document.getElementById('slot-summaries').innerHTML = summariesHTML;

  // Animate score bars
  setTimeout(function() {
    document.querySelectorAll('.slot-summary-score-fill').forEach(function(bar) {
      bar.style.width = bar.getAttribute('data-width') + '%';
    });
  }, 300);

  // ---- Render Day Timeline ----
  var tlMin = 6;   // 6:00
  var tlMax = 32;  // 翌8:00 (=32 for night shift)
  var tlRange = tlMax - tlMin;
  var timelineEl = document.getElementById('day-timeline');

  // Hour markers
  var hoursHTML = '<div class="timeline-hours">';
  for (var h = tlMin; h <= tlMax; h += 2) {
    var leftPct = ((h - tlMin) / tlRange) * 100;
    var label = (h % 24) + ':00';
    if (h >= 24) label = (h - 24) + ':00';
    hoursHTML += '<span class="timeline-hour-mark" style="left:' + leftPct + '%;">' + label + '</span>';
    hoursHTML += '<span class="timeline-hour-tick" style="left:' + leftPct + '%;"></span>';
  }
  hoursHTML += '</div>';

  // Now indicator
  var now = today.getHours() + today.getMinutes() / 60;
  var nowHTML = '';
  if (now >= tlMin && now <= tlMax) {
    var nowPct = ((now - tlMin) / tlRange) * 100;
    nowHTML = '<div class="timeline-now-line" style="left:' + nowPct + '%;"><span class="timeline-now-label">現在</span></div>';
  }

  // Slot bars
  var rowsHTML = '';
  var slotTimes = [
    { name: '早番', start: 8, end: 17, barClass: 'slot-early' },
    { name: '遅番', start: 15, end: 22, barClass: 'slot-late' },
    { name: '夜勤', start: 22, end: 31, barClass: 'slot-night' }
  ];

  slotTimes.forEach(function(st, i) {
    var sr = slotResults[i];
    var leftPct = ((st.start - tlMin) / tlRange) * 100;
    var widthPct = ((st.end - st.start) / tlRange) * 100;
    var countLabel = sr.result.staff.length + '名';
    var statusColor = sr.result.status === '充足' ? 'var(--color-success)' : 'var(--color-danger)';

    rowsHTML += '<div class="timeline-slot-row">' +
      '<span class="timeline-slot-label">' + st.name + '</span>' +
      '<div class="timeline-slot-bar-area">' +
        '<div class="timeline-slot-bar ' + st.barClass + '" style="left:' + leftPct + '%;width:' + widthPct + '%;">' +
          countLabel +
        '</div>' +
      '</div>' +
      '<span class="timeline-slot-meta"><span class="meta-count" style="color:' + statusColor + ';">' + sr.result.status + '</span></span>' +
    '</div>';
  });

  timelineEl.innerHTML = hoursHTML + '<div style="position:relative;">' + nowHTML + rowsHTML + '</div>';

  // Render alert feed
  renderAlertFeed(slotResults);

  // Update KPI cards with realistic data
  updateDashboardKPIs(slotResults);
}

function updateDashboardKPIs(todaySlotResults) {
  // Staff count — exclude retired/inactive (no available days)
  var activeCount = staffData.filter(function(s) { return s.availableDays.length > 0; }).length;
  var inactiveCount = staffData.length - activeCount;
  document.getElementById('stat-staff').textContent = staffData.length;
  var staffSub = document.getElementById('stat-staff-sub');
  if (staffSub) {
    staffSub.textContent = inactiveCount > 0
      ? activeCount + '名 稼働中 / ' + inactiveCount + '名 休止'
      : '全員アクティブ';
  }

  // Weekly shifts — calculate from calendar data
  var today = new Date();
  var dayOfWeek = today.getDay(); // 0=Sun
  var monday = new Date(today); monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
  var totalShifts = 0;
  var filledSlots = 0;
  var totalSlots = 0;
  for (var i = 0; i < 6; i++) { // Mon-Sat
    var d = new Date(monday); d.setDate(monday.getDate() + i);
    var key = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
    var shift = calendarShifts[key];
    if (shift && shift.status !== '休み') {
      totalShifts += shift.people || 0;
      totalSlots++;
      if (shift.status === '確定' || shift.status === '仮') filledSlots++;
    } else {
      // No calendar entry — estimate from today's slot results
      if (i === (dayOfWeek + 6) % 7) { // today
        todaySlotResults.forEach(function(sr) { totalShifts += sr.result.staff.length; });
        totalSlots += 3;
        filledSlots += 3;
      }
    }
  }
  // Fallback if calendar data is sparse
  if (totalShifts === 0) totalShifts = todaySlotResults.reduce(function(sum, sr) { return sum + sr.result.staff.length; }, 0) * 6;
  if (totalSlots === 0) totalSlots = 18;
  if (filledSlots === 0) filledSlots = Math.round(totalSlots * 0.85);

  var coverageRate = Math.round((filledSlots / totalSlots) * 100);
  var weeklyShiftsEl = document.getElementById('stat-weekly-shifts');
  var weeklyCoverageEl = document.getElementById('stat-weekly-coverage');
  if (weeklyShiftsEl) weeklyShiftsEl.textContent = totalShifts;
  if (weeklyCoverageEl) weeklyCoverageEl.textContent = '充足率 ' + coverageRate + '%';
}

/* ===== Dashboard: Alert Feed ===== */
function renderAlertFeed(slotResults) {
  var alerts = [];
  var today = new Date();
  var dayNames = ['日','月','火','水','木','金','土'];
  var todayStr = (today.getMonth()+1) + '/' + today.getDate() + '(' + dayNames[today.getDay()] + ')';

  // Check each slot for understaffing
  slotResults.forEach(function(sr) {
    if (sr.result.status === '人員不足') {
      alerts.push({
        type: 'danger',
        text: '本日 ' + todayStr + ' ' + sr.name + ' が<strong>人員不足</strong>です（スコア: ' + sr.result.totalScore.toFixed(1) + '/40）',
        time: '今日',
        action: 'recruit'
      });
    }
  });

  // Check tomorrow (with slot exclusion like dashboard)
  var tmr = new Date(today); tmr.setDate(tmr.getDate() + 1);
  var tmrStr = (tmr.getMonth()+1) + '/' + tmr.getDate() + '(' + dayNames[tmr.getDay()] + ')';
  var tmrAssigned = {};
  ['早番','遅番','夜勤'].forEach(function(slot) {
    var available = getAvailableStaff(tmr, slot).filter(function(s) { return !tmrAssigned[s.id]; });
    var result = algoEfficiency(available, 40);
    result.staff.forEach(function(s) { tmrAssigned[s.id] = true; });
    if (result.status === '人員不足') {
      alerts.push({
        type: 'warn',
        text: '明日 ' + tmrStr + ' ' + slot + ' が人員不足の見込み（' + result.staff.length + '名 / スコア: ' + result.totalScore.toFixed(1) + '）',
        time: '明日'
      });
    }
  });

  // Labor risk alerts (6+ day workers)
  var weekdayCount = {};
  staffData.forEach(function(s) {
    if (s.availableDays.length >= 6) {
      if (!weekdayCount.labor) weekdayCount.labor = [];
      weekdayCount.labor.push(s.name);
    }
  });
  if (weekdayCount.labor && weekdayCount.labor.length > 0) {
    var names = weekdayCount.labor.slice(0, 2).join('、');
    var more = weekdayCount.labor.length > 2 ? ' 他' + (weekdayCount.labor.length - 2) + '名' : '';
    alerts.push({
      type: 'warn',
      text: names + more + ' — 週6日以上の出勤登録（連勤注意）',
      time: '常時'
    });
  }

  // Shift confirmed today
  alerts.push({
    type: 'success',
    text: todayStr + ' 早番のシフトが確定済みです',
    time: '8:00'
  });

  // Info
  alerts.push({
    type: 'info',
    text: 'スタッフ登録数が <strong>' + staffData.length + '名</strong> になりました',
    time: '最新'
  });

  var listEl = document.getElementById('alert-feed-list');
  if (!listEl) return;
  var iconMap = { danger: '!', warn: '!', info: 'i', success: '&#10003;' };
  listEl.innerHTML = alerts.slice(0, 5).map(function(a) {
    var actionBtn = a.action === 'recruit'
      ? ' <button class="btn btn-sm btn-dev-feature" onclick="showDevPopup()" style="margin-left:var(--space-2);padding:2px 10px;font-size:11px;">追加人員を募集</button>'
      : '';
    return '<li class="alert-feed-item">' +
      '<span class="alert-icon ' + a.type + '">' + iconMap[a.type] + '</span>' +
      '<span class="alert-feed-text">' + a.text + actionBtn + '</span>' +
      '<span class="alert-feed-time">' + a.time + '</span>' +
    '</li>';
  }).join('');
}

/* ===== Calendar → Shift Gen Link ===== */
var calendarDetailDateKey = '';

function goToShiftGenFromCalendar() {
  if (!calendarDetailDateKey) return;
  var parts = calendarDetailDateKey.split('-');
  var y = parseInt(parts[0]), m = parseInt(parts[1]) - 1, d = parseInt(parts[2]);
  var dateObj = new Date(y, m, d);
  switchPage('generate');
  // Set the date in the shift generator
  var dateInput = document.getElementById('shift-date');
  if (dateInput) {
    dateInput.value = calendarDetailDateKey;
    updateShiftInfo();
  }
}

/* showDevPopup is defined earlier — single unified version */

/* ===== Settings ===== */
const appSettings = { darkHeader: true, compactMode: false, defaultPage: 'dashboard', notifyShiftChange: true, notifyLaborWarning: true, notifyAbsence: true };

function openSettingsModal() {
  document.getElementById('setting-dark-header').checked = appSettings.darkHeader;
  document.getElementById('setting-compact').checked = appSettings.compactMode;
  document.getElementById('setting-default-page').value = appSettings.defaultPage;
  document.getElementById('setting-notify-shift').checked = appSettings.notifyShiftChange;
  document.getElementById('setting-notify-labor').checked = appSettings.notifyLaborWarning;
  document.getElementById('setting-notify-absence').checked = appSettings.notifyAbsence;
  switchSettingsTab('display');
  document.getElementById('settings-modal').classList.add('active');
}

function closeSettingsModal() { document.getElementById('settings-modal').classList.remove('active'); }

function switchSettingsTab(tabName) {
  document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.settings-tab-content').forEach(c => c.classList.remove('active'));
  const tab = document.querySelector('.settings-tab[data-settings-tab="' + tabName + '"]');
  if (tab) tab.classList.add('active');
  const content = document.getElementById('settings-' + tabName);
  if (content) content.classList.add('active');
}

function updateSetting(key, value) {
  appSettings[key] = value;
  if (key === 'darkHeader') { document.querySelector('.nav').style.background = value ? '#1a1a2e' : '#2c3e6b'; }
  if (key === 'compactMode') {
    document.body.style.fontSize = value ? '13px' : '14px';
    document.querySelectorAll('.page').forEach(p => { p.style.padding = value ? 'var(--space-4)' : 'var(--space-6)'; });
  }
  showToast('設定を更新しました');
}

function handleLogout() {
  closeSettingsModal();
  showDevPopup('これはデモ環境のため、実際のログアウト処理は行われません。本番環境では認証システムと連携します。');
}

/* ===== CSV Import ===== */
var csvParsedData = [];

function openCsvModal() { document.getElementById('csv-modal').classList.add('active'); resetCsvModal(); }
function closeCsvModal() { document.getElementById('csv-modal').classList.remove('active'); resetCsvModal(); }

function resetCsvModal() {
  document.getElementById('csv-file-input').value = '';
  document.getElementById('csv-preview-container').style.display = 'none';
  document.getElementById('csv-preview-area').innerHTML = '';
  document.getElementById('csv-summary').innerHTML = '';
  document.getElementById('csv-apply-btn').disabled = true;
  csvParsedData = [];
}

function handleCsvFileSelect(event) {
  var file = event.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) { parseCsvAndPreview(e.target.result); };
  reader.readAsText(file, 'UTF-8');
}

function parseCsvAndPreview(csvText) {
  var lines = csvText.split(/\r?\n/).filter(function(l) { return l.trim() !== ''; });
  if (lines.length === 0) return;
  var startIndex = 0;
  if (lines[0].indexOf('名前') >= 0 || lines[0].indexOf('曜日') >= 0) startIndex = 1;
  csvParsedData = [];
  for (var i = startIndex; i < lines.length; i++) {
    var cols = lines[i].split(',');
    if (cols.length < 3) continue;
    var name = cols[0].trim(), daysRaw = cols[1].trim(), slotsRaw = cols[2].trim();
    if (!name) continue;
    var days = [], allDays = '月火水木金土日';
    for (var d = 0; d < daysRaw.length; d++) { if (allDays.indexOf(daysRaw[d]) >= 0 && days.indexOf(daysRaw[d]) < 0) days.push(daysRaw[d]); }
    var slots = [], knownSlots = ['早番','遅番','夜勤','通し'];
    for (var s = 0; s < knownSlots.length; s++) { if (slotsRaw.indexOf(knownSlots[s]) >= 0) slots.push(knownSlots[s]); }
    var staffIndex = -1;
    for (var j = 0; j < staffData.length; j++) { if (staffData[j].name === name) { staffIndex = j; break; } }
    csvParsedData.push({ name: name, days: days, slots: slots, matched: staffIndex >= 0, staffIndex: staffIndex });
  }
  renderCsvPreview();
}

function renderCsvPreview() {
  var container = document.getElementById('csv-preview-container');
  var preview = document.getElementById('csv-preview-area');
  var summary = document.getElementById('csv-summary');
  if (csvParsedData.length === 0) { container.style.display = 'none'; return; }
  container.style.display = 'block';
  var matchCount = 0, noMatchCount = 0;
  var html = '<table><tr><th>ステータス</th><th>名前</th><th>曜日</th><th>時間帯</th></tr>';
  csvParsedData.forEach(function(row) {
    var cls = row.matched ? 'csv-preview-row-match' : 'csv-preview-row-nomatch';
    var status = row.matched ? '<span class="csv-preview-status match">&#10003; 一致</span>' : '<span class="csv-preview-status nomatch">&#10007; 不一致</span>';
    if (row.matched) matchCount++; else noMatchCount++;
    html += '<tr class="' + cls + '"><td>' + status + '</td><td>' + row.name + '</td><td>' + row.days.join('') + '</td><td>' + row.slots.join(' ') + '</td></tr>';
  });
  html += '</table>';
  preview.innerHTML = html;
  var sClass = noMatchCount > 0 ? 'csv-summary csv-summary-warn' : 'csv-summary csv-summary-ok';
  var sText = matchCount + '名が一致' + (noMatchCount > 0 ? '、' + noMatchCount + '名は名前が一致しません（スキップされます）' : '');
  summary.innerHTML = '<div class="' + sClass + '">' + sText + '</div>';
  document.getElementById('csv-apply-btn').disabled = (matchCount === 0);
}

function applyCsvData() {
  var updated = 0, skipped = 0;
  csvParsedData.forEach(function(row) {
    if (row.matched && row.staffIndex >= 0) { staffData[row.staffIndex].availableDays = row.days.slice(); staffData[row.staffIndex].availableSlots = row.slots.slice(); updated++; }
    else skipped++;
  });
  closeCsvModal(); renderStaffGrid(); updateShiftInfo();
  showToast(updated + '名のデータを更新しました' + (skipped > 0 ? '（' + skipped + '名は名前が一致しませんでした）' : ''));
}

/* ===== Init ===== */
function init() {
  // Set default date to today
  const today = new Date();
  const dateStr = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');
  document.getElementById('shift-date').value = dateStr;

  renderStaffGrid();
  updateShiftInfo();
  renderCalendar();
  renderTodaySummary();

  // Update shift info when date changes
  document.getElementById('shift-date').addEventListener('change', updateShiftInfo);
}

// Close modals on overlay click
document.getElementById('staff-modal').addEventListener('click', function(e) { if (e.target === this) closeStaffModal(); });
document.getElementById('settings-modal').addEventListener('click', function(e) { if (e.target === this) closeSettingsModal(); });
document.getElementById('csv-modal').addEventListener('click', function(e) { if (e.target === this) closeCsvModal(); });

// Keyboard support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeStaffModal(); closeAbsencePanel(); closeSettingsModal(); closeCsvModal(); }
});

init();
