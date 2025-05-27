import { useState } from 'react';
import HabitCard from '../components/HabitCard';

const Home = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Leer 20 minutos', doneToday: false },
    { id: 2, name: 'Entrenar', doneToday: true },
  ]);
  const [newHabit, setNewHabit] = useState('');

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, doneToday: !habit.doneToday } : habit
      )
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

    {/* // <div className="max-w-xl mx-auto mt-10 px-4"> */}

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
