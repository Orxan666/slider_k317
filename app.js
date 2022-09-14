
const slider = document.querySelector('#slider');
const wrapper = document.querySelector('.slider__wrapper');
const inner = document.querySelector('.slider__inner');
const sliderArr = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');
const dot = document.querySelector('.slider__dot ol');
const current = document.querySelector('.current');
const length = document.querySelector('.length');
const dotArr = [];
const width = wrapper.offsetWidth;

let offset = 0, count = 0;

inner.style.width = width * sliderArr.length + 'px';

if (sliderArr.length < 10) {
    length.textContent = '0' + sliderArr.length
} else {
    length.textContent = sliderArr.length
}

for (let i = 0; i < sliderArr.length; i++) {
    const li = document.createElement('li');
    dot.appendChild(li);
    dotArr.push(li);

    if (i == 0) {
        li.classList.add('active__dot')
    }

    li.addEventListener('click', () => {
        offset = i * width
        inner.style.transform = `translateX(-${offset}px)`;

        dotArr.forEach(item => item.classList.remove('active__dot'))
        li.classList.add('active__dot')


        count = i;

        if (count + 1 < 10) {
            current.textContent = '0' + (count + 1);
        } else {
            current.textContent = count + 1;
        }
    })
}

next.addEventListener('click', () => {
    if (offset == width * (sliderArr.length - 1)) {
        offset = 0;
        count = 0;
    } else {
        offset += width
        count += 1;
    }

    if (count + 1 < 10) {
        current.textContent = '0' + (count + 1);
    } else {
        current.textContent = count + 1;
    }

    dotArr.forEach(item => item.classList.remove('active__dot'))
    dotArr[count].classList.add('active__dot')


    inner.style.transform = `translateX(-${offset}px)`

})

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = width * (sliderArr.length - 1)
        count = sliderArr.length - 1;
    } else {
        offset -= width
        count -= 1;
    }


    if (count + 1 < 10) {
        current.textContent = '0' + (count + 1);
    } else {
        current.textContent = count + 1;
    }

    dotArr.forEach(item => item.classList.remove('active__dot'))
    dotArr[count].classList.add('active__dot')
    inner.style.transform = `translateX(-${offset}px)`
})


