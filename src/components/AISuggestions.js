function AISuggestions({ tasks }) {
  let message = "";

  if (tasks.length === 0) {
    message = "😴 No tasks yet. Start planning your day!";
  } else if (tasks.length > 5) {
    message = "⚠️ Too many tasks. Focus on top 3 priorities.";
  } else if (tasks.length <= 3) {
    message = "🚀 You’re on track. Keep pushing!";
  }

  return (
    <div>
      <h2>🤖 AI Suggestions</h2>
      <p>{message}</p>
    </div>
  );
}

export default AISuggestions;