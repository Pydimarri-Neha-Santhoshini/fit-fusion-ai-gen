
import React, { useState } from 'react';
import './AIRecommendations.css';
import RecommendationForm from './RecommendationForm';
import Recommendations from './Recommendations';

const AIRecommendations = () => {
  // State for form inputs
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [workoutIntensity, setWorkoutIntensity] = useState('Medium');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [equipment, setEquipment] = useState('');
  
  // State for recommendations
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [mealPlan, setMealPlan] = useState({
    breakfast: ['Fruit Juices', 'Eggs', 'Toast', 'Oats'],
    lunch: ['Salad', 'Roti', 'Rice', 'Soups'],
    dinner: ['Chapati', 'Fruit Juices']
  });
  
  const [workoutPlan, setWorkoutPlan] = useState({
    medium: [
      'Warm Up - 10 min',
      'Planks - 10 min, 20',
      'Pushups - 20 min, 10'
    ],
    easy: [
      'Warm Up - 10 min',
      'Dumbbells - 5 min, 10',
      'Bicycle crunch - 10 min, 10'
    ]
  });

  // Function to generate recommendations
  const generateRecommendations = () => {
    // In a real application, this would call an AI service
    // For now, we'll just show predefined recommendations
    setShowRecommendations(true);
  };

  // Function to regenerate recommendations
  const regenerateRecommendations = () => {
    // This would call the AI service again
    // For demo purposes, we'll just keep the same recommendations
    setShowRecommendations(true);
  };

  // Function to swap meals
  const swapMeals = () => {
    // Demo functionality to swap breakfast and dinner
    setMealPlan({
      ...mealPlan,
      breakfast: [...mealPlan.dinner],
      dinner: [...mealPlan.breakfast]
    });
  };

  // Function to save plan
  const savePlan = () => {
    alert('Your plan has been saved!');
  };

  return (
    <div className="ai-recommendations-container">
      <h1 className="main-title">AI Fitness Recommendations</h1>
      
      <RecommendationForm 
        fitnessGoal={fitnessGoal}
        setFitnessGoal={setFitnessGoal}
        workoutIntensity={workoutIntensity}
        setWorkoutIntensity={setWorkoutIntensity}
        dietaryRestrictions={dietaryRestrictions}
        setDietaryRestrictions={setDietaryRestrictions}
        equipment={equipment}
        setEquipment={setEquipment}
        generateRecommendations={generateRecommendations}
      />
      
      <Recommendations 
        showRecommendations={showRecommendations}
        mealPlan={mealPlan}
        workoutPlan={workoutPlan}
        swapMeals={swapMeals}
        savePlan={savePlan}
        regenerateRecommendations={regenerateRecommendations}
      />
    </div>
  );
};

export default AIRecommendations;
