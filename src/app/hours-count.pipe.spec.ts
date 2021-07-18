import { HoursCountPipe } from './hours-count.pipe';

describe('HoursCountPipe', () => {
  it('create an instance', () => {
    const pipe = new HoursCountPipe();
    expect(pipe).toBeTruthy();
  });
});
