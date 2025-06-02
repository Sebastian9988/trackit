import dayjs from 'dayjs';

const HabitCard = ({ habit, onToggle, onDelete }) => {
	const {completed_dates: completedDates = [], done_today: doneToday} = habit;
	const totalDays = 7;
	const datesSet = new Set(completedDates);
	const now = dayjs();

	let completed = 0;
	for (let i = 0; i < totalDays; i++) {
		const d = now.subtract(i, 'day').format('YYYY-MM-DD');
		if (datesSet.has(d)) completed++;
	}
	const percentage = Math.round((completed / totalDays) * 100);

  return (
		<>
    <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg mb-4">
      <div>
        <h2 className="text-lg font-semibold">{habit.name}</h2>
        <p className="text-sm text-gray-500">
          {doneToday ? 'Completado hoy ✅' : 'Pendiente ❌'}
        </p>
      </div>
			
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(habit.id)}
          className={`px-3 py-1 rounded text-white ${
            doneToday ? 'bg-gray-500' : 'bg-green-500'
          }`}
        >
          {doneToday ? 'Desmarcar' : 'Hecho'}
        </button>
        <button
					onClick={() => onDelete(habit.id)}
					className="px-3 py-1 bg-red-500 text-white rounded"
					>
					🗑️
				</button>
      </div>
    </div>
		<div className="mt-4 space-y-2">
			<div>
				<h3 className="text-white font-bold">Versión A: Contador</h3>
				{/* contador simple */}
				<p className="text-sm text-white">
					Lo hiciste {completedDates?.length || 0} días en total.
				</p>
			</div>
			<div>
				<h3 className="text-white font-bold">Versión C: Porcentaje</h3>
				{/* porcentaje */}
				<p className="text-sm text-white mt-2">
					Cumpliste el hábito el {percentage}% de los últimos {totalDays} días.
				</p>

			</div>
		</div>
		</>

  );
};

export default HabitCard;
