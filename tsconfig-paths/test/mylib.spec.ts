import { sum } from '@/mylib/sum';
import { runATCommands } from '@/command-runner';

describe('mylib', () => {
    it('should work 1', () => {
        expect(sum(10, 10)).toBe(20);
    });

    it('should work 2', async () => {
        expect(await runATCommands()).toBe(42);
    });
});
