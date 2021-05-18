import { Injectable } from '@angular/core';
import { Goal } from '../goal';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoals(){
    return Goals;
  }

  getGoal(id){
    for(let goal of Goals){
      if (goal.id == id){
        return goal;
      }
    }   
  }
  
  constructor() { }
}
