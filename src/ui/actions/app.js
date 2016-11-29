
export const CURRENT_YEAR = 'CURRENT_YEAR';

export function currentYear() {
    return {
        type: CURRENT_YEAR,
        currentYear: null
    };
}