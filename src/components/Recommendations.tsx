
import React from 'react';
import MealPlan from './MealPlan';
import WorkoutPlan from './WorkoutPlan';

interface RecommendationsProps {
  showRecommendations: boolean;
  mealPlan: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
  };
  workoutPlan: {
    medium: string[];
    easy: string[];
  };
  swapMeals: () => void;
  savePlan: () => void;
  regenerateRecommendations: () => void;
}

const Recommendations = ({
  showRecommendations,
  mealPlan,
  workoutPlan,
  swapMeals,
  savePlan,
  regenerateRecommendations
}: RecommendationsProps) => {
  if (!showRecommendations) return null;
  
  return (
    <div className="recommendations-container">
      <MealPlan mealPlan={mealPlan} swapMeals={swapMeals} />
      <WorkoutPlan 
        workoutPlan={workoutPlan} 
        savePlan={savePlan} 
        regenerateRecommendations={regenerateRecommendations} 
      />
    </div>
  );
};

export default Recommendations;
