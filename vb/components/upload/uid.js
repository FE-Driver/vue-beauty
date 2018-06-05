let index = 0;

export default function uid() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${++index}`;
}
