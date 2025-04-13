
import React from 'react';
import { Dumbbell, RefreshCw, Save } from 'lucide-react';

interface WorkoutPlanProps {
  workoutPlan: {
    medium: string[];
    easy: string[];
  };
  savePlan: () => void;
  regenerateRecommendations: () => void;
}

const WorkoutPlan = ({ 
  workoutPlan, 
  savePlan, 
  regenerateRecommendations 
}: WorkoutPlanProps) => {
  return (
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
  );
};

export default WorkoutPlan;
