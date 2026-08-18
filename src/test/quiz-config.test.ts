import {describe, expect, it} from 'vitest';
import {quizQuestions} from '../lib/quiz-config';

describe('quiz configuration', () => {
  it('uses five decision-relevant questions', () => {
    expect(quizQuestions).toHaveLength(5);
    expect(quizQuestions.map((question) => question.key)).toEqual([
      'ridingProfile',
      'budget',
      'height',
      'passenger',
      'vehicleType',
    ]);
  });

  it('uses three price bands aligned with the current catalogue', () => {
    const budget = quizQuestions.find((question) => question.key === 'budget');
    expect(budget?.options.map(([value]) => value)).toEqual(['12', '18', 'open']);
  });

  it('does not ask about licence or subjective beginner friendliness', () => {
    const keys: string[] = quizQuestions.map((question) => question.key);
    expect(keys).not.toContain('licence');
    expect(keys).not.toContain('priority');
  });
});
