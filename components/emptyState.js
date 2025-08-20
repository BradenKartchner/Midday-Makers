function showEmptyState() {
  const el = document.getElementById('checklist');
  el.innerHTML = `
    <div class="empty-state">
      <p>No habits selected yet. Let’s add some!</p>
      <button id="goToHabitPicker" class="btn">Pick Habits</button>
    </div>
  `;

  // Scroll to habit picker on button click
  document.getElementById('goToHabitPicker').onclick = () => {
    const picker = document.getElementById('habitPicker');
    if (picker) {
      picker.scrollIntoView({ behavior: 'smooth' });
    }
    // If using a router, you could do: router.navigate('/habit-picker');
  };
}

