/* @flow */

import type { Action } from '../../../../actions'
import type {
  CourseDifficulty,
  MainActivity,
  SecondaryActivity
} from '../types'

export function editName (name: string): Action {
  return {
    type: 'teacher-composer-course-name-edit',
    name: name
  }
}

export function editDifficulty (difficulty: CourseDifficulty): Action {
  return {
    type: 'teacher-composer-course-difficulty-edit',
    difficulty: difficulty
  }
}

export function setMainActivity (activity: MainActivity): Action {
  return {
    type: 'teacher-composer-main-activity-set',
    activity: activity
  }
}

export function setSecondaryActivity (activity: SecondaryActivity): Action {
  return {
    type: 'teacher-composer-secondary-activity-set',
    activity: activity
  }
}
