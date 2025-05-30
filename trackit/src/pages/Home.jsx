import { useState } from 'react';
import HabitCard from '../components/HabitCard';
import dayjs from 'dayjs';

const Home = () => {
	const [habits, setHabits] = useState([
		{
			id: 1,
			name: 'Leer 20 minutos',
			doneToday: false,
			completedDates: ['2024-05-24', '2024-05-26']
		},
		{
			id: 2,
			name: 'Entrenar',
			doneToday: false,
			completedDates: ['2024-05-24', '2024-05-25', '2024-05-27']
		}
	]);

  const [newHabit, setNewHabit] = useState('');


	const toggleHabit = (id) => {
		const today = dayjs().format('YYYY-MM-DD');

		setHabits((prevHabits) =>
			prevHabits.map((habit) => {
				if (habit.id !== id) return habit;

				const alreadyCompleted = habit.completedDates.includes(today);

				return {
					...habit,
					doneToday: !habit.doneToday,
					completedDates: alreadyCompleted
						? habit.completedDates.filter((date) => date !== today)
						: [...habit.completedDates, today]
				};
			})
		);
	};


  const addHabit = () => {
    if (newHabit.trim() === '') return;

    const newId = Math.max(...habits.map(h => h.id)) + 1;
    setHabits([...habits, { id: newId, name: newHabit, doneToday: false }]);
    setNewHabit('');
  };

  const deleteHabit = (id) => {
		setHabits((prev) => prev.filter((habit) => habit.id !== id));
	};

  return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="max-w-xl w-full px-4">
					
				<h1 className="text-2xl font-bold mb-6">Mis hábitos</h1>

				<div className="flex mb-6 gap-2">
					<input
						type="text"
						placeholder="Nuevo hábito"
						value={newHabit}
						onChange={(e) => setNewHabit(e.target.value)}
						className="flex-grow border border-gray-300 rounded px-3 py-2"
					/>
					<button
						onClick={addHabit}
						className="bg-blue-500 text-white px-4 py-2 rounded"
					>
						Agregar
					</button>
				</div>

				{habits.map((habit) => (
					<HabitCard
						key={habit.id}
						habit={habit}
						onToggle={toggleHabit}
						onDelete={deleteHabit}
					/>
				))}
			</div>

    </div>
  );
};

export default Home;
