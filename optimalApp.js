const callElem = className => document.querySelector(className),
    callElems = className => document.querySelectorAll(className),
    slider = callElem('#slider'),
    wrapper = callElem('.slider__wrapper'),
    inner = callElem('.slider__inner'),
    sliderArr = callElems('.slider__item'),
    prev = callElem('.slider__prev'),
    next = callElem('.slider__next'),
    dot = callElem('.slider__dot ol'),
    current = callElem('.current'),
    length = callElem('.length'),
    dotArr = [],
    width = wrapper.offsetWidth;

let offset = 0, count = 0;
getDefaultParams();

function getDefaultParams() {
    inner.style.width = width * sliderArr.length + 'px';
    if (sliderArr.length < 10) {
        length.textContent = '0' + sliderArr.length
    } else {
        length.textContent = sliderArr.length
    }
}

for (let i = 0; i < sliderArr.length; i++) {
    const li = document.createElement('li');
    dot.appendChild(li);
    dotArr.push(li);


    if (i == 0) {
        li.classList.add('active__dot')
    }

    li.addEventListener('click', () => {
        offset = i * width;
        count = i;
        builder(i);
    })
}

function builder(i) {
    if (i + 1 < 10) {
        current.textContent = '0' + (i + 1);
    } else {
        current.textContent = i + 1;
    }
    dotArr.forEach(item => item.classList.remove('active__dot'))
    dotArr[i].classList.add('active__dot')
    inner.style.transform = `translateX(-${offset}px)`
}

next.addEventListener('click', () => {
    if (offset == width * (sliderArr.length - 1)) {
        offset = 0;
        count = 0;
    } else {
        offset += width
        count += 1;
    }
    builder(count)
})

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = width * (sliderArr.length - 1)
        count = sliderArr.length - 1;
    } else {
        offset -= width
        count -= 1;
    }

    builder(count)
})


