import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root not found');

app.innerHTML = `
<main class="screen">
<header><div class="profile"><b>✦</b><span>ASTRAL RIDER<small>LV. 1 · EXP 0 / 100</small></span></div><div class="resources">◇ 0　 ✧ 0　 ⚡ 120/120</div><button data-action="settings">⚙</button></header>
<aside class="side"><button data-action="events">🎁<small>Events</small></button><button data-action="daily">▣<small>Daily</small></button><button data-action="pass">✧<small>Pass</small></button></aside>
<section class="brand"><div>✧</div><h1>AETHERIA <em>ASTRA</em></h1><p>LEGENDS BEYOND THE STARS</p><small>Seven Elements. Infinite Worlds. One Destiny.</small></section>
<nav class="actions"><button class="primary" data-action="new-game">✦　 New Game　 ›</button><button data-action="continue">▶　 Continue</button><button data-action="characters">♟　 Characters</button><button data-action="creatures">❖　 Creatures</button><button data-action="settings">⚙　 Settings</button></nav>
<div class="caption">A NEW ADVENTURE AWAITS...</div>
<nav class="bottom"><button data-action="shop">🛒<small>Shop</small></button><button data-action="inventory">🎒<small>Inventory</small></button><button data-action="quests">📜<small>Quests</small></button><button data-action="map">🗺<small>Map</small></button></nav>
<div class="version">v0.1.0 · MOBILE BUILD</div></main>`;

const messages: Record<string,string> = {
'new-game':'New Game: prologue coming soon.','continue':'No saved adventure found yet.',
characters:'Character screen coming soon.',creatures:'Creature collection coming soon.',
settings:'Settings coming soon.',events:'Events coming soon.',daily:'Daily rewards coming soon.',
pass:'Pass coming soon.',shop:'Shop coming soon.',inventory:'Inventory coming soon.',
quests:'Quest log coming soon.',map:'World map coming soon.'
};
app.addEventListener('click', e => {
 const button = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-action]');
 if (button) alert(messages[button.dataset.action || ''] || 'Coming soon!');
});