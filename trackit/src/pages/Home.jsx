import { useState } from 'react';
import HabitCard from '../components/HabitCard';

const Home = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Leer 20 minutos', doneToday: false },
    { id: 2, name: 'Entrenar', doneToday: true },
  ]);

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, doneToday: !habit.doneToday } : habit
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Mis hábitos</h1>
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggle={toggleHabit}
        />
      ))}
    </div>
  );
};

export default Home;
