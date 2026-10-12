class HomeworkTask {
  final String title;
  final String course;
  final String dueLabel;
  final int progress;
  final String tag;
  final String accent;

  const HomeworkTask({
    required this.title,
    required this.course,
    required this.dueLabel,
    required this.progress,
    required this.tag,
    required this.accent,
  });
}

class ActionItem {
  final String title;
  final bool done;

  const ActionItem({
    required this.title,
    required this.done,
  });
}

class Habit {
  final String title;
  final String subtitle;
  final int streak;
  final int progress;
  final String color;

  const Habit({
    required this.title,
    required this.subtitle,
    required this.streak,
    required this.progress,
    required this.color,
  });
}

class VaultItem {
  final String title;
  final String subtitle;
  final String emoji;

  const VaultItem({
    required this.title,
    required this.subtitle,
    required this.emoji,
  });
}

const List<HomeworkTask> sampleHomeworkTasks = [
  HomeworkTask(
    title: 'Literature Reflection',
    course: 'English Lit',
    dueLabel: 'Due Tomorrow',
    progress: 72,
    tag: 'Due Tomorrow',
    accent: '#3EB7FF',
  ),
  HomeworkTask(
    title: 'Biology Lab Report',
    course: 'Biology',
    dueLabel: 'Due Friday',
    progress: 48,
    tag: 'Needs review',
    accent: '#FFB547',
  ),
  HomeworkTask(
    title: 'History Timeline',
    course: 'World History',
    dueLabel: 'Milestone',
    progress: 90,
    tag: 'Story Quest',
    accent: '#3BD48A',
  ),
];

const List<ActionItem> sampleActionItems = [
  ActionItem(title: 'Email professor', done: true),
  ActionItem(title: 'Print syllabus', done: false),
  ActionItem(title: 'Pack gym bag', done: false),
  ActionItem(title: 'Review lab notes', done: true),
];

const List<Habit> sampleHabits = [
  Habit(title: 'Flashcards', subtitle: '4/6 reviews', streak: 12, progress: 70, color: '#3EB7FF'),
  Habit(title: 'Deep Work', subtitle: '2h focused', streak: 5, progress: 82, color: '#8B5CF6'),
  Habit(title: 'Reading', subtitle: '24 pages', streak: 8, progress: 60, color: '#3BD48A'),
];

const List<VaultItem> sampleVaultItems = [
  VaultItem(title: 'Syllabus', subtitle: 'English Lit / PDF', emoji: '📄'),
  VaultItem(title: 'Drive Folder', subtitle: 'Research project', emoji: '🗂️'),
  VaultItem(title: 'Lecture Recordings', subtitle: 'Biology 101', emoji: '🎧'),
  VaultItem(title: 'Class Links', subtitle: 'Canvas + Zoom', emoji: '🔗'),
];
