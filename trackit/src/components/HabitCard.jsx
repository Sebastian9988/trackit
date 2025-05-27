const HabitCard = ({ habit, onToggle }) => {
  return (
    <div className="border p-4 rounded-xl shadow mb-3 flex justify-between items-center">
      <span>{habit.name}</span>
      <button
        className={`px-4 py-2 rounded ${
          habit.doneToday ? 'bg-green-500' : 'bg-gray-300'
        }`}
        onClick={() => onToggle(habit.id)}
      >
        {habit.doneToday ? 'Hecho' : 'No hecho'}
      </button>
    </div>
  );
};

export default HabitCard;
