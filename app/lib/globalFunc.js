
export function displayWidth(width, operator) {
    if (typeof window !== 'undefined') {

        return operator ?
            operator === "<"
                ? window?.innerWidth < width
                : window?.innerWidth > width
            : window?.innerWidth < width
    }
}