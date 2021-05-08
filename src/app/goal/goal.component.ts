import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(
      1,
      'Watch Finfind Nemo',
      'This is a sample description. Ya wale wazuri',
      new Date(2021,4,14)
    ),
    new Goal(2, 'Wake up', 'We try to wake up at 5 to study. tusome kwa bidii',new Date(2021,9,4)),
    new Goal(
      3,
      'Wash my face',
      'After waking up,I wash my face, I comb my hair, I brush my teeth.. hii ni refu sana',new Date(2021,6,24)
    ),
    new Goal(
      4,
      'Read Angular',
      "Today, tume ng'ang'ana mpaka Angular imeanza kuingia... acha ikae hivo",new Date(2021,7,18)
    ),
    new Goal(
      5,
      'Go to sleep again',
      'Wanzu, tukishamaliza kusoma, anarudi kulala tena.. ile sleep deep.kama ile ya locker',new Date(2021,8,26)
    ),
    new Goal(
      6,
      'Wake up for real.',
      'Alafu, at 9 ama 9:30, ndio sasa tunaamka officially.. ile ya ukweli.. kabisaa',new Date(2020,2,6)
    ),
  ];

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)
      if(toDelete){
        this.goals.splice(index,1);
      }
    }
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal)
  }

  constructor() {}

  ngOnInit(): void {}
}
