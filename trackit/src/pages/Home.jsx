import { useState, useEffect } from 'react';
import HabitCard from '../components/HabitCard';
import dayjs from 'dayjs';
import { createHabit, deleteHabit, fetchHabits, markHabitDone } from '../services/api';

const Home = () => {
	const [habits, setHabits] = useState([]);
	const [newHabit, setNewHabit] = useState('');

	useEffect(() => {
		fetchHabits
		()
			.then((data) => setHabits(data))
			.catch((err) => console.error(err));
	}, []);

	const toggleHabit = (id) => {
		markHabitDone(id)
			.then((updatedHabit) =>
				setHabits((prev) =>
					prev.map((h) => (h.id === updatedHabit.id ? updatedHabit : h))
				)
			)
			.catch((err) => console.error(err));
	};

	const handleAddHabit = () => {
		if (newHabit.trim() === '') return;

		createHabit(newHabit)
			.then((newHabitFromApi) => {
				setHabits((prev) => [...prev, newHabitFromApi]);
				setNewHabit('');
			})
			.catch((err) => console.error(err));
	};

	const handleDeleteHabit = (id) => {
		deleteHabit(id)
			.then(() => setHabits((prev) => prev.filter((h) => h.id !== id)))
			.catch((err) => console.error(err));
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
						onClick={handleAddHabit}
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
						onDelete={handleDeleteHabit}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
