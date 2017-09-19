export default function getFileItem(file, fileList) {
    const matchWay = (!file.uid) ? 'byName' : 'byUid';

    const target = fileList.filter((item) => {
        if (matchWay === 'byName') {
            return item.name === file.name;
        }
        return item.uid === file.uid;
    })[0];

    return target;
}
