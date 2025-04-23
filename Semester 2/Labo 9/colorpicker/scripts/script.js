document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');
    const saveButton = document.getElementById('bewaarKleur');
    const savedSliders = JSON.parse(localStorage.getItem('sliders'));
    if (savedSliders) {
        sliders[0].value = savedSliders.red;
        sliders[1].value = savedSliders.green;
        sliders[2].value = savedSliders.blue;
    }
    loadSavedColors();
    sliders.forEach((slider) => {
        slider.addEventListener('input', () => {
            update();
            saveSliders();
        });
    });
    saveButton.addEventListener('click', () => {
        bewaarKleur();
    });
    update();
});

const update = () => {
    const sliders = document.querySelectorAll('.slider');
    const red = sliders[0].value;
    const green = sliders[1].value;
    const blue = sliders[2].value;
    const colorDemo = document.querySelector('.colorDemo');
    colorDemo.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById('red').textContent = red;
    document.getElementById('green').textContent = green;
    document.getElementById('blue').textContent = blue;
};

const saveSliders = () => {
    const sliders = document.querySelectorAll('.slider');
    const slidersObj = {
        red: sliders[0].value,
        green: sliders[1].value,
        blue: sliders[2].value
    };
    localStorage.setItem('sliders', JSON.stringify(slidersObj));
};

const loadSavedColors = () => {
    const colors = JSON.parse(localStorage.getItem('colors')) || [];
    colors.forEach((color) => {
        createSwatch(color);
    });
};

const createSwatch = (color) => {
    const sliders = document.querySelectorAll('.slider');
    const container = document.getElementById('bewaardeKleuren');
    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = color;
    const rgbValues = color.match(/\d+/g);
    swatch.addEventListener('click', () => {
        sliders[0].value = rgbValues[0];
        sliders[1].value = rgbValues[1];
        sliders[2].value = rgbValues[2];
        update();
        saveSliders();
    });
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        swatch.remove();
        removeColor(color);
    });
    swatch.appendChild(deleteBtn);
    container.appendChild(swatch);
};

const bewaarKleur = () => {
    const colorDemo = document.querySelector('.colorDemo');
    const color = colorDemo.style.backgroundColor;
    const colors = JSON.parse(localStorage.getItem('colors')) || [];
    colors.push(color);
    localStorage.setItem('colors', JSON.stringify(colors));
    createSwatch(color);
};

const removeColor = (color) => {
    let colors = JSON.parse(localStorage.getItem('colors')) || [];
    colors = colors.filter((c) => c !== color);
    localStorage.setItem('colors', JSON.stringify(colors));
};
