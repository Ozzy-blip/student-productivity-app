* {
  box-sizing: border-box;
}

:root {
  --primary: #3eb7ff;
  --primary-700: #2ea0e6;
  --primary-soft: #eaf8ff;
  --bg: #f6f9fc;
  --surface: #ffffff;
  --surface-strong: #f1f7fd;
  --text: #0f1724;
  --muted: #75839a;
  --border: #e8eef5;
  --success: #3bd48a;
  --warning: #ffb547;
  --danger: #ff6b6b;
  --purple: #8b5cf6;
  --gold: #ffd166;
  --shadow-soft: 0 8px 22px rgba(24, 35, 48, 0.06);
  --radius: 22px;
  --radius-sm: 16px;
  --radius-lg: 26px;
  --transition: 180ms ease;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Inter, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  padding: 20px 0 40px;
}

button {
  font: inherit;
}

.app-shell {
  width: min(100%, 460px);
  padding: 0 18px 24px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

h1, h2, h3 {
  margin: 0;
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
}

h1 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  line-height: 1;
}

.level-pill {
  padding: 12px 14px;
  border-radius: 16px;
  background: var(--primary-soft);
  color: var(--primary-700);
  border: 2px solid rgba(62, 183, 255, 0.18);
  font-weight: 800;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.stat-card {
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: 20px;
  padding: 14px 12px 16px;
  box-shadow: var(--shadow-soft);
}

.stat-card strong {
  display: block;
  margin-top: 10px;
  font-size: 1.05rem;
  letter-spacing: -0.03em;
}

.stat-label {
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 700;
}

.accent-blue strong { color: var(--primary-700); }
.accent-green strong { color: var(--success); }
.accent-purple strong { color: var(--purple); }

.content-stack {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.panel {
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 16px 16px 12px;
  box-shadow: var(--shadow-soft);
}

.panel-compact {
  padding-bottom: 14px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.panel-header h2 {
  font-size: 1.45rem;
}

.text-button {
  border: none;
  background: none;
  color: var(--primary-700);
  font-weight: 800;
  cursor: pointer;
}

.task-list,
.check-list,
.vault-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-card {
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: 20px;
  padding: 14px 14px 12px;
  transition: transform var(--transition), box-shadow var(--transition);
}

.task-card:hover,
.vault-item:hover,
.habit-card:hover {
  transform: translateY(-1px);
}

.task-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 14px;
}

.task-title {
  font-size: 1.18rem;
  margin-bottom: 3px;
}

.task-course {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.badge {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  color: white;
  align-self: flex-start;
}

.meta-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 700;
}

.time-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: var(--border);
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), var(--purple));
  transition: width 260ms ease;
}

.progress-bar.thin {
  height: 9px;
}

.check-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 6px;
  cursor: pointer;
  user-select: none;
}

.check-item input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.check-box {
  width: 22px;
  height: 22px;
  border-radius: 8px;
  border: 2px solid var(--border);
  background: var(--primary-soft);
  position: relative;
  transition: all var(--transition);
}

.check-item input:checked + .check-box {
  background: var(--success);
  border-color: var(--success);
}

.check-item input:checked + .check-box::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.check-text {
  font-weight: 700;
  font-size: 1rem;
}

.check-item input:checked ~ .check-text {
  color: var(--muted);
  text-decoration: line-through;
}

.habit-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.habit-card {
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: 22px;
  padding: 12px;
}

.habit-toprow {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 12px;
}

.habit-title {
  font-size: 1rem;
  margin-bottom: 4px;
}

.habit-subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 600;
}

.habit-burst {
  min-width: 52px;
  height: 52px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: rgba(62, 183, 255, 0.12);
}

.habit-bottomrow {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}

.habit-percent {
  font-weight: 800;
  color: var(--text);
}

.vault-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: 18px;
  padding: 12px 12px 12px 10px;
  transition: transform var(--transition), box-shadow var(--transition);
}

.vault-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: var(--primary-soft);
  display: grid;
  place-items: center;
  font-size: 1.6rem;
}

.vault-body {
  flex: 1;
}

.vault-title {
  font-size: 1.02rem;
  margin-bottom: 4px;
}

.vault-subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 0.8rem;
}

.chevron {
  color: var(--muted);
  font-size: 1.5rem;
  line-height: 1;
}

@media (max-width: 420px) {
  .habit-list {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    gap: 10px;
  }
}
