const path = 'src/assets/image';
const fileXtnsn = '.png';
const imgArr = Array(5)
    .fill()
    .map((_, index) => path + `${index + 1}` + fileXtnsn);

const pickImage = () => {

    const imgIndex = Math.floor(Math.random() * imgArr.length);

    return imgArr[imgIndex];
};

export default pickImage;