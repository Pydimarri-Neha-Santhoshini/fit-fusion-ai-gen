
import React from 'react';

interface RecommendationFormProps {
  fitnessGoal: string;
  setFitnessGoal: (goal: string) => void;
  workoutIntensity: string;
  setWorkoutIntensity: (intensity: string) => void;
  dietaryRestrictions: string;
  setDietaryRestrictions: (restrictions: string) => void;
  equipment: string;
  setEquipment: (equipment: string) => void;
  generateRecommendations: () => void;
}

const RecommendationForm = ({
  fitnessGoal,
  setFitnessGoal,
  workoutIntensity,
  setWorkoutIntensity,
  dietaryRestrictions,
  setDietaryRestrictions,
  equipment,
  setEquipment,
  generateRecommendations
}: RecommendationFormProps) => {
  return (
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
          <span 
            className={workoutIntensity === 'Low' ? 'selected' : ''} 
            onClick={() => setWorkoutIntensity('Low')}
          >
            Low
          </span>
          <span 
            className={workoutIntensity === 'Medium' ? 'selected' : ''} 
            onClick={() => setWorkoutIntensity('Medium')}
          >
            Medium
          </span>
          <span 
            className={workoutIntensity === 'High' ? 'selected' : ''} 
            onClick={() => setWorkoutIntensity('High')}
          >
            High
          </span>
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
  );
};

export default RecommendationForm;
