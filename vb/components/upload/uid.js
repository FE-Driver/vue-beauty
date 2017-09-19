const now = +(new Date());
let index = 0;

export default function uid() {
    return `ant-upload-${now}-${++index}`;
}
