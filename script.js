const cards = document.querySelectorAll('.resource-card');
const panels = document.querySelectorAll('.feature-panel');
const quickStartButton = document.querySelector('#quick-start');
const faqButtons = document.querySelectorAll('.faq-question');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const targetId = card.dataset.target;
    if (!targetId) return;

    const section = document.getElementById(targetId);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const toggle = section.querySelector('.panel-toggle');
    const body = section.querySelector('.panel-body');
    if (body && !body.classList.contains('open')) {
      closeAllPanels();
      body.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.textContent = 'Hide details';
    }
  });
});

function closeAllPanels() {
  panels.forEach((panel) => {
    const body = panel.querySelector('.panel-body');
    const toggle = panel.querySelector('.panel-toggle');
    if (body && body.classList.contains('open')) {
      body.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Show more';
    }
  });
}

const toggles = document.querySelectorAll('.panel-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const panel = toggle.closest('.feature-panel');
    const body = panel.querySelector('.panel-body');
    const isOpen = body.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.textContent = isOpen ? 'Hide details' : 'Show more';
  });
});

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.classList.toggle('open');
    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

if (quickStartButton) {
  quickStartButton.addEventListener('click', () => {
    const firstPanel = document.querySelector('.feature-panel');
    if (!firstPanel) return;
    firstPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const firstToggle = firstPanel.querySelector('.panel-toggle');
    if (firstToggle) firstToggle.click();
  });
}
