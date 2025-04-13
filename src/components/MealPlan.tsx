
import React from 'react';
import { Utensils } from 'lucide-react';

interface MealPlanProps {
  mealPlan: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
  };
  swapMeals: () => void;
}

const MealPlan = ({ mealPlan, swapMeals }: MealPlanProps) => {
  return (
    <div className="plan-card">
      <h2 className="plan-title">Meal Plan <Utensils className="inline-icon" /></h2>
      <div className="meal-plan">
        <div className="meal-column">
          <h3>Breakfast</h3>
          <ul>
            {mealPlan.breakfast.map((item, index) => (
              <li key={`breakfast-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="meal-column">
          <h3>Lunch</h3>
          <ul>
            {mealPlan.lunch.map((item, index) => (
              <li key={`lunch-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="meal-column">
          <h3>Dinner</h3>
          <ul>
            {mealPlan.dinner.map((item, index) => (
              <li key={`dinner-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <button className="swap-btn" onClick={swapMeals}>MEAL SWAP</button>
    </div>
  );
};

export default MealPlan;
