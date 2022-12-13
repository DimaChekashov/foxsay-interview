// Отфильтруйте анаграммы
function key(str: string): number {
    str = str.toLowerCase();
    let sum: number = 0;

    for(let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }

    return sum;
}

function aclean(arr: string[]): string[] {
    const map = new Map<number, string>();

    for (let i = 0; i < arr.length; i++) {
        map.set(key(arr[i]), arr[i]);
    }

    return [...map.values()];
}

let arr: string[] = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean);