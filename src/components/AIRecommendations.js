import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  Dumbbell, 
  Utensils,
  RefreshCw,
  Save
} from 'lucide-react';
import './AIRecommendations.css';

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
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <div className="profile-circle"></div>
        </div>
        <h1>AI Recommendations</h1>
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>DASHBOARD</li>
          </ul>
        </nav>
        <div className="header-icons">
          <Bell className="icon" />
          <Calendar className="icon" />
        </div>
      </header>

      {/* Form */}
      <div className="form-container">
        <div className="form-group">
          <label>Fitness Goals:</label>
          <input 
            type="text" 
            placeholder="Weight loss, Muscle Gain..." 
            value={fitnessGoal}
            onChange={(e) => setFitnessGoal(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Workout Intensity:</label>
          <div className="intensity-options">
            <span className={workoutIntensity === 'Low' ? 'selected' : ''} onClick={() => setWorkoutIntensity('Low')}>Low</span>
            <span className={workoutIntensity === 'Medium' ? 'selected' : ''} onClick={() => setWorkoutIntensity('Medium')}>Medium</span>
            <span className={workoutIntensity === 'High' ? 'selected' : ''} onClick={() => setWorkoutIntensity('High')}>High</span>
          </div>
        </div>

        <div className="form-group">
          <label>Dietary Restrictions:</label>
          <input 
            type="text" 
            placeholder="Lactose intolerance, Vegan..." 
            value={dietaryRestrictions}
            onChange={(e) => setDietaryRestrictions(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Equipment Available:</label>
          <select 
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          >
            <option value="">Select Option</option>
            <option value="none">None</option>
            <option value="basic">Basic Home Equipment</option>
            <option value="full">Full Gym</option>
          </select>
        </div>

        <button className="get-recommendations-btn" onClick={generateRecommendations}>
          GET RECOMMENDATIONS
        </button>
      </div>

      {/* Recommendations */}
      {showRecommendations && (
        <div className="recommendations-container">
          {/* Meal Plan */}
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

          {/* Workout Plan */}
          <div className="plan-card">
            <h2 className="plan-title">WorkOut Plan <Dumbbell className="inline-icon" /></h2>
            <div className="workout-plan">
              <div className="workout-column">
                <ul>
                  {workoutPlan.medium.map((item, index) => (
                    <li key={`medium-${index}`}>{item}</li>
                  ))}
                </ul>
                <p className="difficulty">Difficulty - Medium</p>
              </div>
              <div className="workout-column">
                <ul>
                  {workoutPlan.easy.map((item, index) => (
                    <li key={`easy-${index}`}>{item}</li>
                  ))}
                </ul>
                <p className="difficulty">Difficulty - Easy</p>
              </div>
            </div>
            <div className="action-buttons">
              <button className="save-btn" onClick={savePlan}>
                <Save className="inline-icon" /> SAVE PLAN
              </button>
              <button className="regenerate-btn" onClick={regenerateRecommendations}>
                <RefreshCw className="inline-icon" /> REGENERATE RECOMMENDATIONS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRecommendations;
