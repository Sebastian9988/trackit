import { useEffect, useState } from 'react';
import { getHabits } from '../services/api';
import HabitCard from '../components/HabitCard';

const Home = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    getHabits().then(setHabits);
  }, []);

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id ? { ...h, doneToday: !h.doneToday } : h
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Mis Hábitos</h1>
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} onToggle={toggleHabit} />
      ))}
    </div>
  );
};

export default Home;
