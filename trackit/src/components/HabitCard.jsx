const HabitCard = ({ habit, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg mb-4">
      <div>
        <h2 className="text-lg font-semibold">{habit.name}</h2>
        <p className="text-sm text-gray-500">
          {habit.doneToday ? 'Completado hoy ✅' : 'Pendiente ❌'}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(habit.id)}
          className={`px-3 py-1 rounded text-white ${
            habit.doneToday ? 'bg-gray-500' : 'bg-green-500'
          }`}
        >
          {habit.doneToday ? 'Desmarcar' : 'Hecho'}
        </button>
        {onDelete && (
          <button
            onClick={() => onDelete(habit.id)}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            🗑️
          </button>
        )}
      </div>
    </div>
  );
};

export default HabitCard;
